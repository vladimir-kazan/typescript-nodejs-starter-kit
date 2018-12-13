import { Get, Route, Controller } from 'tsoa';
import { User } from '../models/user';
import { UsersService } from '../services/users-service';

@Route('users')
export class UsersController1 extends Controller {

  @Get()
  async getUsers(): Promise<User[]> {
      return await new UsersService().getAll();
  }
}
