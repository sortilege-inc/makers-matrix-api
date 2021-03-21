import {Injectable} from '@nestjs/common';
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from '@nestjs/typeorm';
import { ConfigService } from '@lib-config/config.service';
import { Player } from '@lib-player/player.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    private _conf: any;
    constructor(private readonly configService: ConfigService) {
        this._conf = this.configService.read();
    }
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            retryAttempts: 3,
            retryDelay: 10,
            keepConnectionAlive: false,
            type: this._conf.DB_TYPE,
            port: this._conf.DB_PORT,
            host: this._conf.DB_HOST,
            username: this._conf.DB_USERNAME,
            password: this._conf.DB_PASSWORD,
            database: this._conf.DB_DATABASE,
            entities: [
                Player
            ],
            synchronize: true
        };
    }
}
