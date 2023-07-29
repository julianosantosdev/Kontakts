import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import Contact from './contacts.entity';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 50 })
  fullName: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 30 })
  password: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone: string | null | undefined;

  @CreateDateColumn({ type: 'date' })
  createdAt: Date | string;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date | string;

  @DeleteDateColumn({ type: 'date' })
  deletedAt: Date | string;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}

export default User;
