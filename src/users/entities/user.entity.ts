import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
  Check,
  PrimaryColumn,
} from 'typeorm';

// @Index('idx_users_username', ['username'])
// @Index('idx_users_is_deleted', ['isDeleted'])
// @Index('idx_users_created_at', ['createdAt'])
// @Index('idx_users_updated_at', ['updatedAt'])
// @Check('chk_users_email_not_empty', `"email" <> ''`)
// @Check('chk_users_username_not_empty', `"username" <> ''`)
// @Check('chk_users_password_hash_not_empty', `"password_hash" <> ''`)

@Entity({
  schema: 'public',
  name: 'users',
})
export class User {
  // @PrimaryGeneratedColumn('uuid')
  @PrimaryColumn({type: "uuid"})
  id: string;

  @Column({
    type: 'varchar',
    length: 64,
  })
  username: string;


  @Column({
    type: 'boolean',
    default: false,
  })
  is_superuser: boolean;

  @Column({
    type: 'boolean',
    default: false,
  })
  is_deleted: boolean;

  
}