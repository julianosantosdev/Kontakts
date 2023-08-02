import { Repository } from 'typeorm';
import AppDataSource from '../../data-source';
import FullName from '../../entities/fullName.entity';
import { TFullNameRequest } from '../../interfaces/contacts.interface';

const updateFullNameService = async (
  nameId: number,
  newFullName: TFullNameRequest
): Promise<FullName> => {
  const fullNameRepository: Repository<FullName> =
    AppDataSource.getRepository(FullName);

  const name: FullName | null = await fullNameRepository.findOneBy({
    id: nameId,
  });

  const newContactName: FullName = fullNameRepository.create({
    ...name,
    ...newFullName,
  });
  await fullNameRepository.save(newContactName);

  return newContactName;
};

export default updateFullNameService;
