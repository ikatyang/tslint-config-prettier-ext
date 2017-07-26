export function process(source_text: string, source_path: string) {
  return `
    const path = require('path');
    const runtime = require('../../../build/runtime/index');

    const filename = ${JSON.stringify(source_path)};
    const source = ${JSON.stringify(source_text)};

    const rule_name = path.basename(__dirname);

    it('should fail before formatting', () => {
      let message;
      expect(function () {
        try {
          runtime.lint(filename, source);
        } catch (error) {
          message = error.message;
          throw error;
        }
      }).toThrowErrorMatchingSnapshot();
      expect(message).toMatch(new RegExp('ERROR: \\\\(' + rule_name + '\\\\)'));
    });

    const formatted = runtime.format(source);

    it('should pass after formatting', () => {
      expect(function () {
        runtime.lint(filename, formatted);
      }).not.toThrowError();
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
