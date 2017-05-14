import { dirname } from 'path';
import { readFileSync } from 'fs';
import { IConfig } from '../utils/interfaces/config.d';

const config: IConfig = JSON.parse(readFileSync(`${__dirname}/../../config/config.json`, 'UTF-8'));

export default config;
