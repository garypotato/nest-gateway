import { DatabaseModule } from '@/common/database/database.module';
import { Module } from '@nestjs/common';
import { FeishuService } from './feishu/feishu.service';
import { UserController } from './user.controller';
import { UserProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [FeishuService, UserService, ...UserProviders],
  exports: [UserService],
})
export class UserModule {}
