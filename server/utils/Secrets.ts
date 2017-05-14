import { dirname } from 'path';
import { readFileSync } from 'fs';
import { ISecrets } from '../utils/interfaces/secrets.d';

const secrets: ISecrets = JSON.parse(readFileSync(`${__dirname}/../../../.secrets.json`, 'UTF-8'));

export default secrets;
