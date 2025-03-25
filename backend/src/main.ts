// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.getHttpAdapter().getInstance().disable('sse');
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS for frontend requests
  app.enableCors({
    origin: 'http://localhost:4200', // Allow Angular frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  });

  await app.listen(3000);
  console.log('🚀 Backend running at http://localhost:3000/');
}
bootstrap();
