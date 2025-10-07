import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { WithdrawService } from './withdraw.service';

@ApiTags('Withdraw')
@Controller('api/v1/withdraw')
export class WithdrawController {
  constructor(private readonly withdrawService: WithdrawService) {}

  @Get()
  @ApiOperation({ summary: 'Lấy thông tin rút tiền theo withdrawId' })
  @ApiQuery({ name: 'withdrawId', required: false, type: String })
  getWithdraw(@Query('withdrawId') withdrawId?: string) {
    return this.withdrawService.getWithdraw(withdrawId);
  }
}
