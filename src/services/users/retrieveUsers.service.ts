import { Repository } from 'typeorm';
import AppDataSource from '../../data-source';
import { User } from '../../entities';
import { TUsersListResponse } from '../../interfaces/users.interface';
import { usersListResponseSchema } from '../../schemas/users.schemas';

const retrieveUsersService = async (): Promise<TUsersListResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const users: Array<User> = await userRepository.find();

  const usersListParsed: TUsersListResponse =
    usersListResponseSchema.parse(users);
  return usersListParsed;
};

export default retrieveUsersService;
