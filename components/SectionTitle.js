import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function SectionTitle({ title, subtitle, icon, rightElement }) {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.leftCol}>
        <View style={styles.titleRow}>
          {icon && (
            <View style={[styles.iconWrap, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
              <Ionicons name={icon} size={15} color={theme.accent} />
            </View>
          )}
          <Text style={[styles.title, { color: theme.textPrimary }]}>{title}</Text>
        </View>
        {subtitle && (
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>{subtitle}</Text>
        )}
      </View>
      {rightElement && <View style={styles.rightCol}>{rightElement}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
    marginTop: 10,
  },
  leftCol: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconWrap: {
    width: 28,
    height: 28,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
    lineHeight: 16,
  },
  rightCol: {
    marginLeft: 12,
  },
});
