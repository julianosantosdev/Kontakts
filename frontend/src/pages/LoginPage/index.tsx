import { useForm } from 'react-hook-form';
import { TitleLogo } from '../../components/TitleLogo';
import { SectionTemplate } from '../../styles/SectionTemplate';
import { Main } from './styles';
import { Input } from '../../components/Inputs';
import loginSchema, { ILoginData } from './shema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonYellow, LinkStyledtoRegister } from '../../styles/Button';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const LoginPage = () => {
  const { submitLoginForm } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginData>({
    resolver: zodResolver(loginSchema)
  });

  return (
    <>
      <Main>
        <SectionTemplate>
          <TitleLogo />
          <div className='form__container'>
            <h2>Login</h2>

            <form onSubmit={handleSubmit(submitLoginForm)}>
              <Input
                name={'email'}
                label={'E-mail'}
                placeholder={'Insira seu e-mail'}
                type={'text'}
                register={register('email')}
                errors={errors.email || undefined}
              />
              <Input
                name={'password'}
                label={'Senha'}
                placeholder={'Insira sua senha'}
                type={'password'}
                register={register('password')}
                errors={errors.password || undefined}
              />
              <ButtonYellow>Entrar</ButtonYellow>
            </form>
            <LinkStyledtoRegister to={'/register'}>
              Não tenho conta
            </LinkStyledtoRegister>
          </div>
        </SectionTemplate>
      </Main>
    </>
  );
};

export default LoginPage;
