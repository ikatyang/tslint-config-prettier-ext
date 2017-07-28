export function process(source_text: string, source_path: string) {
  return `
    const path = require('path');
    const runtime = require('../../../build/runtime/index');

    const filename = ${JSON.stringify(source_path)};
    const source = ${JSON.stringify(source_text)};

    const rule_name = path.basename(__dirname);

    let message_before;
    let message_after;

    it('should fail before formatting', () => {
      try {
        runtime.lint(filename, source);
      } catch (error) {
        message_before = error.message;
      }
      expect(message_before).toMatch(new RegExp('ERROR: \\\\(' + rule_name + '\\\\)'));
    });

    const formatted = runtime.format(source);

    it('should affect error message after formatting', () => {
      try {
        message_after = 'no error\\n';
        runtime.lint(filename, formatted);
      } catch (error) {
        message_after = error.message;
      }
      expect(message_after).not.toBe(message_before);
      expect(
        '\\n<<<<<< before\\n' +
        message_before +
        '\\n======\\n' +
        message_after +
        '\\n>>>>>> after\\n').toMatchSnapshot();
    });

    it('should be pretty after formatting', () => {
      expect(
        '\\n<<<<<< before\\n' +
        source +
        '\\n======\\n' +
        formatted +
        '\\n>>>>>> after\\n').toMatchSnapshot();
    });
  `;
}
