import * as prettier from 'prettier';

export function format(filename: string, source: string) {
  return prettier.format(source, { filepath: filename });
}
