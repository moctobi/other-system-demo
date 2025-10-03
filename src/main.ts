import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ["log", "error", "warn", "debug"] });

  // ✅ Swagger setup
  const config = new DocumentBuilder()
    .setTitle("Demo API")
    .setDescription("API demo với user và vip-levels")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  // ✅ Config PORT từ .env
  const port = process.env.PORT || 3000;
  // Set global prefix
  app.setGlobalPrefix("api/v1");
  await app.listen(port);
  Logger.log(`🚀 Server running on http://localhost:${port}`, "Bootstrap");
  Logger.log(`📚 Swagger Docs: http://localhost:${port}/docs`, "Swagger");
}
bootstrap();
