import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog/entities/blog.entity';

@Module({
  imports: [
    BlogModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configs: ConfigService) => ({
        type: 'mysql',
        host: configs.getOrThrow('DB_HOST'),
        port: configs.getOrThrow('DB_PORT'),
        username: configs.getOrThrow('DB_USERNAME'),
        password: configs.getOrThrow('DB_PASSWORD'),
        database: configs.getOrThrow('DB_NAME'),
        entities:[Blog],
        synchronize: true,
      }),
      inject: [ConfigService]
    })    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
