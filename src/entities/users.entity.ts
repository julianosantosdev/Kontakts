import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import Contact from './contacts.entity';
import { getRounds, hashSync } from 'bcryptjs';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 50 })
  fullName: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 150 })
  password: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone: string | null | undefined;

  @CreateDateColumn({ type: 'date' })
  createdAt: Date | string;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date | string;

  @DeleteDateColumn({ type: 'date', nullable: true, default: null })
  deletedAt: Date | string | null | undefined;

  @OneToMany(() => Contact, (contact) => contact.user, {onDelete: 'CASCADE'})
  contacts: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted: number = getRounds(this.password);

    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }

  normalizeCaseEmail() {
    this.email = this.email.toLowerCase();
  }
}

export default User;
