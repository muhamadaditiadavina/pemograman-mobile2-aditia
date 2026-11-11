import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function ProjectCard({ project, onPress }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}
      onPress={() => onPress && onPress(project)}
      activeOpacity={0.7}
    >
      <View style={styles.headerRow}>
        <View style={styles.titleCol}>
          <View style={styles.badgeRow}>
            <View style={[styles.categoryBadge, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
              <Text style={[styles.categoryText, { color: theme.accent }]}>{project.category}</Text>
            </View>
            {project.badge && (
              <View style={[styles.badgeTag, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}>
                <Text style={[styles.badgeTagText, { color: theme.textSecondary }]}>{project.badge}</Text>
              </View>
            )}
            <Text style={[styles.yearText, { color: theme.textMuted }]}>{project.year}</Text>
          </View>
          <Text style={[styles.title, { color: theme.textPrimary }]}>{project.title}</Text>
        </View>

        <View style={[styles.iconBtn, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}>
          <Ionicons name="arrow-forward" size={14} color={theme.accent} />
        </View>
      </View>

      <Text style={[styles.descText, { color: theme.textSecondary }]} numberOfLines={3}>
        {project.desc}
      </Text>

      {/* Tech Stack Pills */}
      <View style={styles.techWrap}>
        {project.tech?.map((t, idx) => (
          <View key={idx} style={[styles.techPill, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}>
            <Text style={[styles.techText, { color: theme.textPrimary }]}>{t}</Text>
          </View>
        ))}
      </View>

      {/* Footer Highlight */}
      {project.stat && (
        <View style={[styles.footerRow, { borderTopColor: theme.border }]}>
          <Ionicons name="checkmark-circle-outline" size={13} color={theme.success} />
          <Text style={[styles.statText, { color: theme.success }]}>{project.stat}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  titleCol: {
    flex: 1,
    paddingRight: 10,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
    flexWrap: 'wrap',
  },
  categoryBadge: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: '700',
  },
  badgeTag: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
  },
  badgeTagText: {
    fontSize: 10,
    fontWeight: '500',
  },
  yearText: {
    fontSize: 10,
    fontWeight: '500',
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  iconBtn: {
    width: 28,
    height: 28,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descText: {
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 12,
  },
  techWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 10,
  },
  techPill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    borderWidth: 1,
  },
  techText: {
    fontSize: 11,
    fontWeight: '500',
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingTop: 8,
    borderTopWidth: 1,
  },
  statText: {
    fontSize: 11,
    fontWeight: '600',
  },
});
