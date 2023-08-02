import { Address, Contact } from '../../entities';
import { TCreateAddressRequest } from '../../interfaces/contacts.interface';
import { Repository } from 'typeorm';
import AppDataSource from '../../data-source';

const createNewAddressService = async (
  contactId: number,
  newAddressData: TCreateAddressRequest
): Promise<Address> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const contact: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const newAddress: Address = addressRepository.create({
    ...newAddressData,
    contact: contact!,
  });
  await addressRepository.save(newAddress);

  return newAddress;
};

export default createNewAddressService;
