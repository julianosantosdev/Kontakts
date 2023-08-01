import { Repository } from 'typeorm';
import AppDataSource from '../../data-source';
import { User } from '../../entities';
import { TUserResponse } from '../../interfaces/users.interface';
import { userResponseSchema } from '../../schemas/users.schemas';

const retrieveUserService = async (userId: number): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  const userDataParsed: TUserResponse = userResponseSchema.parse(user);

  return userDataParsed;
};

export default retrieveUserService;
