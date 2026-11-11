import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';

import profileData from '../data/profile.json';
import experienceData from '../data/experience.json';

export default function AboutScreen({ onOpenCV }) {
  const { theme } = useTheme();

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Intro Story Card */}
      <View style={[styles.storyCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <View style={styles.badgeRow}>
          <View style={[styles.badge, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
            <Text style={[styles.badgeText, { color: theme.accent }]}>BIOGRAFI LENGKAP</Text>
          </View>
        </View>

        <Text style={[styles.storyHeading, { color: theme.textPrimary }]}>
          Perjalanan Belajar Sistem Informasi
        </Text>

        <Text style={[styles.storyParagraph, { color: theme.textSecondary }]}>
          {profileData.deskripsi}
        </Text>

        <View style={[styles.quoteBox, { backgroundColor: theme.secondaryBg, borderLeftColor: theme.primary }]}>
          <Text style={[styles.quoteText, { color: theme.textPrimary }]}>
            "{profileData.filosofi_text}"
          </Text>
          <Text style={[styles.quoteAuthor, { color: theme.primary }]}>— {profileData.nama}</Text>
        </View>
      </View>

      {/* What I Do Section */}
      <SectionTitle
        title="Kompetensi Utama (What I Do)"
        subtitle="Bidang rekayasa perangkat lunak dan spesialisasi keahlian"
        icon="construct-outline"
      />

      <View style={styles.whatIDoGrid}>
        {profileData.what_i_do?.map((item) => (
          <View 
            key={item.id} 
            style={[styles.whatCard, { backgroundColor: theme.card, borderColor: theme.border }]}
          >
            <View style={[styles.whatIconWrap, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
              <Ionicons name={item.icon} size={18} color={theme.accent} />
            </View>
            <Text style={[styles.whatTitle, { color: theme.textPrimary }]}>{item.title}</Text>
            <Text style={[styles.whatDesc, { color: theme.textSecondary }]}>{item.desc}</Text>
          </View>
        ))}
      </View>

      {/* Experience & Study Timeline */}
      <SectionTitle
        title="Riwayat Pendidikan & Pengalaman"
        subtitle="Linimasa riwayat pendidikan di SMP 1 Jatinangor, SMA 1 Jatinangor, dan Masoem University"
        icon="school-outline"
      />

      <View style={styles.timelineWrap}>
        {(experienceData.experience || experienceData.experiences || []).map((item, index, arr) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={index === arr.length - 1}
          />
        ))}
      </View>

      {/* Beyond The Code */}
      <SectionTitle
        title="Aktivitas Di Luar Coding"
        subtitle="Keseimbangan hidup, olahraga, dan seni bermusik"
        icon="compass-outline"
      />

      <View style={styles.beyondGrid}>
        {profileData.beyond_the_code?.map((item) => (
          <View 
            key={item.id}
            style={[styles.beyondCard, { backgroundColor: theme.card, borderColor: theme.border }]}
          >
            <View style={[styles.beyondIconWrap, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
              <Ionicons name={item.icon} size={18} color={theme.accent} />
            </View>
            <Text style={[styles.beyondTitle, { color: theme.textPrimary }]}>{item.title}</Text>
            <Text style={[styles.beyondDesc, { color: theme.textSecondary }]}>{item.desc}</Text>
          </View>
        ))}
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
  storyCard: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 14,
  },
  badgeRow: {
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    alignSelf: 'flex-start',
    borderWidth: 1,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  storyHeading: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.2,
    marginBottom: 8,
  },
  storyParagraph: {
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 12,
  },
  quoteBox: {
    padding: 12,
    borderRadius: 6,
    borderLeftWidth: 3,
  },
  quoteText: {
    fontSize: 12,
    fontStyle: 'italic',
    lineHeight: 18,
    marginBottom: 4,
  },
  quoteAuthor: {
    fontSize: 11,
    fontWeight: '700',
  },
  whatIDoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 14,
  },
  whatCard: {
    width: '48.5%',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
  },
  whatIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  whatTitle: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 4,
  },
  whatDesc: {
    fontSize: 11,
    lineHeight: 16,
  },
  timelineWrap: {
    marginBottom: 14,
  },
  beyondGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 14,
  },
  beyondCard: {
    width: '48.5%',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
  },
  beyondIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  beyondTitle: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 4,
  },
  beyondDesc: {
    fontSize: 11,
    lineHeight: 16,
  },
});
