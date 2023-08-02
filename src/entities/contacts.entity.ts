import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
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

  @OneToOne(() => FullName, (fullName) => fullName.contact)
  fullName: FullName;

  @OneToMany(() => Address, (address) => address.contact, {
    onDelete: 'CASCADE',
  })
  addresses: Address[];

  @OneToMany(() => Email, (email) => email.contact, { onDelete: 'CASCADE' })
  emails: Email[];

  @OneToMany(() => Phone, (phone) => phone.contact, { onDelete: 'CASCADE' })
  phones: Phone[];

  @ManyToOne(() => User, (user) => user.contacts, { onDelete: 'CASCADE' })
  user: User;
}

export default Contact;
