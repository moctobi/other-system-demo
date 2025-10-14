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
        vip: `VIP${fakerVI.number.int({ min: 0, max: 100 }).toString().padStart(2, "0")}`,
        deposits: null,
      },
      message: "Thành công",
    };
  }
}
