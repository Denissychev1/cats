import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import "reflect-metadata"
import { CatKindModule } from './kind/kind.module';
import { CatNameModule } from './name/name.module';
import { join } from 'path'
import { kind } from './kind/models/kind.entity';
import { cat } from './name/models/name.entity';

const username = process.env.POSTGRES_USER || 'postgres';
const password = process.env.POSTGRES_PASSWORD || 'postgres';

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true
      }),
      TypeOrmModule.forRoot({  
         type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username,
      password,
      database: 'postgres',
      entities: [kind, cat],
      synchronize: true,
      migrations: [
        join(__dirname, '../migrations/*{.ts,.js}')
      ]
    }), CatKindModule, CatNameModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


/*{
          type: 'postgres',
          url: process.env.DATABASE_URL,
          autoLoadEntities: true,
          synchronize: true,
          migrations: [
            join(__dirname, 'migrations/*{.ts,.js}')
          ],
      }*/