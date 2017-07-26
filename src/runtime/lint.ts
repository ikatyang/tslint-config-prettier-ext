import * as fs from 'fs';
import * as path from 'path';
import * as tslint from 'tslint';
import * as ts from 'typescript';

export function lint(filename: string, source: string) {
  const dirname = path.dirname(filename);

  const tslint_path = path.join(dirname, 'tslint.json');
  const tslint_config = tslint.Linter.findConfiguration(tslint_path, '')
    .results;
  const linter = new tslint.Linter({ fix: false, formatter: 'verbose' });

  linter.lint(filename, source, tslint_config);
  const results = linter.getResult();

  if (results.failures.length > 0) {
    const output = results.output.replace(new RegExp(process.cwd(), 'g'), '');
    throw new Error(output);
  }
}
