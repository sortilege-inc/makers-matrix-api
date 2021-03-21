import * as dotenv from 'dotenv';
import * as fs from 'fs';

export interface ConfigData {
  PORT?: string

  DB_TYPE: 'mysql' | 'mariadb'
  DB_HOST?: string
  DB_DATABASE: string
  DB_PORT?: number
  DB_USERNAME: string
  DB_PASSWORD: string
}

export class ConfigService {
  private readonly vars: ConfigData;

  constructor(filePath: string) {
    const envConfig: any = dotenv.parse(fs.readFileSync(filePath));
    envConfig.DB_PORT = parseInt(envConfig.DB_PORT);
    this.vars = envConfig as ConfigData;
  }

  get(key) {
    return this.vars[key];
  }

  read (): ConfigData {
    return this.vars;
  }
}
