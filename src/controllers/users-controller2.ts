import { User } from '../models/user';
import { UsersService } from '../services/users-service';

export class UsersController2 {

  async getUsers(): Promise<User[]> {
      return await new UsersService().getAll();
  }
}
