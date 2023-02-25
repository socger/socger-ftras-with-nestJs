import { ConfigService } from '@nestjs/config/dist';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { CORS } from './constants/cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  const configService = app.get(ConfigService);
  // console.log(configService.get('PORT'));

  app.enableCors(CORS);

  app.setGlobalPrefix('api');

  // await app.listen(3000);
  await app.listen(configService.get('PORT'));

  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Path: ${__dirname}`);
}
bootstrap();
