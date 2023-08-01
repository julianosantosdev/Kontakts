import { Repository } from 'typeorm';
import AppDataSource from '../../data-source';
import { Contact } from '../../entities';
import { TContactsListResponse } from '../../interfaces/contacts.interface';
import { contactsListResponseSchema } from '../../schemas/contacts.schemas';

const listContactsService = async (
  userId: number
): Promise<TContactsListResponse> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const userContacts: Array<Contact> = await contactsRepository
    .createQueryBuilder('contacts')
    .leftJoinAndSelect('contacts.user', 'user')
    .leftJoinAndSelect('contacts.fullName', 'fullname')
    .leftJoinAndSelect('contacts.phones', 'phone')
    .leftJoinAndSelect('contacts.addresses', 'address')
    .leftJoinAndSelect('contacts.emails', 'email')
    .where('contacts.user = :userId', {
      userId,
    })
    .getMany();

  console.log(userContacts);

  const parsedContactsList: TContactsListResponse =
    contactsListResponseSchema.parse(userContacts);

  return parsedContactsList;
};

export default listContactsService;
