import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import type { OpenAPIObject } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap(): Promise<void> {
    const APP_DEFAULT_PORT = 3000;
    const app = await NestFactory.create(AppModule);

    const config = app.get(ConfigService);
    const logger = new Logger('NestApplication');

    const PORT = config.get<number>('APP_PORT', APP_DEFAULT_PORT);

    const swaggerConfig = new DocumentBuilder()
        .setTitle('Auto test backend')
        .setDescription('Auto test backend API documentation')
        .build();
    const documentFactory = (): OpenAPIObject => SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('docs', app, documentFactory);

    app.setGlobalPrefix('api');

    await app.listen(PORT).then((): void => {
        logger.log(`Server is running on port: ${PORT}`);
    });
}

void bootstrap();
