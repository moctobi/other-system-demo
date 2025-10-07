import { Injectable } from "@nestjs/common";

@Injectable()
export class DepositService {
  getDeposit(depositId: string) {
    return {
      data: {
        depositId: depositId,
        username: "username" + depositId,
        requestAmount: 100,
        depositAmount: 100,
        depositStatus: "A",
        reimbursementAmount: 2.1,
        depositDate: 1759555290000,
        requestDate: 1759555244000,
      },
      message: "Thành công",
    };
  }
}
