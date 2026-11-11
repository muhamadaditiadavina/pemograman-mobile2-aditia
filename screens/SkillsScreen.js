import React, { useState, useMemo } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';

import skillsData from '../data/skills.json';

export default function SkillsScreen() {
  const { theme } = useTheme();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredSkills = useMemo(() => {
    return skillsData.skills.filter((skill) => {
      const matchCat = activeCategory === 'Semua' || skill.category === activeCategory;
      const matchQuery = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.level.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [searchQuery, activeCategory]);

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Banner */}
      <View style={[styles.bannerCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <View style={styles.badgeRow}>
          <View style={[styles.badge, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
            <Text style={[styles.badgeText, { color: theme.accent }]}>KEAHLIAN & TEKNOLOGI</Text>
          </View>
        </View>
        <Text style={[styles.bannerTitle, { color: theme.textPrimary }]}>Skills & Pembelajaran IT</Text>
        <Text style={[styles.bannerSub, { color: theme.textSecondary }]}>
          {skillsData.subtitle_mahasiswa || "Kumpulan keterampilan teknologi yang sedang dipelajari dan dikembangkan sebagai mahasiswa semester 5 Sistem Informasi dalam perkuliahan pemrograman web dan mobile."}
        </Text>

        <View style={[styles.statsRow, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}>
          <View style={styles.statCol}>
            <Text style={[styles.statNum, { color: theme.primary }]}>{skillsData.skills.length}</Text>
            <Text style={[styles.statLbl, { color: theme.textMuted }]}>Total Skills</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
          <View style={styles.statCol}>
            <Text style={[styles.statNum, { color: theme.accent }]}>
              {Math.round(skillsData.skills.reduce((acc, s) => acc + s.percent, 0) / skillsData.skills.length)}%
            </Text>
            <Text style={[styles.statLbl, { color: theme.textMuted }]}>Rata-rata</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
          <View style={styles.statCol}>
            <Text style={[styles.statNum, { color: theme.warning }]}>Semester 5</Text>
            <Text style={[styles.statLbl, { color: theme.textMuted }]}>Tingkat</Text>
          </View>
        </View>
      </View>

      {/* Search Input */}
      <View style={[styles.searchWrap, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}>
        <Ionicons name="search-outline" size={16} color={theme.textMuted} style={styles.searchIcon} />
        <TextInput
          style={[styles.searchInput, { color: theme.textPrimary }]}
          placeholder="Cari keahlian (contoh: React, Laravel, API)..."
          placeholderTextColor={theme.textMuted}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <Ionicons name="close-circle" size={16} color={theme.textMuted} />
          </TouchableOpacity>
        )}
      </View>

      {/* Category Pills */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryScroll}
      >
        {skillsData.categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoryPill,
                { 
                  backgroundColor: isActive ? theme.primary : theme.card,
                  borderColor: isActive ? theme.primary : theme.border 
                }
              ]}
              onPress={() => setActiveCategory(cat)}
              activeOpacity={0.7}
            >
              <Text style={[styles.categoryPillText, { color: isActive ? '#FFFFFF' : theme.textSecondary }]}>
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Section Title */}
      <SectionTitle
        title={`Daftar Keterampilan (${filteredSkills.length})`}
        subtitle="Keahlian teknis dengan level capaian praktikum"
        icon="code-working-outline"
      />

      {/* Skills List */}
      <View style={styles.skillsList}>
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))
        ) : (
          <View style={[styles.emptyBox, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Ionicons name="search-outline" size={32} color={theme.textMuted} style={{ marginBottom: 8 }} />
            <Text style={[styles.emptyTitle, { color: theme.textPrimary }]}>Keahlian Tidak Ditemukan</Text>
            <Text style={[styles.emptyDesc, { color: theme.textSecondary }]}>
              Tidak ada keahlian yang cocok dengan kata kunci "{searchQuery}".
            </Text>
            <TouchableOpacity
              style={[styles.resetSearchBtn, { backgroundColor: theme.primary }]}
              onPress={() => {
                setSearchQuery('');
                setActiveCategory('Semua');
              }}
            >
              <Text style={styles.resetSearchText}>Tampilkan Semua Keahlian</Text>
            </TouchableOpacity>
          </View>
        )}
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
  bannerCard: {
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
  bannerTitle: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.2,
    marginBottom: 6,
  },
  bannerSub: {
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 14,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 10,
  },
  statCol: {
    alignItems: 'center',
    flex: 1,
  },
  statNum: {
    fontSize: 15,
    fontWeight: '800',
  },
  statLbl: {
    fontSize: 10,
    fontWeight: '500',
    marginTop: 2,
    textTransform: 'uppercase',
  },
  statDivider: {
    width: 1,
    height: 20,
  },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 42,
    marginBottom: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
  },
  categoryScroll: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 14,
  },
  categoryPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
  },
  categoryPillText: {
    fontSize: 11,
    fontWeight: '600',
  },
  skillsList: {
    marginBottom: 10,
  },
  emptyBox: {
    padding: 24,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  emptyDesc: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 14,
  },
  resetSearchBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
  },
  resetSearchText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
