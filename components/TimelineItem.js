import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function TimelineItem({ item, isLast }) {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {/* Indicator Column */}
      <View style={styles.indicatorCol}>
        <View style={[styles.dot, { backgroundColor: theme.primary, borderColor: theme.card }]}>
          <Ionicons name={item.icon || "school-outline"} size={10} color="#FFFFFF" />
        </View>
        {!isLast && <View style={[styles.line, { backgroundColor: theme.border }]} />}
      </View>

      {/* Content Box */}
      <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <View style={styles.headerRow}>
          <Text style={[styles.periodText, { color: theme.accent }]}>{item.period}</Text>
          {item.badge && (
            <View style={[styles.badge, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
              <Text style={[styles.badgeText, { color: theme.accent }]}>{item.badge}</Text>
            </View>
          )}
        </View>

        <Text style={[styles.roleText, { color: theme.textPrimary }]}>{item.role}</Text>
        <Text style={[styles.companyText, { color: theme.textSecondary }]}>{item.company}</Text>
        <Text style={[styles.descText, { color: theme.textMuted }]}>{item.desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  indicatorCol: {
    width: 28,
    alignItems: 'center',
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  line: {
    width: 2,
    flex: 1,
    marginTop: 2,
    marginBottom: -6,
  },
  card: {
    flex: 1,
    marginLeft: 6,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  periodText: {
    fontSize: 11,
    fontWeight: '700',
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
    borderWidth: 1,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '700',
  },
  roleText: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 2,
  },
  companyText: {
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 6,
  },
  descText: {
    fontSize: 11,
    lineHeight: 16,
  },
});
