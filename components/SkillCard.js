import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function SkillCard({ skill }) {
  const { theme } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
      <View style={styles.topRow}>
        <View style={[styles.iconBox, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
          <Ionicons name={skill.icon || 'code-slash'} size={18} color={theme.accent} />
        </View>

        <View style={styles.infoCol}>
          <Text style={[styles.nameText, { color: theme.textPrimary }]}>{skill.name}</Text>
          <View style={styles.badgeRow}>
            <View style={[styles.categoryBadge, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}>
              <Text style={[styles.categoryText, { color: theme.textSecondary }]}>{skill.category}</Text>
            </View>
            <View style={[styles.levelBadge, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
              <Text style={[styles.levelText, { color: theme.accent }]}>{skill.level}</Text>
            </View>
          </View>
        </View>

        <Text style={[styles.percentNum, { color: theme.primary }]}>{skill.percent}%</Text>
      </View>

      <View style={[styles.progressBarBg, { backgroundColor: theme.secondaryBg }]}>
        <View style={[styles.progressBarFill, { width: `${skill.percent}%`, backgroundColor: theme.primary }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  infoCol: {
    flex: 1,
  },
  nameText: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 6,
  },
  categoryBadge: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: '500',
  },
  levelBadge: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
  },
  levelText: {
    fontSize: 10,
    fontWeight: '600',
  },
  percentNum: {
    fontSize: 14,
    fontWeight: '800',
    marginLeft: 8,
  },
  progressBarBg: {
    height: 5,
    borderRadius: 2.5,
    overflow: 'hidden',
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 2.5,
  },
});
