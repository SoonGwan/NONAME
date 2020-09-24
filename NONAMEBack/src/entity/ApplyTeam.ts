import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  PrimaryColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('ApplyTeam')
export default class ApplyTeam {
  @PrimaryGeneratedColumn()
  idx: number;

  @PrimaryColumn({
    length: 255,
    nullable: false,
  })
  user_id: string;

  @PrimaryColumn({
    nullable: false,
  })
  apply_team_idx: number;

  @Column({
    length: 255,
    nullable: false,
  })
  team_apply_reason: string;

  @Column('timestamp')
  @CreateDateColumn()
  apply_time: Date;
}
