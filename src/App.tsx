import { Theme } from './settings/types';
import { Portfolio } from './components/generated/Portfolio';
import { AIChatWidget } from './components/generated/AIChatWidget';

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

  return (
    <div>
      <Portfolio />
      <AIChatWidget />
    </div>);

}

export default App;