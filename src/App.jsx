import { useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar'
import Text from './Components/Text';
import { useToast } from './Components/ToastContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { addToast } = useToast();

  const toggleMode = () => {
    setDarkMode(!darkMode);
    // You might also want to add/remove a class to the body here
    document.body.classList.toggle('dark-mode', !darkMode);
    addToast(`${!darkMode ? 'Dark':'Light'} Mode Enabled`,'success');
  };
  return (
    <>
     <Navbar  title="Text Editor" mode={darkMode ? 'dark' : 'light'}  toggleMode={toggleMode} />
     <Text mode={darkMode?'dark':'light'} />
    </>
  )
}

export default App
