import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  getUser(username: string) {
    return {
      data: {
        fullname: "TRANIE",
        username,
        phone: true,
        vip: "VIP0",
        deposits: null,
      },
      message: "Thành công",
    };
  }
}
