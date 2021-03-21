import * as dotenv from 'dotenv';
import * as fs from 'fs';

export interface ConfigData {
  PORT?: string
  // Office Database:
  DB_DIGGSLY_TYPE: 'mysql' | 'mariadb'
  DB_DIGGSLY_HOST?: string
  DB_DIGGSLY_DATABASE: string
  DB_DIGGSLY_PORT?: number
  DB_DIGGSLY_USERNAME: string
  DB_DIGGSLY_PASSWORD: string
}

export class ConfigService {
  private readonly vars: ConfigData;

  constructor(filePath: string) {
    const envConfig: any = dotenv.parse(fs.readFileSync(filePath));
    envConfig.DB_DIGGSLY_PORT = parseInt(envConfig.DB_DIGGSLY_PORT);
    this.vars = envConfig as ConfigData;
  }

  get(key) {
    return this.vars[key];
  }

  read (): ConfigData {
    return this.vars;
  }
}
