import { ExceptionFilter, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity.js';
import { Repository } from 'typeorm';
import { isUUID } from 'class-validator';


@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>){}

  async create(createUserDto: CreateUserDto): Promise<CreateUserInter | ExceptionFilter> {
    const {username} = createUserDto;

      const user = this.userRepository.create({
        username,
      })

      this.userRepository.save(user)
      return {
        id: user.id,
        username: user.username,
      }
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  async findOne(id: string): Promise<OneUserInter | null> {
    
    const user = await this.userRepository.findOneBy({ id });
    
    if(!user) throw new NotFoundException()
    return {
      id: user.id,
      username: user.username,
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
