import logo from './logo.svg';
import './App.css';
import ThemeProvider from './context/ThemeProvider';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
 
      </header>
    </div>
  );
}

export default App;
