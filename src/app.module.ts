import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./user/user.module";
import { VipModule } from "./vip/vip.module";
import { LoggerMiddleware } from "./common/logger.middleware";
import { DepositModule } from './deposit/deposit.module';
import { WithdrawModule } from './withdraw/withdraw.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, VipModule, DepositModule, WithdrawModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
