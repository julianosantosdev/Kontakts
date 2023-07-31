import { Repository } from 'typeorm';
import { Email } from '../../entities';
import AppDataSource from '../../data-source';

const deleteEmailService = async (emailId: number): Promise<void> => {
  const emailRepository: Repository<Email> = AppDataSource.getRepository(Email);
  const email: Email | null = await emailRepository.findOneBy({
    id: emailId,
  });
  await emailRepository.remove(email!);
};

export default deleteEmailService;
