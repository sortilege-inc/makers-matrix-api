import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '@lib-db/db';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@lib-config/config.module';
import { ConfigService } from '@lib-config/config.service';
import { PlayerModule } from '@app/endpoints/player/player.module';
const _conf = new ConfigService(`./config/${process.env.NODE_ENV || 'development'}.env`);
@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      name: 'mmConnection',
    }),
    PlayerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
