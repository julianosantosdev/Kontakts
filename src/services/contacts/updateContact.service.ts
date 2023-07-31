import { Repository } from 'typeorm';
import { Contact } from '../../entities';
import AppDataSource from '../../data-source';

const updateContactService = async () => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const realEsate: Array<Contact> = await contactsRepository.find({
    relations: {
      addresses: true,
      emails: true,
      phones: true,
    },
  });

  realEsate;

  //   return realEsate;
};

export default updateContactService;
