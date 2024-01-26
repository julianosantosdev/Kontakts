import { SubmitHandler } from 'react-hook-form';
import { ILoginData } from '../../pages/LoginPage/shema';
import { IRegisterData } from '../../pages/RegisterPage/schema';
import { IUpdataUserData } from '../../components/Modal/EditUser/updateUserSchema';

interface ITokenResponse {
  token: string;
}

interface ICreateUserResponse {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

interface IUserContext {
  submitLoginForm: SubmitHandler<ILoginData>;
  submitRegisterForm: SubmitHandler<IRegisterData>;
  handleLogout: () => void;
  handlePatchUser: SubmitHandler<IUpdataUserData>;
  handleDeleteUser: () => Promise<void>;
  retrieveUser: () => Promise<void>;
  userData: ICreateUserResponse;
}

interface IAxiosErrorMessage {
  message: string;
}

export type {
  ITokenResponse,
  ICreateUserResponse,
  IUserContext,
  IAxiosErrorMessage
};
