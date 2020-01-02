import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Document } from '../views/pages/_document';
import { App } from '../views/pages/app';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { map } from 'rxjs/operators';
import { ServerLocation } from '@reach/router';

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
              <Document javascript={this.getJavaScript()}>
                <App initial={props} />
              </Document>
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
