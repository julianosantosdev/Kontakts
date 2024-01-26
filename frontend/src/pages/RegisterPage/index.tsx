import { useContext } from 'react';
import { Input } from '../../components/Inputs';
import { TitleLogo } from '../../components/TitleLogo';
import { SectionTemplate } from '../../styles/SectionTemplate';
import { Main } from '../LoginPage/styles';
import { UserContext } from '../../contexts/UserContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonYellow, LinkStyledtoRegister } from '../../styles/Button';
import registerSchema, { IRegisterData } from './schema';

const RegisterPage = () => {
  const { submitRegisterForm } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IRegisterData>({
    resolver: zodResolver(registerSchema)
  });
  return (
    <>
      <Main>
        <SectionTemplate>
          <TitleLogo />
          <div className='form__container'>
            <h2>Registro</h2>

            <form onSubmit={handleSubmit(submitRegisterForm)}>
              <Input
                name={'fullName'}
                label={'Nome'}
                placeholder={'Seu nome'}
                type={'text'}
                register={register('fullName')}
                errors={errors.fullName || undefined}
              />
              <Input
                name={'email'}
                label={'E-mail'}
                placeholder={'Insira seu e-mail'}
                type={'text'}
                register={register('email')}
                errors={errors.email || undefined}
              />
              <Input
                name={'phone'}
                label={'Telefone'}
                placeholder={'Insira seu telefone'}
                type={'text'}
                register={register('phone')}
                errors={errors.phone || undefined}
              />
              <Input
                name={'password'}
                label={'Senha'}
                placeholder={'Insira sua senha'}
                type={'password'}
                register={register('password')}
                errors={errors.password || undefined}
              />
              <ButtonYellow>Registrar</ButtonYellow>
            </form>
            <LinkStyledtoRegister to={'/login'}>
              Já tenho conta!
            </LinkStyledtoRegister>
          </div>
        </SectionTemplate>
      </Main>
    </>
  );
};

export default RegisterPage;
