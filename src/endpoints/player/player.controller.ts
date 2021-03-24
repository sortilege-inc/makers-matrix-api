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
        try {
            return await this.playerService.findAll();
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

    @Post('')
    async savePlayer(@Req() req: Request, @Body() player: Player): Promise<any> {
        try {
            return this.playerService.save(player);
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

    @Put('')
    async updatePlayer(@Req() req: Request, @Body() player: Player): Promise<any> {
        try {
            return this.playerService.update(player);
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

}
