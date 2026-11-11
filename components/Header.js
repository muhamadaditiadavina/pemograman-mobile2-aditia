import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  useWindowDimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function Header({ 
  title, 
  subtitle, 
  levelBadge = "Level 10", 
  activeTab = 'home', 
  onSelectTab, 
  onOpenCV 
}) {
  const { theme, isDark, toggleTheme } = useTheme();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 800;

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Tentang' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'portfolio', label: 'Portofolio' },
    { id: 'score', label: 'Nilai UTS' },
    { id: 'contact', label: 'Kontak' },
  ];

  return (
    <View style={[styles.headerContainer, { backgroundColor: theme.secondaryBg, borderBottomColor: theme.border }]}>
      <View style={styles.innerContainer}>
        {/* Brand / Title Section */}
        <TouchableOpacity 
          style={styles.brandCol}
          onPress={() => onSelectTab && onSelectTab('home')}
          activeOpacity={0.8}
        >
          <View style={styles.brandRow}>
            <View style={[styles.logoBadge, { backgroundColor: theme.primary }]}>
              <Text style={styles.logoBadgeText}>AD</Text>
            </View>
            <View>
              <View style={styles.titleWithBadge}>
                <Text style={[styles.title, { color: theme.textPrimary }]}>
                  {isDesktop ? 'Muhamad Aditia Davina Kholik' : title}
                </Text>
                {levelBadge && (
                  <View style={[styles.badge, { backgroundColor: theme.primaryLight, borderColor: theme.border }]}>
                    <Text style={[styles.badgeText, { color: theme.accent }]}>{levelBadge}</Text>
                  </View>
                )}
              </View>
              <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
                {isDesktop ? 'S1 Sistem Informasi Masoem University · Enterprise CV & Academic Score' : subtitle}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Desktop Horizontal Navigation */}
        {isDesktop && onSelectTab && (
          <View style={styles.desktopNav}>
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.navItemBtn,
                    isActive && [styles.navItemBtnActive, { borderBottomColor: theme.primary }]
                  ]}
                  onPress={() => onSelectTab(item.id)}
                  activeOpacity={0.7}
                >
                  <Text style={[
                    styles.navItemText,
                    { color: isActive ? theme.primary : theme.textSecondary }
                  ]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {/* Action Controls */}
        <View style={styles.rightActions}>
          {/* Download CV Action */}
          {onOpenCV && (
            <TouchableOpacity
              style={[styles.cvBtn, { backgroundColor: theme.primary }]}
              onPress={onOpenCV}
              activeOpacity={0.8}
              accessibilityLabel="Unduh CV PDF"
            >
              <Ionicons name="document-text-outline" size={15} color="#FFFFFF" style={{ marginRight: 6 }} />
              <Text style={styles.cvBtnText}>{isDesktop ? 'Unduh CV (PDF)' : 'CV PDF'}</Text>
            </TouchableOpacity>
          )}

          {/* Theme Toggle Button */}
          <TouchableOpacity
            style={[styles.themeBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}
            onPress={toggleTheme}
            activeOpacity={0.7}
            accessibilityLabel="Ganti Mode Gelap / Terang"
          >
            <Ionicons
              name={isDark ? "sunny-outline" : "moon-outline"}
              size={17}
              color={isDark ? theme.warning : theme.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
    zIndex: 10,
  },
  innerContainer: {
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  brandCol: {
    flexShrink: 1,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoBadge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBadgeText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 13,
    letterSpacing: 0.5,
  },
  titleWithBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  subtitle: {
    fontSize: 11,
    marginTop: 1,
  },
  badge: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
  },
  desktopNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  navItemBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  navItemBtnActive: {
    borderBottomWidth: 2,
  },
  navItemText: {
    fontSize: 13,
    fontWeight: '600',
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cvBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 6,
  },
  cvBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  themeBtn: {
    width: 34,
    height: 34,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
