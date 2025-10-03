import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";

@ApiTags("User")
@Controller("api/v1/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: "Lấy thông tin user theo username" })
  @ApiQuery({ name: "username", required: true })
  getUser(@Query("username") username: string) {
    return this.userService.getUser(username);
  }
}
