import path from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.gql'],
      definitions: {
        path: path.join(process.cwd(), 'src', 'graphql.ts'),
      },
    }),
  ],
})
export class AppModule {}
