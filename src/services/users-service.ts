import { User } from '../models/user';

const mockUsers: User[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'James Brown' },
];

export class UsersService {

  async getAll() {
    return mockUsers;
  }
}
