import { Repository } from 'typeorm';
import AppDataSource from '../../data-source';
import { TCreateUpdatePhoneRequest } from '../../interfaces/contacts.interface';
import { Phone } from '../../entities';

const updatePhoneService = async (
  phoneId: number,
  newPhoneData: TCreateUpdatePhoneRequest
): Promise<Phone> => {
  const PhoneRepository: Repository<Phone> = AppDataSource.getRepository(Phone);

  const phone: Phone | null = await PhoneRepository.findOneBy({
    id: phoneId,
  });

  const newPhone: Phone = PhoneRepository.create({
    ...phone,
    ...newPhoneData,
  });
  await PhoneRepository.save(newPhone);

  return newPhone;
};

export default updatePhoneService;
