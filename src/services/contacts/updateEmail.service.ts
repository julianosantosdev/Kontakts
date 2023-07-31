import { Repository } from 'typeorm';
import AppDataSource from '../../data-source';
import { Email } from '../../entities';
import { TCreateUpdateEmailRequest } from '../../interfaces/contacts.interface';

const updateEmailService = async (
  emailId: number,
  newEmailData: TCreateUpdateEmailRequest
): Promise<Email> => {
  const emailRepository: Repository<Email> = AppDataSource.getRepository(Email);

  const email: Email | null = await emailRepository.findOneBy({
    id: emailId,
  });

  const newEmail: Email = emailRepository.create({
    ...email,
    ...newEmailData,
  });
  await emailRepository.save(newEmail);

  return newEmail;
};

export default updateEmailService;
