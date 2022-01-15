import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { modules } from 'modules';
import { CustomWinstonModule } from 'common';
import { TypeOrmService } from 'config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService,
    }),
    ...modules,
    CustomWinstonModule,
  ],
})
export class AppModule {}
