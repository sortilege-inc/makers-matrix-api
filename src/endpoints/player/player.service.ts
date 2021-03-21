import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Player } from '@lib-player/player.entity';

import { ConfigService } from '@lib-config/config.service';
const _conf = new ConfigService(`./config/${process.env.NODE_ENV || 'development'}.env`);

@Injectable()
export class PlayerService {

    constructor(
        @InjectRepository(Player, 'mmConnection') private readonly playerRepository: Repository<Player>,
    ) {}


    public async findAll(): Promise<Player[]> {
        return await this.playerRepository.find();
    }


    private async timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
