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
import ProfileHeader from '../components/ProfileHeader';
import SectionTitle from '../components/SectionTitle';

import profileData from '../data/profile.json';
import academicData from '../data/academic.json';

export default function HomeScreen({ onNavigate, onOpenCV }) {
  const { theme } = useTheme();

  const handleNav = (tab) => {
    if (onNavigate) onNavigate(tab);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Header Hero Card */}
      <ProfileHeader 
        data={profileData} 
        onContactPress={() => handleNav('contact')} 
        onDownloadCV={onOpenCV}
      />

      {/* UTS Academic Score Spotlight Card */}
      <View style={[styles.spotlightCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <View style={styles.spotlightHeader}>
          <View style={[styles.spotlightBadge, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
            <Ionicons name="sparkles" size={13} color={theme.accent} style={{ marginRight: 5 }} />
            <Text style={[styles.spotlightBadgeText, { color: theme.accent }]}>UTS ACADEMIC DASHBOARD</Text>
          </View>
          <View style={[styles.gradePill, { backgroundColor: theme.primary }]}>
            <Text style={styles.gradePillText}>GRADE {academicData.current_score.grade}</Text>
          </View>
        </View>

        <Text style={[styles.spotlightTitle, { color: theme.textPrimary }]}>
          {academicData.identitas.mata_kuliah}
        </Text>
        <Text style={[styles.spotlightSub, { color: theme.textSecondary }]}>
          Dosen Pengampu: {academicData.identitas.dosen} · Nilai: <Text style={{ fontWeight: '700', color: theme.primary }}>{academicData.current_score.nilai}/100</Text> ({academicData.current_score.status})
        </Text>

        <View style={[styles.divider, { backgroundColor: theme.border }]} />

        <View style={styles.spotlightMetrics}>
          <View style={[styles.metricItem, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}>
            <Text style={[styles.metricVal, { color: theme.accent }]}>
              {academicData.learning_points.total.toLocaleString('id-ID')}
            </Text>
            <Text style={[styles.metricLbl, { color: theme.textMuted }]}>Learning Points</Text>
          </View>

          <View style={[styles.metricItem, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}>
            <Text style={[styles.metricVal, { color: theme.success }]}>
              {academicData.learning_progress.find(p => p.name === 'Attendance')?.percentage}%
            </Text>
            <Text style={[styles.metricLbl, { color: theme.textMuted }]}>Kehadiran</Text>
          </View>

          <View style={[styles.metricItem, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}>
            <Text style={[styles.metricVal, { color: theme.warning }]}>
              {academicData.learning_progress.find(p => p.name === 'Quest')?.percentage}%
            </Text>
            <Text style={[styles.metricLbl, { color: theme.textMuted }]}>Quest Selesai</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.spotlightBtn, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}
          onPress={() => handleNav('score')}
          activeOpacity={0.8}
        >
          <Text style={[styles.spotlightBtnText, { color: theme.textPrimary }]}>Buka Dashboard Akademik Lengkap</Text>
          <Ionicons name="chevron-forward" size={15} color={theme.primary} />
        </TouchableOpacity>
      </View>

      {/* Engineering Philosophy Card */}
      <SectionTitle
        title="Filosofi & Pendekatan Belajar"
        subtitle="Prinsip ketekunan dan proses belajar mahasiswa teknologi informasi"
        icon="bulb-outline"
      />

      <View style={[styles.farmCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Text style={[styles.farmTitle, { color: theme.textPrimary }]}>
          {profileData.filosofi_title || "Filosofi Muhamad Aditia Davina Kholik"}
        </Text>
        <Text style={[styles.farmDesc, { color: theme.textSecondary }]}>
          "{profileData.filosofi_text}"
        </Text>

        <View style={styles.farmPillsRow}>
          {profileData.aktivitas_mahasiswa?.map((item) => (
            <View key={item.id} style={[styles.farmPill, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}>
              <Ionicons name={item.icon || "checkmark-circle-outline"} size={13} color={theme.accent} style={{ marginRight: 6 }} />
              <Text style={[styles.farmPillText, { color: theme.textPrimary }]}>{item.title}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Quick Navigation Cards */}
      <SectionTitle
        title="Jelajahi Modul Aplikasi"
        subtitle="Pilih menu navigasi untuk melihat detail CV & Portofolio"
        icon="grid-outline"
      />

      <View style={styles.quickNavGrid}>
        <TouchableOpacity
          style={[styles.quickNavCard, { backgroundColor: theme.card, borderColor: theme.border }]}
          onPress={() => handleNav('about')}
        >
          <View style={[styles.quickNavIconWrap, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
            <Ionicons name="person-outline" size={18} color={theme.accent} />
          </View>
          <Text style={[styles.quickNavTitle, { color: theme.textPrimary }]}>Tentang Diri</Text>
          <Text style={[styles.quickNavDesc, { color: theme.textSecondary }]}>Riwayat Studi & Profil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.quickNavCard, { backgroundColor: theme.card, borderColor: theme.border }]}
          onPress={() => handleNav('skills')}
        >
          <View style={[styles.quickNavIconWrap, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
            <Ionicons name="flash-outline" size={18} color={theme.accent} />
          </View>
          <Text style={[styles.quickNavTitle, { color: theme.textPrimary }]}>Keahlian & Stack</Text>
          <Text style={[styles.quickNavDesc, { color: theme.textSecondary }]}>8 Keahlian Teknologi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.quickNavCard, { backgroundColor: theme.card, borderColor: theme.border }]}
          onPress={() => handleNav('portfolio')}
        >
          <View style={[styles.quickNavIconWrap, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
            <Ionicons name="briefcase-outline" size={18} color={theme.accent} />
          </View>
          <Text style={[styles.quickNavTitle, { color: theme.textPrimary }]}>Portofolio Karya</Text>
          <Text style={[styles.quickNavDesc, { color: theme.textSecondary }]}>3 Proyek Mahasiswa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.quickNavCard, { backgroundColor: theme.card, borderColor: theme.border }]}
          onPress={() => handleNav('contact')}
        >
          <View style={[styles.quickNavIconWrap, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
            <Ionicons name="mail-outline" size={18} color={theme.accent} />
          </View>
          <Text style={[styles.quickNavTitle, { color: theme.textPrimary }]}>Hubungi Langsung</Text>
          <Text style={[styles.quickNavDesc, { color: theme.textSecondary }]}>Kirim Pesan & Feedback</Text>
        </TouchableOpacity>
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
  spotlightCard: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
  },
  spotlightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  spotlightBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    borderWidth: 1,
  },
  spotlightBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  gradePill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  gradePillText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  spotlightTitle: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.2,
    marginBottom: 2,
  },
  spotlightSub: {
    fontSize: 12,
  },
  divider: {
    height: 1,
    marginVertical: 12,
  },
  spotlightMetrics: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  metricItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
  },
  metricVal: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 2,
  },
  metricLbl: {
    fontSize: 10,
    fontWeight: '500',
  },
  spotlightBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
  },
  spotlightBtnText: {
    fontSize: 12,
    fontWeight: '600',
    marginRight: 6,
  },
  farmCard: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  farmTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  farmDesc: {
    fontSize: 12,
    lineHeight: 18,
    fontStyle: 'italic',
    marginBottom: 12,
  },
  farmPillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  farmPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
  },
  farmPillText: {
    fontSize: 11,
    fontWeight: '500',
  },
  quickNavGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  quickNavCard: {
    width: '48.5%',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
  },
  quickNavIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  quickNavTitle: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 2,
  },
  quickNavDesc: {
    fontSize: 10,
  },
});
