import { Get, Route, Tags, Post, Body, Path, Delete } from "tsoa";
import { User } from "../models";
import { UserService, IUserPayload } from "../services/user";

@Route("users")
@Tags("User")
export default class UserController {

  service = new UserService();

  @Get("/")
  public async getUsers(): Promise<Array<User>> {
    return this.service.getUsers();
  }

  @Post("/")
  public async createUser(@Body() body: IUserPayload): Promise<User> {
    return this.service.createUser(body);
  }

  @Get("/:id")
  public async getUser(@Path() id: string): Promise<User | null> {
    return this.service.getUser(Number(id));
  }

  @Delete("/:id")
  public async deleteUser(id: number) {
    return this.service.deleteUser(id);
  }
}
