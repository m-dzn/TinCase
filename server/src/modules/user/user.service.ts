import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async signUp(userDTO: UserDTO) {
    const exUser = await this.userRepository.findOne({
      where: { email: userDTO.email },
    });

    if (exUser) {
      throw new HttpException('이미 등록된 사용자입니다.', HttpStatus.CONFLICT);
    }

    const newUser = {
      email: userDTO.email,
      nickname: userDTO.nickname,
      password: userDTO.password,
    };

    await this.userRepository.save(newUser);
  }
}
