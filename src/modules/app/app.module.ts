import path from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import SsrProvider from '../../interceptors/ssr';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.gql'],
      definitions: {
        path: path.join(process.cwd(), 'src', 'graphql.ts'),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, SsrProvider],
})
export class AppModule {}
