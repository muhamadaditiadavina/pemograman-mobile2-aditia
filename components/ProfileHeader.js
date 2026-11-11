import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function ProfileHeader({ data, onContactPress, onDownloadCV }) {
  const { theme } = useTheme();

  const handleOpenLink = (url) => {
    if (url) {
      Linking.openURL(url).catch(() => {});
    }
  };

  const handleWhatsApp = () => {
    if (data?.whatsapp) {
      Linking.openURL(`https://wa.me/${data.whatsapp}?text=Halo%20${encodeURIComponent(data.nama)}%2C%20saya%20melihat%20aplikasi%20CV%20anda`).catch(() => {});
    }
  };

  return (
    <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
      {/* Top Accent Strip */}
      <View style={[styles.bannerAccent, { backgroundColor: theme.subtleBlue, borderBottomColor: theme.border }]} />

      <View style={styles.contentWrap}>
        {/* Avatar & Social Row */}
        <View style={styles.avatarRow}>
          <View style={[styles.avatarWrap, { borderColor: theme.border, backgroundColor: theme.surface }]}>
            <Image
              source={require('../assets/profile.jpg')}
              style={styles.avatarImage}
              resizeMode="cover"
            />
            <View style={[styles.verifiedBadge, { backgroundColor: theme.primary, borderColor: theme.surface }]}>
              <Ionicons name="checkmark" size={11} color="#FFFFFF" />
            </View>
          </View>

          <View style={styles.topActionRow}>
            <TouchableOpacity 
              style={[styles.socialIconBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}
              onPress={() => handleOpenLink(data?.github || `mailto:${data?.email}`)}
              accessibilityLabel="GitHub Profile"
            >
              <Ionicons name="logo-github" size={17} color={theme.textPrimary} />
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.socialIconBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}
              onPress={handleWhatsApp}
              accessibilityLabel="WhatsApp"
            >
              <Ionicons name="logo-whatsapp" size={17} color={theme.success} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Identity Information */}
        <View style={styles.identitasBox}>
          <Text style={[styles.namaText, { color: theme.textPrimary }]}>{data?.nama}</Text>
          
          <View style={styles.nimRow}>
            <View style={[styles.nimBadge, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
              <Ionicons name="id-card-outline" size={13} color={theme.accent} style={{ marginRight: 5 }} />
              <Text style={[styles.nimText, { color: theme.accent }]}>NIM: {data?.nim}</Text>
            </View>
            <View style={[styles.prodiBadge, { backgroundColor: theme.surface, borderColor: theme.border }]}>
              <Text style={[styles.prodiText, { color: theme.textSecondary }]}>{data?.prodi} · {data?.kampus}</Text>
            </View>
          </View>

          <Text style={[styles.profesiText, { color: theme.primary }]}>{data?.profesi}</Text>
          <Text style={[styles.taglineText, { color: theme.textSecondary }]}>"{data?.tagline}"</Text>
        </View>

        {/* Brief Bio */}
        <Text style={[styles.bioText, { color: theme.textSecondary }]}>
          {data?.bio_singkat}
        </Text>

        {/* Location & Status Meta */}
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="location-outline" size={14} color={theme.textMuted} />
            <Text style={[styles.metaText, { color: theme.textMuted }]}>{data?.lokasi}</Text>
          </View>
          <View style={styles.metaItem}>
            <View style={[styles.dotStatus, { backgroundColor: theme.success }]} />
            <Text style={[styles.metaText, { color: theme.success, fontWeight: '600' }]}>
              Mahasiswa Aktif · Siap Kolaborasi
            </Text>
          </View>
        </View>

        {/* Structured Stats Grid */}
        {data?.stats && (
          <View style={[styles.statsGrid, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}>
            <View style={styles.statCol}>
              <Text style={[styles.statValue, { color: theme.textPrimary }]}>{data.stats.pengalaman}</Text>
              <Text style={[styles.statLabel, { color: theme.textMuted }]}>Pengalaman</Text>
            </View>
            <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
            <View style={styles.statCol}>
              <Text style={[styles.statValue, { color: theme.accent }]}>{data.stats.proyek}</Text>
              <Text style={[styles.statLabel, { color: theme.textMuted }]}>Karya Proyek</Text>
            </View>
            <View style={[styles.statDivider, { backgroundColor: theme.border }]} />
            <View style={styles.statCol}>
              <Text style={[styles.statValue, { color: theme.success }]}>{data.stats.skor_uts}</Text>
              <Text style={[styles.statLabel, { color: theme.textMuted }]}>Skor UTS (A)</Text>
            </View>
          </View>
        )}

        {/* Enterprise Action Button Group */}
        <View style={styles.actionRow}>
          {/* Primary Action: Download CV */}
          <TouchableOpacity
            style={[styles.primaryActionBtn, { backgroundColor: theme.primary }]}
            onPress={onDownloadCV}
            activeOpacity={0.8}
          >
            <Ionicons name="download-outline" size={16} color="#FFFFFF" style={{ marginRight: 6 }} />
            <Text style={styles.primaryActionText}>Unduh CV (PDF)</Text>
          </TouchableOpacity>

          {/* Secondary Action: WhatsApp */}
          <TouchableOpacity
            style={[styles.secondaryActionBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}
            onPress={handleWhatsApp}
            activeOpacity={0.8}
          >
            <Ionicons name="logo-whatsapp" size={15} color={theme.success} style={{ marginRight: 6 }} />
            <Text style={[styles.secondaryActionText, { color: theme.textPrimary }]}>WhatsApp</Text>
          </TouchableOpacity>

          {/* Secondary Action: Contact Form */}
          {onContactPress && (
            <TouchableOpacity
              style={[styles.secondaryActionBtn, { backgroundColor: theme.surface, borderColor: theme.border }]}
              onPress={onContactPress}
              activeOpacity={0.8}
            >
              <Ionicons name="mail-outline" size={15} color={theme.textPrimary} style={{ marginRight: 6 }} />
              <Text style={[styles.secondaryActionText, { color: theme.textPrimary }]}>Kirim Pesan</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 20,
  },
  bannerAccent: {
    height: 48,
    width: '100%',
    borderBottomWidth: 1,
  },
  contentWrap: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: -28,
  },
  avatarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  avatarWrap: {
    width: 72,
    height: 72,
    borderRadius: 10,
    borderWidth: 2,
    position: 'relative',
    overflow: 'visible',
  },
  avatarImage: {
    width: 68,
    height: 68,
    borderRadius: 8,
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  topActionRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 4,
  },
  socialIconBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  identitasBox: {
    marginBottom: 10,
  },
  namaText: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.4,
  },
  nimRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 6,
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  nimBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
  },
  nimText: {
    fontSize: 11,
    fontWeight: '700',
  },
  prodiBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
  },
  prodiText: {
    fontSize: 11,
    fontWeight: '500',
  },
  profesiText: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  taglineText: {
    fontSize: 12,
    marginBottom: 6,
  },
  bioText: {
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
    flexWrap: 'wrap',
    gap: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  metaText: {
    fontSize: 11,
  },
  dotStatus: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },
  statsGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 12,
    marginBottom: 16,
  },
  statCol: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  statDivider: {
    width: 1,
    height: 24,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  primaryActionBtn: {
    flex: 1.2,
    minWidth: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    borderRadius: 8,
  },
  primaryActionText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
  secondaryActionBtn: {
    flex: 1,
    minWidth: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    borderRadius: 8,
    borderWidth: 1,
  },
  secondaryActionText: {
    fontWeight: '600',
    fontSize: 12,
  },
});
