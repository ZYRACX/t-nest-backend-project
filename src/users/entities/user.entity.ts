import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { Company } from '../../companies/entities/company.entity.js';

@Entity({ schema: 'public', name: 'users' })
export class User {
  @PrimaryColumn({ type: "uuid" })
  id: string;

  @Column({ type: 'varchar', length: 64 })
  username: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  avatar_url: string;

  @Column({ type: 'boolean', default: false })
  is_superuser: boolean;

  @Column({ type: 'boolean', default: false })
  is_deleted: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date;

  @OneToOne(() => Company, (company) => company.user)
  company: Company;
}