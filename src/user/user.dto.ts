import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class AddUserDto {
  @ApiProperty({ example: 123 })
  id?: string;

  @ApiProperty({ example: 'GaryChen' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '286024266@qq.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Gary' })
  @IsNotEmpty()
  username: string;
}
