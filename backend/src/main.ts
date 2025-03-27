import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // ✅ Enable CORS for frontend requests
  app.enableCors({
    origin: 'http://localhost:4200', // Allow Angular frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  });

  // ✅ Serve static files for uploads (images, etc.)
  app.useStaticAssets(join(__dirname, '..', 'uploads'), { prefix: '/uploads', index: false });

  // ✅ Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Automobile Showcase API')
    .setDescription('API documentation for the Automobile Showcase Application')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  // ✅ Log successful backend startup
  console.log('🚀 Backend running at http://localhost:3000/');
  console.log('📜 Swagger API Docs available at http://localhost:3000/api');
  console.log('🖼️ Serving static files from:', join(__dirname, '..', 'uploads'));
}

bootstrap();
