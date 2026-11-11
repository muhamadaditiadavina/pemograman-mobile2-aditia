import React from 'react';
import { 
  ScrollView, 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import SectionTitle from '../components/SectionTitle';
import ScoreCard from '../components/ScoreCard';
import ProgressBar from '../components/ProgressBar';

import academicData from '../data/academic.json';

export default function ScoreScreen({ onOpenCV }) {
  const { theme } = useTheme();

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Official UTS Academic Score Card - Level 8 Requirement */}
      <ScoreCard data={academicData} />

      {/* Learning Progress Section - Level 8 Requirement */}
      <SectionTitle
        title="Learning Progress"
        subtitle="Indikator persentase capaian belajar dirender dinamis dari data JSON"
        icon="trending-up-outline"
      />

      <View style={styles.progressList}>
        {academicData.learning_progress?.map((prog) => (
          <ProgressBar
            key={prog.id}
            label={prog.name}
            percentage={prog.percentage}
            detail={`${prog.label} · ${prog.detail}`}
            color={prog.color}
            icon={prog.icon}
          />
        ))}
      </View>

      {/* 10 Challenge Levels Fulfillment Checklist */}
      <SectionTitle
        title="10 Progressive Challenge Levels"
        subtitle="Daftar pemenuhan kompetensi Level 1 (Novice) sampai Level 10 (Industry)"
        icon="checkbox-outline"
      />

      <View style={[styles.challengeCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <View style={[styles.challengeSummaryRow, { borderBottomColor: theme.border }]}>
          <View style={[styles.trophyIconWrap, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
            <Ionicons name="trophy" size={20} color={theme.accent} />
          </View>
          <View style={styles.summaryCol}>
            <Text style={[styles.summaryTitle, { color: theme.textPrimary }]}>Status: 10 / 10 Levels Completed</Text>
            <Text style={[styles.summarySub, { color: theme.success }]}>Memenuhi seluruh standar kriteria penilaian dosen</Text>
          </View>
        </View>

        <View style={styles.levelItemsWrap}>
          {academicData.levels_achieved?.map((lvl) => (
            <View key={lvl.level} style={[styles.levelRow, { borderBottomColor: theme.border }]}>
              <View style={[styles.levelCheck, { backgroundColor: theme.primary }]}>
                <Ionicons name="checkmark" size={11} color="#FFFFFF" />
              </View>
              <View style={styles.levelInfo}>
                <Text style={[styles.levelName, { color: theme.textPrimary }]}>
                  Level {lvl.level} — {lvl.name}
                </Text>
                <Text style={[styles.levelDesc, { color: theme.textSecondary }]}>{lvl.desc}</Text>
              </View>
              <View style={[styles.doneBadge, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
                <Text style={[styles.doneText, { color: theme.accent }]}>Selesai</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 28,
  },
  progressList: {
    marginBottom: 14,
  },
  challengeCard: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 14,
  },
  challengeSummaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    gap: 12,
  },
  trophyIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryCol: {
    flex: 1,
  },
  summaryTitle: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  summarySub: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  levelItemsWrap: {
    paddingHorizontal: 14,
  },
  levelRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
    borderBottomWidth: 1,
    gap: 10,
  },
  levelCheck: {
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  levelInfo: {
    flex: 1,
  },
  levelName: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 2,
  },
  levelDesc: {
    fontSize: 11,
    lineHeight: 15,
  },
  doneBadge: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
  },
  doneText: {
    fontSize: 9,
    fontWeight: '700',
  },
});
