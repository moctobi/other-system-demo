import { Injectable } from '@nestjs/common';

@Injectable()
export class WithdrawService {
  getWithdraw(withdrawId?: string) {
    return {
      data: {
        withdrawId: withdrawId,
        username: 'username' + withdrawId,
        requestAmount: 100,
        paidAmount: 100,
        requestTime: 1759558065000,
        status: 'PAID',
        remark: 'Approved Withdraw.',
      },
      message: 'Thành công',
    };
  }
}
