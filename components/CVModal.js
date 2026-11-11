import React from 'react';
import { 
  Modal, 
  View, 
  Text, 
  Image,
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { downloadCV, openCVPdf, CV_FILE_NAME } from '../utils/cvHelper';

export default function CVModal({ visible, onClose }) {
  const { theme } = useTheme();

  if (!visible) return null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContainer, { backgroundColor: theme.elevated, borderColor: theme.border }]}>
          
          {/* Header Bar */}
          <View style={[styles.modalHeader, { borderBottomColor: theme.border }]}>
            <View style={styles.headerTitleWrap}>
              <View style={[styles.pdfIconBadge, { backgroundColor: theme.primaryLight }]}>
                <Ionicons name="document-text" size={20} color={theme.primary} />
              </View>
              <View>
                <Text style={[styles.modalTitle, { color: theme.textPrimary }]}>Curriculum Vitae (PDF)</Text>
                <Text style={[styles.modalSubtitle, { color: theme.textSecondary }]}>
                  Dokumen Resmi Lengkap Foto · ATS-Ready · Format A4
                </Text>
              </View>
            </View>

            <TouchableOpacity 
              onPress={onClose} 
              style={[styles.closeBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}
              accessibilityLabel="Tutup Modal"
            >
              <Ionicons name="close" size={18} color={theme.textPrimary} />
            </TouchableOpacity>
          </View>

          {/* Body Content */}
          <ScrollView 
            style={styles.modalBody} 
            contentContainerStyle={styles.bodyContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Meta Tags Row */}
            <View style={styles.tagRow}>
              <View style={[styles.metaBadge, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                <Ionicons name="image-outline" size={12} color={theme.accent} style={{ marginRight: 4 }} />
                <Text style={[styles.metaBadgeText, { color: theme.textPrimary }]}>Foto Profil Terlampir</Text>
              </View>
              <View style={[styles.metaBadge, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                <Ionicons name="checkmark-circle" size={12} color={theme.success} style={{ marginRight: 4 }} />
                <Text style={[styles.metaBadgeText, { color: theme.textPrimary }]}>475 KB</Text>
              </View>
              <View style={[styles.metaBadge, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                <Ionicons name="ribbon" size={12} color={theme.primary} style={{ marginRight: 4 }} />
                <Text style={[styles.metaBadgeText, { color: theme.textPrimary }]}>Skor UTS: 89 (A)</Text>
              </View>
              <View style={[styles.metaBadge, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                <Ionicons name="hardware-chip" size={12} color={theme.accent} style={{ marginRight: 4 }} />
                <Text style={[styles.metaBadgeText, { color: theme.textPrimary }]}>Level 10</Text>
              </View>
            </View>

            {/* Document Details Card */}
            <View style={[styles.previewBox, { backgroundColor: theme.surface, borderColor: theme.border }]}>
              {/* Header with Avatar Photo */}
              <View style={styles.previewHeaderRow}>
                <Image
                  source={require('../assets/profile.jpg')}
                  style={[styles.previewAvatar, { borderColor: theme.primary }]}
                  resizeMode="cover"
                />
                <View style={styles.previewHeaderInfo}>
                  <Text style={[styles.previewSectionTitle, { color: theme.textPrimary }]}>
                    Muhamad Aditia Davina Kholik
                  </Text>
                  <Text style={[styles.previewRole, { color: theme.primary }]}>
                    Mahasiswa Sistem Informasi · Masoem University
                  </Text>
                  <Text style={[styles.previewMeta, { color: theme.textMuted }]}>
                    NIM: 242505030 · Jatinangor, Jawa Barat
                  </Text>
                </View>
              </View>

              <View style={[styles.previewDivider, { backgroundColor: theme.border }]} />

              <Text style={[styles.previewSubhead, { color: theme.textPrimary }]}>Ringkasan Eksekutif:</Text>
              <Text style={[styles.previewText, { color: theme.textSecondary }]}>
                Mahasiswa semester 5 berfokus pada rekayasa antarmuka (Frontend) web dan pengembangan aplikasi mobile multiplatform (React Native & Expo). Memiliki penguasaan stack JavaScript modern, arsitektur data lokal JSON modular, integrasi API, dan perancangan Design System berstandar Enterprise.
              </Text>

              <View style={[styles.previewDivider, { backgroundColor: theme.border }]} />

              <Text style={[styles.previewSubhead, { color: theme.textPrimary }]}>Capaian Kinerja Akademik UTS:</Text>
              <View style={styles.scoreSummaryGrid}>
                <View style={styles.scoreItem}>
                  <Text style={[styles.scoreVal, { color: theme.primary }]}>89 / 100</Text>
                  <Text style={[styles.scoreLbl, { color: theme.textMuted }]}>Grade A</Text>
                </View>
                <View style={styles.scoreItem}>
                  <Text style={[styles.scoreVal, { color: theme.accent }]}>12.375</Text>
                  <Text style={[styles.scoreLbl, { color: theme.textMuted }]}>Learning Points</Text>
                </View>
                <View style={styles.scoreItem}>
                  <Text style={[styles.scoreVal, { color: theme.success }]}>10 / 10</Text>
                  <Text style={[styles.scoreLbl, { color: theme.textMuted }]}>Level Tercapai</Text>
                </View>
              </View>

              <View style={[styles.previewDivider, { backgroundColor: theme.border }]} />

              <Text style={[styles.previewSubhead, { color: theme.textPrimary }]}>Spesifikasi File Dokumen:</Text>
              <Text style={[styles.fileNotice, { color: theme.textMuted }]}>
                Nama Berkas: <Text style={{ color: theme.textPrimary, fontWeight: '600' }}>{CV_FILE_NAME}</Text>
              </Text>
              <Text style={[styles.fileNotice, { color: theme.textMuted }]}>
                Foto Profil: <Text style={{ color: theme.success, fontWeight: '600' }}>Tersemat Beresolusi Tinggi (Official)</Text>
              </Text>
              <Text style={[styles.fileNotice, { color: theme.textMuted }]}>
                Format: <Text style={{ color: theme.textPrimary, fontWeight: '600' }}>Adobe PDF (Print Ready, ATS-Friendly)</Text>
              </Text>
            </View>
          </ScrollView>

          {/* Action Footer */}
          <View style={[styles.modalFooter, { borderTopColor: theme.border, backgroundColor: theme.elevated }]}>
            <TouchableOpacity 
              style={[styles.primaryActionBtn, { backgroundColor: theme.primary }]}
              onPress={() => {
                downloadCV();
              }}
              activeOpacity={0.8}
            >
              <Ionicons name="download-outline" size={18} color="#FFFFFF" style={{ marginRight: 8 }} />
              <Text style={styles.primaryActionText}>Unduh PDF Sekarang</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.secondaryActionBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}
              onPress={() => {
                openCVPdf();
              }}
              activeOpacity={0.8}
            >
              <Ionicons name="open-outline" size={16} color={theme.textPrimary} style={{ marginRight: 6 }} />
              <Text style={[styles.secondaryActionText, { color: theme.textPrimary }]}>Buka di Tab Baru</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(8, 11, 18, 0.82)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContainer: {
    width: '100%',
    maxWidth: 580,
    maxHeight: '90%',
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  headerTitleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  pdfIconBadge: {
    width: 38,
    height: 38,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  modalSubtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBody: {
    flex: 1,
  },
  bodyContent: {
    padding: 20,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  metaBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
  },
  metaBadgeText: {
    fontSize: 11,
    fontWeight: '600',
  },
  previewBox: {
    padding: 18,
    borderRadius: 10,
    borderWidth: 1,
  },
  previewHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  previewAvatar: {
    width: 58,
    height: 58,
    borderRadius: 8,
    borderWidth: 2,
  },
  previewHeaderInfo: {
    flex: 1,
  },
  previewSectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  previewRole: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 2,
  },
  previewMeta: {
    fontSize: 11,
  },
  previewDivider: {
    height: 1,
    marginVertical: 12,
  },
  previewSubhead: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  previewText: {
    fontSize: 12,
    lineHeight: 18,
  },
  scoreSummaryGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  scoreItem: {
    alignItems: 'center',
    flex: 1,
  },
  scoreVal: {
    fontSize: 16,
    fontWeight: '800',
  },
  scoreLbl: {
    fontSize: 10,
    fontWeight: '500',
    marginTop: 2,
    textTransform: 'uppercase',
  },
  fileNotice: {
    fontSize: 11,
    marginTop: 3,
  },
  modalFooter: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  primaryActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  primaryActionText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  secondaryActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
  secondaryActionText: {
    fontSize: 13,
    fontWeight: '600',
  },
});
