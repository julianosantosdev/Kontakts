import { Repository } from 'typeorm';
import { Address, Contact, Email, Phone, User } from '../../entities';
import AppDataSource from '../../data-source';
import { createContactResponseSchema } from '../../schemas/contacts.schemas';
import {
  TContactRequest,
  TCreateContactResponse,
} from '../../interfaces/contacts.interface';
import FullName from '../../entities/fullName.entity';

const createContactService = async (
  contactData: TContactRequest,
  userId: number
): Promise<TCreateContactResponse> => {
  const { address, phone, email, fullName } = contactData;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const newContact: Contact = contactRepository.create({
    user: user!,
  });
  await contactRepository.save(newContact);

  const fullNameRepository: Repository<FullName> =
    AppDataSource.getRepository(FullName);
  const newFullName: FullName = fullNameRepository.create({
    fullName: fullName,
    contact: newContact,
  });
  await fullNameRepository.save(newFullName);

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const newAddress: Address = addressRepository.create({
    ...address,
    contact: newContact,
  });
  await addressRepository.save(newAddress);

  const phoneRepository: Repository<Phone> = AppDataSource.getRepository(Phone);
  const newPhone: Phone = phoneRepository.create({
    phone: phone,
    contact: newContact,
  });
  await phoneRepository.save(newPhone);

  const emailRepository: Repository<Email> = AppDataSource.getRepository(Email);
  const newEmail: Email = emailRepository.create({
    email: email,
    contact: newContact,
  });
  await emailRepository.save(newEmail);

  const contactCreated = {
    ...newContact,
    fullName: newFullName,
    address: newAddress,
    phone: newPhone,
    email: newEmail,
  };

  const parsedContact: TCreateContactResponse =
    createContactResponseSchema.parse(contactCreated);

  return parsedContact;
};

export default createContactService;
