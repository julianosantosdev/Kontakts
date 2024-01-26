import { createContext, useState } from 'react';
import {
  IAxiosErrorMessage,
  ICreateUserResponse,
  ITokenResponse,
  IUserContext
} from './types';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';
import { api } from '../../services/api.service';
import { ILoginData } from '../../pages/LoginPage/shema';
import { SubmitHandler } from 'react-hook-form';
import { IProviderProps } from '../../types';
import { toast } from 'react-toastify';
import { IRegisterData } from '../../pages/RegisterPage/schema';
import { IUpdataUserData } from '../../components/Modal/EditUser/updateUserSchema';

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IProviderProps) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({} as ICreateUserResponse);

  const userToken: string | null = localStorage.getItem('@KontaktsToken');

  const submitRegisterForm: SubmitHandler<IRegisterData> = async (
    loginFormData: IRegisterData
  ) => {
    try {
      const registerResponse: AxiosResponse =
        await api.post<ICreateUserResponse>('/users', loginFormData);

      if (registerResponse.status === 201) {
        toast.success('Usuário criado com sucesso!');
      }
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      const requestError = error as AxiosError<IAxiosErrorMessage>;
      toast.error(requestError.response?.data.message);
    }
  };

  const submitLoginForm: SubmitHandler<ILoginData> = async (
    loginFormData: ILoginData
  ) => {
    try {
      const loginResponse: AxiosResponse = await api.post<ITokenResponse>(
        '/login',
        loginFormData
      );

      const token: string = loginResponse.data.token || undefined;

      toast.success('Você está logado');

      localStorage.setItem('@KontaktsToken', token);
      setTimeout(() => {
        navigate('/dashboard');
      }, 500);
    } catch (error) {
      const requestError = error as AxiosError<IAxiosErrorMessage>;
      toast.error(requestError.response?.data.message);
    }
  };

  const retrieveUser = async () => {
    const userDataRequest = await api.get('/users', {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    });
    setUserData(userDataRequest.data);
  };

  const handleLogout = () => {
    localStorage.removeItem('@KontaktsUserData');
    localStorage.removeItem('@KontaktsToken');

    navigate('/login');
    toast.success('Logout realizado com sucesso!');
  };

  const handlePatchUser: SubmitHandler<IUpdataUserData> = async (
    loginFormData
  ) => {
    try {
      const patchResponse: AxiosResponse = await api.patch<
        Partial<IRegisterData>
      >(`/users/${userData.id}`, loginFormData, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      });

      if (patchResponse.status === 200) {
        retrieveUser();
        toast.success('Usuário ataulizado com sucesso!');
      }
    } catch (error) {
      const requestError = error as AxiosError<IAxiosErrorMessage>;
      toast.error(requestError.response?.data.message);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const deleteResponse: AxiosResponse = await api.delete(
        `/users/${userData.id}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }
      );

      if (deleteResponse.status === 204) {
        handleLogout;
        navigate('/login');
        toast.success('Adeus =( ... Sua conta foi deletada!');
      }
    } catch (error) {
      const requestError = error as AxiosError<IAxiosErrorMessage>;
      toast.error(requestError.response?.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        submitLoginForm,
        submitRegisterForm,
        handleLogout,
        handlePatchUser,
        handleDeleteUser,
        retrieveUser,
        userData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
