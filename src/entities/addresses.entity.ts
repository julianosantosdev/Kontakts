import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,

  ManyToOne,
} from 'typeorm';
import Contact from './contacts.entity';

@Entity('addresses')
class Address {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 50 })
  street: string;

  @Column({ type: 'varchar', length: 7, nullable: true })
  number: string | null | undefined;

  @Column({ type: 'varchar', length: 30 })
  city: string;

  @Column({ type: 'varchar', length: 2 })
  state: string;

  @CreateDateColumn({ type: 'date' })
  createdAt: Date | string;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date | string;

  @ManyToOne(() => Contact, (contact) => contact.addresses, {onDelete: 'CASCADE'})
  contact: Contact;
}

export default Address;
