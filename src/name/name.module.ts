import { Module } from '@nestjs/common';
import { NameService } from './service/name.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { cat } from './models/name.entity';
import { NameController } from './controller/name.controller';

@Module({
    imports: [TypeOrmModule.forFeature([cat])],
  providers: [NameService],
  controllers: [NameController]
})
export class CatNameModule {}
