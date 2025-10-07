import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { DepositService } from "./deposit.service";

@ApiTags("Deposit")
@Controller("api/v1/deposit")
export class DepositController {
  constructor(private readonly depositService: DepositService) {}

  @Get()
  @ApiOperation({ summary: "Lấy thông tin deposit theo depositId" })
  @ApiQuery({ name: "depositId", required: true, type: String })
  getDeposit(@Query("depositId") depositId: string) {
    return this.depositService.getDeposit(depositId);
  }
}
