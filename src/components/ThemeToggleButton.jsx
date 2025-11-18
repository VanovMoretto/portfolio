import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggleButton.css'; // Novo arquivo CSS

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`neumorphic-toggle ${isDarkMode ? 'toggled-on' : ''}`}
      aria-label={`Mudar para modo ${isDarkMode ? 'claro' : 'escuro'}`}
    >
      <span className="moon-icon" role="img" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </span>
    </button>
  );
}