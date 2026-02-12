import type { Express } from "express";
import { createServer, type Server } from "http";
import healthRouter from "./routes/health";

export async function registerRoutes(app: Express): Promise<Server> {
  app.use(healthRouter);

  const httpServer = createServer(app);

  return httpServer;
}
