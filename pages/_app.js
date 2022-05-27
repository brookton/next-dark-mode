import { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import { useDarkMode } from '../hooks/darkmode';
import '../styles/styles.scss';

export default function App({ Component, pageProps }) {
  const [isDarkMode, setDarkMode] = useState(false);
  const handleToggle = () => {
    setDarkMode(!isDarkMode);
  };

  if (typeof window !== 'undefined') {
    var preferDarkQuery = '(prefers-color-scheme: dark)';
    const mq = window.matchMedia(preferDarkQuery);
    mq.addEventListener('change', function (evt) {
      evt.matches ? setDarkMode(false) : setDarkMode(true);
    });
  }

  useEffect(() => {
    useDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <Menu
        checked={!isDarkMode}
        onChange={handleToggle}
        setDarkMode={setDarkMode}
      />
      <Component dark={!isDarkMode} {...pageProps} />
    </>
  );
}
