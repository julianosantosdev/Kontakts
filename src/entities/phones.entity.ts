import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import Contact from './contacts.entity';

@Entity('phones')
class Phone {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone: string | null | undefined;

  @CreateDateColumn({ type: 'date' })
  createdAt: Date | string;

  @ManyToOne(() => Contact, (contact) => contact.phones, {onDelete: 'CASCADE'})
  contact: Contact;
}

export default Phone;
