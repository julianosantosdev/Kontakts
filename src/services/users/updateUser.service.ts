import { Repository } from 'typeorm';
import AppDataSource from '../../data-source';
import { User } from '../../entities';
import { TUserResponse, TUserUpdate } from '../../interfaces/users.interface';
import { userResponseSchema } from '../../schemas/users.schemas';

const updateUserService = async (
  userNewData: TUserUpdate,
  userId: number
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const targetUserInfo: User | null = await userRepository.findOneBy({
    id: userId,
  });

  const userNewInfos: User = userRepository.create({
    ...targetUserInfo,
    ...userNewData,
  });

  const updatedUser: User = await userRepository.save(userNewInfos);
  const parsedUserResponse: TUserResponse =
    userResponseSchema.parse(updatedUser);

  return parsedUserResponse;
};

export default updateUserService;
