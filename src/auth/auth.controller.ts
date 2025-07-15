// src/auth/auth.controller.ts
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private prisma: PrismaService,
  ) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string; role: 'Admin' | 'Designer' }) {
    const hashed = await bcrypt.hash(body.password, 10);
    const user = await this.prisma.user.create({
      data: {
        username: body.username,
        password: hashed,
        role: body.role,
      },
    });
    return { id: user.id, username: user.username, role: user.role };
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.prisma.user.findUnique({ where: { username: body.username } });
    if (!user || !(await bcrypt.compare(body.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const token = this.authService.generateToken(user);
    return { access_token: token };
  }
}
