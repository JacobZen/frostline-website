import type { Request, Response, NextFunction } from 'express';
import { env } from '../config/env';

export interface AppError extends Error {
  status?: number;
  statusCode?: number;
}

export function errorHandler(err: AppError, _req: Request, res: Response, _next: NextFunction) {
  const status = err.status || err.statusCode || 500;
  const message = env.NODE_ENV === 'production' && status === 500
    ? 'Internal Server Error'
    : err.message || 'Internal Server Error';

  console.error(`[ERROR] ${status} - ${err.message}`, env.NODE_ENV !== 'production' ? err.stack : '');

  res.status(status).json({ message });
}

export function notFoundHandler(_req: Request, res: Response) {
  res.status(404).json({ message: 'Not Found' });
}
