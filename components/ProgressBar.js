import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function ProgressBar({ label, percentage, detail, color, icon }) {
  const { theme } = useTheme();
  const barColor = color || theme.primary;
  const clamped = Math.min(100, Math.max(0, percentage));

  return (
    <View style={[styles.container, { backgroundColor: theme.card, borderColor: theme.border }]}>
      <View style={styles.headerRow}>
        <View style={styles.labelCol}>
          {icon && (
            <Ionicons name={icon} size={15} color={barColor} style={{ marginRight: 6 }} />
          )}
          <Text style={[styles.labelText, { color: theme.textPrimary }]}>{label}</Text>
        </View>
        <Text style={[styles.percentText, { color: barColor }]}>{percentage}%</Text>
      </View>

      <View style={[styles.track, { backgroundColor: theme.secondaryBg }]}>
        <View style={[styles.fill, { width: `${clamped}%`, backgroundColor: barColor }]} />
      </View>

      {detail && (
        <Text style={[styles.detailText, { color: theme.textSecondary }]}>{detail}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  labelCol: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 13,
    fontWeight: '700',
  },
  percentText: {
    fontSize: 13,
    fontWeight: '800',
  },
  track: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    width: '100%',
  },
  fill: {
    height: '100%',
    borderRadius: 3,
  },
  detailText: {
    fontSize: 11,
    marginTop: 8,
    lineHeight: 15,
  },
});
