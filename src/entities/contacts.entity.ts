import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import User from './users.entity';
import Email from './email.entity';
import Phone from './phones.entity';
import Address from './addresses.entity';
import FullName from './fullName.entity';

@Entity('contacts')
class Contact {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn({ type: 'date' })
  createdAt: Date | string;

  @OneToOne(() => FullName)
  @JoinColumn()
  fullName: FullName;

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
