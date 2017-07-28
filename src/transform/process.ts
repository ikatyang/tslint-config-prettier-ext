export function process(source_text: string, source_path: string) {
  return `
    const path = require('path');
    const runtime = require('../../../build/runtime/index');

    const filename = ${JSON.stringify(source_path)};
    const source = ${JSON.stringify(source_text)};
    const formatted = runtime.format(source);

    const message_no_error = 'no error\\n';
    const rule_name = path.basename(__dirname);
    const error_regex = new RegExp('ERROR: \\\\(' + rule_name + '\\\\)');

    const get_line_count = str => str.split('\\n').length;
    const print_before_after = (before, after) => (
      '\\n<<<<<< before\\n' +
      before +
      '\\n======\\n' +
      after +
      '\\n>>>>>> after\\n'
    );

    let message_before = message_no_error;
    let message_after = message_no_error;

    try {
      runtime.lint(filename, source);
    } catch (error) {
      message_before = error.message;
    }

    try {
      runtime.lint(filename, formatted);
    } catch (error) {
      message_after = error.message;
    }

    it('should affect error message after formatting', () => {
      if (message_before === message_no_error) {
        expect(message_after).toMatch(error_regex);
      } else if (message_after === message_no_error) {
        expect(message_before).toMatch(error_regex);
      } else {
        expect(message_after).toMatch(error_regex);
        expect(message_before).toMatch(error_regex);
        expect(get_line_count(message_after)).not.toBe(get_line_count(message_before));
      }
      expect(print_before_after(message_before, message_after)).toMatchSnapshot();
    });

    it('should be pretty after formatting', () => {
      expect(print_before_after(source, formatted)).toMatchSnapshot();
    });
  `;
}
