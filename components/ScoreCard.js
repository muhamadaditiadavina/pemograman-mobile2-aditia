import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function ScoreCard({ data }) {
  const { theme } = useTheme();

  const identitas = data?.identitas;
  const currentScore = data?.current_score;
  const lp = data?.learning_points;

  return (
    <View style={[styles.mainCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
      {/* Header Banner */}
      <View style={[styles.headerBanner, { backgroundColor: theme.secondaryBg, borderBottomColor: theme.border }]}>
        <View style={styles.courseInfoCol}>
          <Text style={[styles.mkLabel, { color: theme.accent }]}>MATA KULIAH RESMI</Text>
          <Text style={[styles.mkTitle, { color: theme.textPrimary }]}>{identitas?.mata_kuliah}</Text>
          <Text style={[styles.dosenText, { color: theme.textSecondary }]}>
            Dosen Pengampu: <Text style={{ fontWeight: '600', color: theme.textPrimary }}>{identitas?.dosen}</Text>
          </Text>
        </View>

        <View style={[styles.gradeBadge, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
          <Text style={[styles.gradeChar, { color: theme.primary }]}>{currentScore?.grade || 'A'}</Text>
          <Text style={[styles.gradeSub, { color: theme.accent }]}>GRADE</Text>
        </View>
      </View>

      <View style={styles.bodyWrap}>
        {/* Metric Cards Grid */}
        <View style={styles.metricsRow}>
          <View style={[styles.metricBox, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}>
            <View style={styles.metricIconRow}>
              <Ionicons name="ribbon-outline" size={15} color={theme.primary} />
              <Text style={[styles.metricLabel, { color: theme.textMuted }]}>CURRENT SCORE</Text>
            </View>
            <Text style={[styles.metricValBig, { color: theme.primary }]}>{currentScore?.nilai}</Text>
            <View style={[styles.statusBadge, { backgroundColor: theme.subtleBlue }]}>
              <Text style={[styles.metricStatus, { color: theme.success }]}>{currentScore?.status}</Text>
            </View>
          </View>

          <View style={[styles.metricBox, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}>
            <View style={styles.metricIconRow}>
              <Ionicons name="flash-outline" size={15} color={theme.accent} />
              <Text style={[styles.metricLabel, { color: theme.textMuted }]}>LEARNING POINTS</Text>
            </View>
            <Text style={[styles.metricValBig, { color: theme.accent }]}>
              {lp?.total?.toLocaleString('id-ID')} <Text style={styles.lpUnit}>{lp?.satuan}</Text>
            </Text>
            <View style={[styles.statusBadge, { backgroundColor: theme.subtleBlue }]}>
              <Text style={[styles.metricStatus, { color: theme.accent }]}>{lp?.rank}</Text>
            </View>
          </View>
        </View>

        {/* Identity Table Section */}
        <View style={[styles.identityCard, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}>
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.identityHeader, { color: theme.textMuted }]}>DATA MAHASISWA & AKADEMIK</Text>
            <View style={styles.verifiedRow}>
              <Ionicons name="shield-checkmark" size={13} color={theme.success} style={{ marginRight: 4 }} />
              <Text style={[styles.verifiedText, { color: theme.success }]}>Terverifikasi</Text>
            </View>
          </View>

          <View style={styles.tableBody}>
            <View style={[styles.tableRow, { borderBottomColor: theme.border }]}>
              <Text style={[styles.tableColLabel, { color: theme.textSecondary }]}>Nama Mahasiswa</Text>
              <Text style={[styles.tableColVal, { color: theme.textPrimary }]}>{identitas?.nama}</Text>
            </View>

            <View style={[styles.tableRow, { borderBottomColor: theme.border }]}>
              <Text style={[styles.tableColLabel, { color: theme.textSecondary }]}>Nomor Induk (NIM)</Text>
              <Text style={[styles.tableColVal, { color: theme.primary, fontWeight: '700' }]}>{identitas?.nim}</Text>
            </View>

            <View style={[styles.tableRow, { borderBottomColor: theme.border }]}>
              <Text style={[styles.tableColLabel, { color: theme.textSecondary }]}>Program Studi & Kampus</Text>
              <Text style={[styles.tableColVal, { color: theme.textPrimary }]}>{identitas?.program_studi} · {identitas?.kampus}</Text>
            </View>

            <View style={[styles.tableRow, { borderBottomColor: theme.border }]}>
              <Text style={[styles.tableColLabel, { color: theme.textSecondary }]}>Semester & Kelas</Text>
              <Text style={[styles.tableColVal, { color: theme.textPrimary }]}>{identitas?.semester} ({identitas?.kelas})</Text>
            </View>

            <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
              <Text style={[styles.tableColLabel, { color: theme.textSecondary }]}>Predikat Kinerja</Text>
              <Text style={[styles.tableColVal, { color: theme.success, fontWeight: '600' }]}>{currentScore?.predikat}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCard: {
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 20,
  },
  headerBanner: {
    padding: 16,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseInfoCol: {
    flex: 1,
    paddingRight: 10,
  },
  mkLabel: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  mkTitle: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: -0.2,
    marginBottom: 2,
  },
  dosenText: {
    fontSize: 12,
  },
  gradeBadge: {
    width: 60,
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradeChar: {
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 28,
  },
  gradeSub: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  bodyWrap: {
    padding: 16,
  },
  metricsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  metricBox: {
    flex: 1,
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
  },
  metricIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 6,
  },
  metricLabel: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  metricValBig: {
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  lpUnit: {
    fontSize: 14,
    fontWeight: '600',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  metricStatus: {
    fontSize: 10,
    fontWeight: '700',
  },
  identityCard: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
  },
  tableHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#263247',
  },
  identityHeader: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  verifiedRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifiedText: {
    fontSize: 11,
    fontWeight: '600',
  },
  tableBody: {
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  tableColLabel: {
    fontSize: 12,
    flex: 1,
  },
  tableColVal: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'right',
    flex: 1.5,
  },
});
