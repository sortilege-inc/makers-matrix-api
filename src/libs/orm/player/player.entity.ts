import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  player_uuid: string;

  @Column({type: 'tinyint', nullable: true, precision: 1, default: 0})
  active: number;

  @Column({type: 'varchar', length: 75, nullable: true, default: null})
  name: string;
}
