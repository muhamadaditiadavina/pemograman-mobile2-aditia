import React, { useState, useMemo } from 'react';
import { 
  ScrollView, 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Modal 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

import portfolioData from '../data/portfolio.json';

export default function PortfolioScreen() {
  const { theme } = useTheme();

  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Semua') return portfolioData.projects;
    return portfolioData.projects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <ScrollView 
        style={[styles.container, { backgroundColor: theme.background }]}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Banner */}
        <View style={[styles.bannerCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <View style={styles.badgeRow}>
            <View style={[styles.badge, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
              <Text style={[styles.badgeText, { color: theme.accent }]}>KARYA & REKAYASA</Text>
            </View>
          </View>
          <Text style={[styles.bannerTitle, { color: theme.textPrimary }]}>Daftar Portofolio Proyek</Text>
          <Text style={[styles.bannerSub, { color: theme.textSecondary }]}>
            Koleksi hasil karya tugas dan praktikum pemrograman selama perkuliahan Sistem Informasi, dari website dasar hingga aplikasi mobile e-commerce.
          </Text>
        </View>

        {/* Filter Pills */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          {portfolioData.categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.filterPill,
                  { 
                    backgroundColor: isActive ? theme.primary : theme.card,
                    borderColor: isActive ? theme.primary : theme.border 
                  }
                ]}
                onPress={() => setActiveCategory(cat)}
                activeOpacity={0.7}
              >
                <Text style={[styles.filterText, { color: isActive ? '#FFFFFF' : theme.textSecondary }]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Section Heading */}
        <SectionTitle
          title={`Daftar Portofolio (${filteredProjects.length})`}
          subtitle="Ketuk salah satu proyek untuk melihat rincian arsitektur"
          icon="folder-open-outline"
        />

        {/* Projects List */}
        <View style={styles.projectsList}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPress={(p) => setSelectedProject(p)}
            />
          ))}
        </View>
      </ScrollView>

      {/* Project Details Modal */}
      {selectedProject && (
        <Modal
          visible={!!selectedProject}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setSelectedProject(null)}
        >
          <View style={styles.modalOverlay}>
            <View style={[styles.modalCard, { backgroundColor: theme.elevated, borderColor: theme.border }]}>
              
              {/* Modal Header */}
              <View style={[styles.modalHeader, { borderBottomColor: theme.border }]}>
                <View style={styles.modalHeaderInfo}>
                  <View style={[styles.modalCategoryBadge, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
                    <Text style={[styles.modalCategoryText, { color: theme.accent }]}>{selectedProject.category}</Text>
                  </View>
                  <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>{selectedProject.title}</Text>
                  <Text style={[styles.modalYear, { color: theme.textMuted }]}>{selectedProject.year} · Karya Mahasiswa Masoem</Text>
                </View>

                <TouchableOpacity 
                  style={[styles.modalCloseBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}
                  onPress={() => setSelectedProject(null)}
                >
                  <Ionicons name="close" size={16} color={theme.textPrimary} />
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.modalBody} showsVerticalScrollIndicator={false}>
                <Text style={[styles.modalSectionLabel, { color: theme.textMuted }]}>DESKRIPSI ARSITEKTUR</Text>
                <Text style={[styles.modalDesc, { color: theme.textSecondary }]}>
                  {selectedProject.desc}
                </Text>

                <Text style={[styles.modalSectionLabel, { color: theme.textMuted, marginTop: 12 }]}>STACK TEKNOLOGI</Text>
                <View style={styles.modalTechRow}>
                  {selectedProject.tech?.map((t, idx) => (
                    <View key={idx} style={[styles.modalTechPill, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                      <Text style={[styles.modalTechText, { color: theme.textPrimary }]}>{t}</Text>
                    </View>
                  ))}
                </View>

                {selectedProject.stat && (
                  <View style={[styles.modalStatBox, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
                    <Ionicons name="checkmark-circle" size={16} color={theme.success} style={{ marginRight: 8 }} />
                    <Text style={[styles.modalStatText, { color: theme.textPrimary }]}>{selectedProject.stat}</Text>
                  </View>
                )}
              </ScrollView>

              <View style={[styles.modalFooter, { borderTopColor: theme.border }]}>
                <TouchableOpacity 
                  style={[styles.modalCloseFooterBtn, { backgroundColor: theme.primary }]}
                  onPress={() => setSelectedProject(null)}
                >
                  <Text style={styles.modalCloseFooterText}>Tutup Rincian</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>
      )}
    </View>
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
    marginBottom: 12,
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
  },
  filterScroll: {
    flexDirection: 'row',
    gap: 6,
    marginVertical: 10,
  },
  filterPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
  },
  filterText: {
    fontSize: 11,
    fontWeight: '600',
  },
  projectsList: {
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(8, 11, 18, 0.82)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalCard: {
    width: '100%',
    maxWidth: 500,
    maxHeight: '80%',
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 16,
    borderBottomWidth: 1,
  },
  modalHeaderInfo: {
    flex: 1,
    paddingRight: 10,
  },
  modalCategoryBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  modalCategoryText: {
    fontSize: 10,
    fontWeight: '700',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.2,
    marginBottom: 2,
  },
  modalYear: {
    fontSize: 11,
  },
  modalCloseBtn: {
    width: 28,
    height: 28,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBody: {
    padding: 16,
  },
  modalSectionLabel: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  modalDesc: {
    fontSize: 12,
    lineHeight: 18,
  },
  modalTechRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
    marginBottom: 12,
  },
  modalTechPill: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
  },
  modalTechText: {
    fontSize: 11,
    fontWeight: '500',
  },
  modalStatBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 6,
  },
  modalStatText: {
    fontSize: 12,
    fontWeight: '600',
  },
  modalFooter: {
    padding: 12,
    borderTopWidth: 1,
    alignItems: 'flex-end',
  },
  modalCloseFooterBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
  },
  modalCloseFooterText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
