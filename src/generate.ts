import * as fs from 'fs';
import * as mkdir from 'make-dir';
import * as path from 'path';

const output_dirname = path.resolve(__dirname, '../lib');
const output_filename = path.join(output_dirname, 'rules.json');

const rule_providers_dirname = path.resolve(__dirname, '../rules');
const rule_names: string[] = [];

fs.readdirSync(rule_providers_dirname).forEach(rule_provider_name => {
  const rule_provider_dirname = path.join(
    rule_providers_dirname,
    rule_provider_name,
  );

  if (!fs.statSync(rule_provider_dirname).isDirectory()) {
    return;
  }

  fs.readdirSync(rule_provider_dirname).forEach(rule_name => {
    const rule_dirname = path.join(rule_provider_dirname, rule_name);

    if (!fs.statSync(rule_dirname).isDirectory()) {
      return;
    }

    if (rule_names.indexOf(rule_name) !== -1) {
      throw new Error(
        `Duplicate rule '${rule_name}' in '${rule_provider_name}'`,
      );
    }
    rule_names.push(rule_name);
  });
});

const rules = rule_names
  .slice()
  .sort()
  .reduce<Record<string, boolean>>(
    (current, rule_name) => ({ ...current, [rule_name]: false }),
    {},
  );

mkdir.sync(output_dirname);
fs.writeFileSync(
  output_filename,
  JSON.stringify({ rules, jsRules: rules }, null, 2),
);
