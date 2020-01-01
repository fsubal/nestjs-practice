import React from 'react';
import { renderToString } from 'react-dom/server';
import Document from '../pages/_document';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class SsrInterceptor<T> implements NestInterceptor<T> {
  intercept(_context: ExecutionContext, next: CallHandler<T>) {
    return next
      .handle()
      .pipe(
        map(
          props =>
            `<!DOCTYPE html>${renderToString(
              <Document>{(props as any).message}</Document>,
            )}`,
        ),
      );
  }
}
