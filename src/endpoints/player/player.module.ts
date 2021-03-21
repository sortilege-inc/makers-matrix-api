import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { Player } from '@lib-player/player.entity';

@Module({
    imports: [ HttpModule,
      TypeOrmModule.forFeature([ Player ], 'mmConnection')],
    controllers: [ PlayerController ],
    providers: [ PlayerService ],
    exports: [ PlayerService ],
})
export class PlayerModule {}
