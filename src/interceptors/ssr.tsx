import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Document } from '../views/_document';
import { App } from '../views/app';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { map } from 'rxjs/operators';
import { ServerLocation } from '@reach/router';
import { ApolloProvider } from 'react-apollo';
import apolloClient from 'src/graphql/apollo.server';

@Injectable()
export class SsrInterceptor<T> implements NestInterceptor<T> {
  intercept(context: ExecutionContext, next: CallHandler<T>) {
    const http = context.switchToHttp();
    const req = http.getRequest<express.Request>();

    // /graphql などは req がないのでスキップ
    if (!req) {
      return next.handle();
    }

    return next.handle().pipe(
      map(
        props =>
          `<!DOCTYPE html>${renderToString(
            <ServerLocation url={req.url}>
              <ApolloProvider client={apolloClient}>
                <Document javascript={this.getJavaScript()}>
                  <App initial={props} apolloState={apolloClient.extract()} />
                </Document>
              </ApolloProvider>
            </ServerLocation>,
          )}`,
      ),
    );
  }

  private getJavaScript() {
    try {
      const manifest = require(path.resolve(
        process.cwd(),
        'public/bundles/manifest.json',
      ));
      return manifest['main.js'];
    } catch {
      return undefined;
    }
  }
}

const SsrProvider = {
  provide: APP_INTERCEPTOR,
  useClass: SsrInterceptor,
};

export default SsrProvider;
