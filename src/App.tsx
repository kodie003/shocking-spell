import { Theme } from './settings/types';
import { PadiLandingPage } from './components/generated/PadiLandingPage';

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return <PadiLandingPage />; // %EXPORT_STATEMENT%
}

export default App;
