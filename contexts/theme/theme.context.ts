import { createContext } from 'react';
import { ThemeContextProps } from './theme.types';

const ThemeContext = createContext<ThemeContextProps>(null);

export default ThemeContext;
