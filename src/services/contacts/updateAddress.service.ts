import { Repository } from 'typeorm';
import AppDataSource from '../../data-source';
import { Address } from '../../entities';
import { TAddressUpdate } from '../../interfaces/contacts.interface';

const updateAddressService = async (
  addressId: number,
  newAddressData: TAddressUpdate
): Promise<Address> => {
  const fullNameRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const address: Address | null = await fullNameRepository.findOneBy({
    id: addressId,
  });

  const newAddress: Address = fullNameRepository.create({
    ...address,
    ...newAddressData,
  });
  await fullNameRepository.save(newAddress);

  return newAddress;
};

export default updateAddressService;
