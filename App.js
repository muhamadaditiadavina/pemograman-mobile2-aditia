import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Platform, 
  StatusBar as RNStatusBar, 
  useWindowDimensions 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import CVModal from './components/CVModal';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import SkillsScreen from './screens/SkillsScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import ScoreScreen from './screens/ScoreScreen';
import ContactScreen from './screens/ContactScreen';

function MainApp() {
  const { theme, isDark } = useTheme();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 800;

  const [activeTab, setActiveTab] = useState('home');
  const [isCVModalVisible, setIsCVModalVisible] = useState(false);

  const getHeaderInfo = () => {
    switch (activeTab) {
      case 'home':
        return { title: 'Muhamad Aditia Davina Kholik', subtitle: 'Personal CV & Academic Score', badge: 'Level 10 Industry' };
      case 'about':
        return { title: 'Tentang Diri & Linimasa', subtitle: 'Perjalanan Studi & Kompetensi', badge: 'Profil' };
      case 'skills':
        return { title: 'Keahlian & Stack Teknologi', subtitle: 'Skills & Pembelajaran IT', badge: '8 Skills' };
      case 'portfolio':
        return { title: 'Portofolio Karya', subtitle: 'Proyek Rekayasa Perangkat Lunak', badge: '3 Proyek' };
      case 'score':
        return { title: 'Academic Score Dashboard', subtitle: 'Hasil Capaian UTS Pemrograman Mobile 2', badge: 'Nilai: 89 (A)' };
      case 'contact':
        return { title: 'Saluran Kontak', subtitle: 'Komunikasi & Umpan Balik', badge: 'Kontak' };
      default:
        return { title: 'Personal CV App', subtitle: 'UTS Mobile Programming', badge: 'Level 10' };
    }
  };

  const headerInfo = getHeaderInfo();

  const handleOpenCV = () => {
    setIsCVModalVisible(true);
  };

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen onNavigate={(tab) => setActiveTab(tab)} onOpenCV={handleOpenCV} />;
      case 'about':
        return <AboutScreen onOpenCV={handleOpenCV} />;
      case 'skills':
        return <SkillsScreen />;
      case 'portfolio':
        return <PortfolioScreen />;
      case 'score':
        return <ScoreScreen onOpenCV={handleOpenCV} />;
      case 'contact':
        return <ContactScreen onOpenCV={handleOpenCV} />;
      default:
        return <HomeScreen onNavigate={(tab) => setActiveTab(tab)} onOpenCV={handleOpenCV} />;
    }
  };

  return (
    <View style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} backgroundColor={theme.secondaryBg} />
      
      {/* Top Application Header / Navigation Bar */}
      <Header
        title={headerInfo.title}
        subtitle={headerInfo.subtitle}
        levelBadge={headerInfo.badge}
        activeTab={activeTab}
        onSelectTab={(tab) => setActiveTab(tab)}
        onOpenCV={handleOpenCV}
      />

      {/* Screen Body Container with Controlled Width for Desktop */}
      <View style={[styles.body, { backgroundColor: theme.background }]}>
        <View style={styles.contentWrapper}>
          {renderActiveScreen()}
        </View>
      </View>

      {/* Bottom Tab Navigation Bar (Shown on Mobile & Tablets) */}
      {!isDesktop && (
        <BottomNav
          activeTab={activeTab}
          onSelectTab={(tab) => setActiveTab(tab)}
        />
      )}

      {/* Official ATS-Compliant CV Modal with Direct PDF Download */}
      <CVModal
        visible={isCVModalVisible}
        onClose={() => setIsCVModalVisible(false)}
      />
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? (RNStatusBar.currentHeight || 24) : 0,
  },
  body: {
    flex: 1,
    width: '100%',
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    maxWidth: 1080,
    alignSelf: 'center',
  },
});
