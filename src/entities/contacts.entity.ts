import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import User from './users.entity';
import Email from './email.entity';
import Phone from './phones.entity';
import Address from './addresses.entity';

@Entity('contacts')
class Contact {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 50 })
  fullName: string;
  
  @CreateDateColumn({ type: 'date' })
  createdAt: Date | string;

  @OneToMany(() => Address, (address) => address.contact)
  addresses: Address[];
  
  @OneToMany(() => Email, (email) => email.contact)
  emails: Email[];

  @OneToMany(() => Phone, (phone) => phone.contact)
  phones: Phone[];

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}

export default Contact;
