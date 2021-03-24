import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  player_uuid: string;

  @Column({type: 'tinyint', nullable: false, precision: 1, default: 1})
  active: number;

  @Column({type: 'varchar', length: 75, nullable: true, default: null})
  name: string;

  @Column({type: 'int', nullable: true, default: null})
  level_number: number;
}
