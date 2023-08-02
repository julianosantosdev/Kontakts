import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Contact from './contacts.entity';

@Entity('fullName')
class FullName {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 50 })
  fullName: string;

  @OneToOne(() => Contact, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  contact: Contact;

  @CreateDateColumn({ type: 'date' })
  createdAt: Date | string;
}

export default FullName;
