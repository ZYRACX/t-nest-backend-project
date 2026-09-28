import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module.js';
import { User } from './users/entities/user.entity.js';
import { SupabaseService } from './common/supabase/supabase.service.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "aws-1-ap-south-1.pooler.supabase.com",
      port: 5432,
      username: "postgres.dulxnlbzmhojbxgshanz",
      password: '7nDKJ5JWImNMKDtq',
      database: 'postgres',
      // synchronize: true,
       entities: [User],
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, SupabaseService],
})
export class AppModule {}