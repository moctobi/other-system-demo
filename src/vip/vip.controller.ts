import { Controller, Get } from "@nestjs/common";
import { VipService } from "./vip.service";

@Controller("vip-levels")
export class VipController {
  constructor(private readonly vipService: VipService) {}

  @Get()
  getVipLevels() {
    return this.vipService.getVipLevels();
  }
}
