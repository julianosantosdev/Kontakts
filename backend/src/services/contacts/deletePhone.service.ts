import { Repository } from 'typeorm';
import { Phone } from '../../entities';
import AppDataSource from '../../data-source';

const deletePhoneService = async (phoneId: number): Promise<void> => {
  const phoneRepository: Repository<Phone> = AppDataSource.getRepository(Phone);
  const phone: Phone | null = await phoneRepository.findOneBy({
    id: phoneId,
  });
  await phoneRepository.remove(phone!);
};

export default deletePhoneService;
