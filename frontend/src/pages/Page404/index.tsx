import { LinkStyledtoRegister } from '../../styles/Button';
import { SectionPage404 } from './styles';

const Page404 = () => {
  return (
    <SectionPage404 className='container'>
      <h1>Erro 404</h1>
      <h1>Olá, Kontacter!</h1>

      <p>&#128552;</p>
      <h2>A página que você está procurando não existe!</h2>
      <p>Verifique a URL informada.</p>
      <p>Está procurando a página de login ou registro?</p>
      <LinkStyledtoRegister to={'/login'}>
        Logar
      </LinkStyledtoRegister>
      <LinkStyledtoRegister to={'/register'}>
        Registrar
      </LinkStyledtoRegister>
    </SectionPage404>
  );
};

export { Page404 };
