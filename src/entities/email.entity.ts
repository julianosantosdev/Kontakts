import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import Contact from './contacts.entity';

@Entity('emails')
class Email {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @CreateDateColumn({ type: 'date' })
  createdAt: Date | string;

  @ManyToOne(() => Contact, (contact) => contact.emails)
  contact: Contact
}

export default Email;
