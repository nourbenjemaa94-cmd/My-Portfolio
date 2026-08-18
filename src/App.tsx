import { lazy, Suspense } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { Theme } from './settings/types';
import { Portfolio } from './pages/Portfolio';

const AIChatWidget = lazy(() =>
  import('./components/chat/AIChatWidget').then(mod => ({
    default: mod.AIChatWidget,
  })),
);

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
    <LazyMotion features={domAnimation} strict>
      <Portfolio />
      <Suspense fallback={null}>
        <AIChatWidget />
      </Suspense>
    </LazyMotion>
  );
}

export default App;
