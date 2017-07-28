export function process(source_text: string, source_path: string) {
  return `
    const path = require('path');
    const runtime = require('../../../build/runtime/index');

    const filename = ${JSON.stringify(source_path)};
    const source = ${JSON.stringify(source_text)};
    const formatted = runtime.format(filename, source);

    const message_no_error = 'no error\\n';
    const rule_name = path.basename(__dirname);
    const error_regex = new RegExp('^ERROR: \\\\(' + rule_name + '\\\\)', 'gm');

    const get_match_count = (str, regex) => {
      const result = str.match(regex);
      return result === null
        ? 0
        : result.length;
    };
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
      const error_count_before = get_match_count(message_before, error_regex);
      const error_count_after = get_match_count(message_after, error_regex);
      expect(error_count_after).not.toBe(error_count_before);
      expect(print_before_after(message_before, message_after)).toMatchSnapshot();
    });

    it('should be pretty after formatting', () => {
      expect(print_before_after(source, formatted)).toMatchSnapshot();
    });
  `;
}
