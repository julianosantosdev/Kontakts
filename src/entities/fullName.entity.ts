import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('fullName')
class FullName {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 50 })
  fullName: string;

  @CreateDateColumn({ type: 'date' })
  createdAt: Date | string;
}

export default FullName;
