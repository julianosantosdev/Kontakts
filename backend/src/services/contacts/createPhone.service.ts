import { Contact, Phone } from '../../entities';
import { Repository } from 'typeorm';
import AppDataSource from '../../data-source';
import { TCreateUpdatePhoneRequest } from '../../interfaces/contacts.interface';

const createNewPhoneService = async (
  contactId: number,
  newPhoneData: TCreateUpdatePhoneRequest
): Promise<Phone> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const contact: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });

  const phoneRepository: Repository<Phone> = AppDataSource.getRepository(Phone);
  const newPhone: Phone = phoneRepository.create({
    ...newPhoneData,
    contact: contact!,
  });
  await phoneRepository.save(newPhone);

  return newPhone;
};

export default createNewPhoneService;
