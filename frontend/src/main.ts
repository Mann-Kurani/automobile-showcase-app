import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // ✅ Fixes CORS issues
  await app.listen(3000);
}
bootstrap();
