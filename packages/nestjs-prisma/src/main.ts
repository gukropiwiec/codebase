import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3010);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  console.log('Server started at port 3010');
}
bootstrap();
