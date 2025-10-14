import { Injectable } from "@nestjs/common";
import { fakerVI } from "@faker-js/faker";

@Injectable()
export class UserService {
  getUser(username: string) {
    return {
      data: {
        fullname: fakerVI.person.fullName(),
        username,
        phone: fakerVI.helpers.arrayElement([true, false]),
        vip: fakerVI.helpers.arrayElement(["VIP0", "VIP1", "VIP2", "VIP3"]),
        deposits: null,
      },
      message: "Thành công",
    };
  }
}
