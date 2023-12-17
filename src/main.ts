import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Serve static files from the Angular app
  app.use(express.static(path.join(__dirname, '../../Links/dist/links/browser')));

  await app.listen(3000);
}
bootstrap().then(r => console.log("App started"));
