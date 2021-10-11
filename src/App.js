import {useState} from 'react';

import './App.css';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidbar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div className="App">
      <header className="App-header">
         <h1>Dashboard Strateegia</h1>
      </header>
    </div>
  );
}

export default App;
