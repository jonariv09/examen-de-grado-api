import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [AuthModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
