import { Repository } from 'typeorm';
import AppDataSource from '../../data-source';
import { Contact } from '../../entities';

const listContactsService = async () => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const realEsate: Array<Contact> = await contactsRepository.find({
    relations: {
      addresses: true,
      emails: true,
      phones: true,
    },
  });

  // const parsedRealEstatesList: TRealEstatesList =
  //   realEstatesListSchemas.parse(realEsate);

  return realEsate;
};

export default listContactsService;
