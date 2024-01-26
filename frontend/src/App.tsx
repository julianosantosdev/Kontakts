import AppRoutes from './routes/index.routes';
import { GlobalStylesAndReset } from './styles/GlobalStyles';
import { Toastfy } from './styles/Toastify';

function App() {
  return (
    <>
      <GlobalStylesAndReset />
      <AppRoutes />
      <Toastfy />
    </>
  );
}

export default App;
