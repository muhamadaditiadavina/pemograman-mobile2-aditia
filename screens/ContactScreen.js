import React, { useState } from 'react';
import { 
  ScrollView, 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Linking 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

import profileData from '../data/profile.json';

export default function ContactScreen({ onOpenCV }) {
  const { theme } = useTheme();

  // History of sent messages for demonstration (Level 10 feedback & state persistence)
  const [sentMessages, setSentMessages] = useState([
    {
      id: 'mock-1',
      nama: 'Budi Santoso',
      email: 'budi.santoso@example.com',
      pesan: 'Halo Muhamad Aditia Davina Kholik, tampilan aplikasi CV dan Academic Score kamu sangat rapi, terstruktur secara profesional, dan fiturnya lengkap! Sukses selalu untuk UTS Pemrograman Mobile 2 di Masoem University.',
      waktu: '10:30 WIB',
    }
  ]);

  const handleMessageSent = (newMsg) => {
    setSentMessages(prev => [newMsg, ...prev]);
  };

  const handleOpenWhatsApp = () => {
    if (profileData.whatsapp) {
      Linking.openURL(`https://wa.me/${profileData.whatsapp}?text=Halo%20Muhamad%20Aditia%2C%20saya%20telah%20melihat%20aplikasi%20CV%20kamu`).catch(() => {});
    }
  };

  const handleSendEmail = () => {
    if (profileData.email) {
      Linking.openURL(`mailto:${profileData.email}?subject=Diskusi%20Project%20UTS%20Mobile%202`).catch(() => {});
    }
  };

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Contact Quick Channels */}
      <View style={[styles.channelCard, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <View style={styles.badgeRow}>
          <View style={[styles.badge, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
            <Text style={[styles.badgeText, { color: theme.accent }]}>HUBUNGI LANGSUNG</Text>
          </View>
        </View>

        <Text style={[styles.channelTitle, { color: theme.textPrimary }]}>Saluran Komunikasi Cepat</Text>
        <Text style={[styles.channelSub, { color: theme.textSecondary }]}>
          Silakan hubungi melalui kontak personal atau isi formulir terstruktur di bawah.
        </Text>

        <View style={styles.channelButtons}>
          <TouchableOpacity 
            style={[styles.channelBtn, { backgroundColor: '#107C41' }]}
            onPress={handleOpenWhatsApp}
            activeOpacity={0.8}
          >
            <Ionicons name="logo-whatsapp" size={16} color="#FFFFFF" style={{ marginRight: 6 }} />
            <Text style={styles.channelBtnText}>0859-7431-4120</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.channelBtn, { backgroundColor: theme.primary }]}
            onPress={handleSendEmail}
            activeOpacity={0.8}
          >
            <Ionicons name="mail-outline" size={16} color="#FFFFFF" style={{ marginRight: 6 }} />
            <Text style={styles.channelBtnText}>Email Langsung</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Interactive Contact Form (Level 4, 10) */}
      <SectionTitle
        title="Kirim Pesan & Feedback"
        subtitle="Formulir validasi input interaktif (Level 4 & Level 10)"
        icon="create-outline"
      />

      <ContactForm onMessageSent={handleMessageSent} />

      {/* Message History Feed (Level 10) */}
      <SectionTitle
        title={`Riwayat Pesan Terkirim (${sentMessages.length})`}
        subtitle="Feedback real-time dan simulasi penyimpanan respons"
        icon="file-tray-full-outline"
      />

      <View style={styles.historyList}>
        {sentMessages.map((msg) => (
          <View 
            key={msg.id} 
            style={[styles.msgCard, { backgroundColor: theme.card, borderColor: theme.border }]}
          >
            <View style={styles.msgHeader}>
              <View style={styles.msgUserRow}>
                <View style={[styles.msgAvatar, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
                  <Text style={[styles.msgAvatarText, { color: theme.accent }]}>
                    {msg.nama.charAt(0).toUpperCase()}
                  </Text>
                </View>
                <View>
                  <Text style={[styles.msgNama, { color: theme.textPrimary }]}>{msg.nama}</Text>
                  <Text style={[styles.msgEmail, { color: theme.textMuted }]}>{msg.email}</Text>
                </View>
              </View>
              <Text style={[styles.msgTime, { color: theme.textMuted }]}>{msg.waktu}</Text>
            </View>

            <View style={[styles.msgDivider, { backgroundColor: theme.border }]} />
            <Text style={[styles.msgBody, { color: theme.textSecondary }]}>{msg.pesan}</Text>
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
  channelCard: {
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
  channelTitle: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.2,
    marginBottom: 4,
  },
  channelSub: {
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 12,
  },
  channelButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  channelBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 6,
  },
  channelBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  historyList: {
    marginBottom: 10,
  },
  msgCard: {
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
  },
  msgHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  msgUserRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  msgAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  msgAvatarText: {
    fontSize: 13,
    fontWeight: '800',
  },
  msgNama: {
    fontSize: 13,
    fontWeight: '700',
  },
  msgEmail: {
    fontSize: 10,
  },
  msgTime: {
    fontSize: 10,
  },
  msgDivider: {
    height: 1,
    marginVertical: 8,
  },
  msgBody: {
    fontSize: 12,
    lineHeight: 18,
  },
});
