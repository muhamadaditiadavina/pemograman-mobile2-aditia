import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function BottomNav({ activeTab, onSelectTab }) {
  const { theme } = useTheme();

  const tabs = [
    { id: 'home', label: 'Beranda', icon: 'home-outline', iconActive: 'home' },
    { id: 'about', label: 'Tentang', icon: 'person-outline', iconActive: 'person' },
    { id: 'skills', label: 'Keahlian', icon: 'flash-outline', iconActive: 'flash' },
    { id: 'portfolio', label: 'Proyek', icon: 'briefcase-outline', iconActive: 'briefcase' },
    { id: 'score', label: 'Nilai UTS', icon: 'ribbon-outline', iconActive: 'ribbon', badge: '89' },
    { id: 'contact', label: 'Kontak', icon: 'mail-outline', iconActive: 'mail' },
  ];

  return (
    <View style={[styles.navContainer, { backgroundColor: theme.tabBar, borderTopColor: theme.tabBarBorder }]}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const iconName = isActive ? tab.iconActive : tab.icon;
        const color = isActive ? theme.tabActive : theme.tabInactive;

        return (
          <TouchableOpacity
            key={tab.id}
            style={styles.tabBtn}
            onPress={() => onSelectTab(tab.id)}
            activeOpacity={0.7}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
          >
            <View style={styles.iconWrap}>
              <Ionicons name={iconName} size={20} color={color} />
              {tab.badge && (
                <View style={[styles.badge, { backgroundColor: theme.primary }]}>
                  <Text style={styles.badgeText}>{tab.badge}</Text>
                </View>
              )}
            </View>
            <Text style={[styles.label, { color, fontWeight: isActive ? '700' : '500' }]}>
              {tab.label}
            </Text>
            {isActive && <View style={[styles.activeIndicator, { backgroundColor: theme.primary }]} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    height: 64,
    borderTopWidth: 1,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    position: 'relative',
    height: '100%',
  },
  iconWrap: {
    position: 'relative',
    marginBottom: 3,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -10,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 6,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
  },
  label: {
    fontSize: 11,
    letterSpacing: -0.1,
  },
  activeIndicator: {
    position: 'absolute',
    top: 0,
    width: 28,
    height: 3,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
});
