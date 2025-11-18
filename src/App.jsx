import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import './App.css';
import { ThemeToggleButton } from './components/ThemeToggleButton';


function PortfolioContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-content">
      <header>
        <nav className='main-nav'> 
          <ThemeToggleButton /> 
        </nav>
      </header>
      
      <main style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h1>Meu Portfólio</h1>
        <p>Desenvolvedor Front-end | Foco em React/Vite</p>
      </main>
    </div>
  );
}


function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;