import type { Express } from "express";
import { createServer, type Server } from "http";
import healthRouter from "./health";
import sitemapRouter from "./sitemap";

export async function registerRoutes(app: Express): Promise<Server> {
  app.use(healthRouter);
  app.use(sitemapRouter);

  const httpServer = createServer(app);
  return httpServer;
}
