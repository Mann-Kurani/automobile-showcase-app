import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModelSchema } from './models/models.model';
import { VariantSchema } from './variants/variants.model'; 
import { ModelsModule } from './models/models.module';
import { VariantsModule } from './variants/variants.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    // ✅ Connect to MongoDB
    MongooseModule.forRoot('mongodb://localhost:27017/model_showcase_db'),

    // ✅ Register Schemas
    MongooseModule.forFeature([
      { name: 'Model', schema: ModelSchema },
      { name: 'Variant', schema: VariantSchema },
    ]),

    // ✅ Serve Static Files
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // Path to static files
      serveRoot: '/uploads', // Base URL for serving static files
      serveStaticOptions: { index: false }, // 🔹 Prevents looking for index.html

    }),

    // ✅ Import Modules
    ModelsModule,
    VariantsModule,
  ],
})
export class AppModule {}
