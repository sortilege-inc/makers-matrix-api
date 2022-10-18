import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ConfigService } from './libs/config/config.service';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.use(bodyParser.json({limit: '50mb', strict: false}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.disable('x-powered-by');
  app.set('trust proxy', true);

  const server_port = app.get(ConfigService).get('PORT') || 3001;

  await app.listen(server_port);
}
bootstrap().then(async () => {
}).catch(e => {console.log(e)});
