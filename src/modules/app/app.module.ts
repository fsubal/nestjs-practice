import path from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import SsrProvider from '../../interceptors/ssr';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemModule } from '../item/item.module';
import { ItemController } from '../item/item.controller';

@Module({
  imports: [
    /**
     * use mysql database
     */
    TypeOrmModule.forRoot(),
    ItemModule,

    /**
     * use static files
     */
    ServeStaticModule.forRoot({
      rootPath: path.join(process.cwd(), 'public'),
    }),

    /**
     * use graphql
     */
    GraphQLModule.forRoot({
      typePaths: ['./**/*.gql'],
      definitions: {
        path: path.join(process.cwd(), 'src', 'graphql.ts'),
      },
    }),
  ],
  controllers: [AppController, ItemController],
  providers: [AppService, SsrProvider],
})
export class AppModule {}
