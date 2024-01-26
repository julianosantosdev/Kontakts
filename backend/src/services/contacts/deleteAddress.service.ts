import { Repository } from 'typeorm';
import { Address } from '../../entities';
import AppDataSource from '../../data-source';

const deleteAddressService = async (addressId: number): Promise<void> => {
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);
  const address: Address | null = await addressRepository.findOneBy({
    id: addressId,
  });
  await addressRepository.remove(address!);
};

export default deleteAddressService;
