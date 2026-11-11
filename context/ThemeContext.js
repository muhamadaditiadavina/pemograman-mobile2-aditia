import React, { createContext, useState, useContext } from 'react';

/**
 * Enterprise Design System Theme
 * Strict specifications:
 * - Primary Background: #080B12
 * - Secondary Background: #0E1420
 * - Surface / Card: #141C2B
 * - Elevated Surface: #1B2638
 * - Primary Blue: #2563EB
 * - Secondary Blue: #3B82F6
 * - Subtle Blue: #172B4D
 * - Primary Text: #F8FAFC
 * - Secondary Text: #A7B2C4
 * - Muted Text: #778399
 * - Border: #263247
 * - Success: #22C55E
 * - Warning: #F59E0B
 * - Error: #EF4444
 */
const darkTheme = {
  dark: true,
  background: '#080B12',
  secondaryBg: '#0E1420',
  surface: '#141C2B',
  elevated: '#1B2638',
  card: '#141C2B',
  cardBorder: '#263247',
  border: '#263247',
  
  primary: '#2563EB',
  primaryHover: '#3B82F6',
  primaryLight: '#172B4D',
  accent: '#3B82F6',
  accentLight: '#172B4D',
  subtleBlue: '#172B4D',

  textPrimary: '#F8FAFC',
  textSecondary: '#A7B2C4',
  textMuted: '#778399',

  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',
  error: '#EF4444',

  tagBg: '#172B4D',
  tabBar: '#0E1420',
  tabBarBorder: '#263247',
  tabActive: '#3B82F6',
  tabInactive: '#778399',
  inputBg: '#0E1420',
  inputBorder: '#263247',
  inputFocusBorder: '#2563EB',
};

const lightTheme = {
  dark: false,
  background: '#F8FAFC',
  secondaryBg: '#FFFFFF',
  surface: '#FFFFFF',
  elevated: '#F1F5F9',
  card: '#FFFFFF',
  cardBorder: '#E2E8F0',
  border: '#E2E8F0',

  primary: '#2563EB',
  primaryHover: '#1D4ED8',
  primaryLight: '#EFF6FF',
  accent: '#3B82F6',
  accentLight: '#DBEAFE',
  subtleBlue: '#EFF6FF',

  textPrimary: '#0F172A',
  textSecondary: '#475569',
  textMuted: '#64748B',

  success: '#16A34A',
  warning: '#D97706',
  danger: '#DC2626',
  error: '#DC2626',

  tagBg: '#F1F5F9',
  tabBar: '#FFFFFF',
  tabBarBorder: '#E2E8F0',
  tabActive: '#2563EB',
  tabInactive: '#64748B',
  inputBg: '#FFFFFF',
  inputBorder: '#CBD5E1',
  inputFocusBorder: '#2563EB',
};

const ThemeContext = createContext({
  theme: darkTheme,
  isDark: true,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
