import { Contact, Email } from '../../entities';
import { Repository } from 'typeorm';
import AppDataSource from '../../data-source';
import { TCreateUpdateEmailRequest } from '../../interfaces/contacts.interface';

const createNewAEmailService = async (
  contactId: number,
  newEmailData: TCreateUpdateEmailRequest
): Promise<Email> => {
  const userRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const contact: Contact | null = await userRepository.findOneBy({
    id: contactId,
  });

  const emailRepository: Repository<Email> = AppDataSource.getRepository(Email);
  const newEmail: Email = emailRepository.create({
    ...newEmailData,
    contact: contact!,
  });
  await emailRepository.save(newEmail);

  return newEmail;
};

export default createNewAEmailService;
