import { Controller, BadRequestException, Get, Param, Req, Post, Put, Body} from '@nestjs/common';
import { PlayerService } from '@app/endpoints/player/player.service';
import { Player } from '@lib-player/player.entity';
import { Request } from 'express';

@Controller('player')
export class PlayerController {
    constructor(private readonly playerService: PlayerService) {}

    /**
     * Find all players
     * @return {Player[]} The found players
     */
    @Get('all')
    async getAllPlayers(@Req() req: Request): Promise<Player[]> {
        return await this.playerService.findAll();
    }

}
