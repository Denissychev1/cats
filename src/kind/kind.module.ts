import { Module } from '@nestjs/common';
import { CatKindService } from './service/kind.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { CatKindController } from './controller/kind.controller';
import {kind} from "./models/kind.entity";

@Module({
  imports: [TypeOrmModule.forFeature([kind])],
  providers: [CatKindService],
  controllers: [CatKindController]
})
export class CatKindModule {}
