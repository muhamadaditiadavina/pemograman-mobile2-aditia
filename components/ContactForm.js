import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ActivityIndicator 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function ContactForm({ onMessageSent }) {
  const { theme } = useTheme();

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!nama.trim()) {
      newErrors.nama = 'Nama lengkap wajib diisi.';
    }

    if (!email.trim()) {
      newErrors.email = 'Alamat email wajib diisi.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Format email tidak valid (contoh: nama@domain.com).';
    }

    if (!pesan.trim()) {
      newErrors.pesan = 'Pesan atau pertanyaan wajib diisi.';
    } else if (pesan.trim().length < 5) {
      newErrors.pesan = 'Pesan minimal berisi 5 karakter.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    setSuccessMessage(null);

    if (!validate()) {
      return;
    }

    setLoading(true);

    // Simulate sending message (Mock API / Level 10 requirement)
    setTimeout(() => {
      setLoading(false);
      const newMsg = {
        id: Date.now().toString(),
        nama: nama.trim(),
        email: email.trim(),
        pesan: pesan.trim(),
        waktu: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };

      setSuccessMessage(`Terima kasih ${nama.trim()}! Pesan Anda berhasil dikirim.`);
      if (onMessageSent) {
        onMessageSent(newMsg);
      }

      setNama('');
      setEmail('');
      setPesan('');
      setErrors({});
    }, 600);
  };

  const handleClear = () => {
    setNama('');
    setEmail('');
    setPesan('');
    setErrors({});
    setSuccessMessage(null);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.card, borderColor: theme.border }]}>
      <View style={styles.formHeader}>
        <View style={styles.formHeaderTitleRow}>
          <View style={[styles.iconWrap, { backgroundColor: theme.subtleBlue, borderColor: theme.border }]}>
            <Ionicons name="chatbubbles-outline" size={16} color={theme.accent} />
          </View>
          <View>
            <Text style={[styles.formTitle, { color: theme.textPrimary }]}>Formulir Kontak Profesional</Text>
            <Text style={[styles.formSubtitle, { color: theme.textSecondary }]}>
              Kirimkan pertanyaan, peluang kolaborasi, atau tanggapan proyek
            </Text>
          </View>
        </View>
      </View>

      {/* Success Notification Alert */}
      {successMessage && (
        <View style={[styles.successBox, { backgroundColor: theme.subtleBlue, borderColor: theme.success }]}>
          <Ionicons name="checkmark-circle" size={18} color={theme.success} style={{ marginRight: 8 }} />
          <Text style={[styles.successText, { color: theme.textPrimary }]}>{successMessage}</Text>
        </View>
      )}

      {/* Field: Nama */}
      <View style={styles.inputGroup}>
        <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>
          Nama Lengkap <Text style={{ color: theme.error }}>*</Text>
        </Text>
        <TextInput
          style={[
            styles.textInput,
            { 
              backgroundColor: theme.secondaryBg, 
              borderColor: errors.nama ? theme.error : theme.border, 
              color: theme.textPrimary 
            }
          ]}
          placeholder="Contoh: Dosen Pengampu / Recruiter"
          placeholderTextColor={theme.textMuted}
          value={nama}
          onChangeText={(text) => {
            setNama(text);
            if (errors.nama) setErrors({ ...errors, nama: null });
          }}
        />
        {errors.nama && (
          <View style={styles.errorRow}>
            <Ionicons name="alert-circle" size={13} color={theme.error} style={{ marginRight: 4 }} />
            <Text style={[styles.errorText, { color: theme.error }]}>{errors.nama}</Text>
          </View>
        )}
      </View>

      {/* Field: Email */}
      <View style={styles.inputGroup}>
        <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>
          Alamat Email <Text style={{ color: theme.error }}>*</Text>
        </Text>
        <TextInput
          style={[
            styles.textInput,
            { 
              backgroundColor: theme.secondaryBg, 
              borderColor: errors.email ? theme.error : theme.border, 
              color: theme.textPrimary 
            }
          ]}
          placeholder="nama@perusahaan.com"
          placeholderTextColor={theme.textMuted}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (errors.email) setErrors({ ...errors, email: null });
          }}
        />
        {errors.email && (
          <View style={styles.errorRow}>
            <Ionicons name="alert-circle" size={13} color={theme.error} style={{ marginRight: 4 }} />
            <Text style={[styles.errorText, { color: theme.error }]}>{errors.email}</Text>
          </View>
        )}
      </View>

      {/* Field: Pesan */}
      <View style={styles.inputGroup}>
        <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>
          Isi Pesan <Text style={{ color: theme.error }}>*</Text>
        </Text>
        <TextInput
          style={[
            styles.textInput,
            styles.textArea,
            { 
              backgroundColor: theme.secondaryBg, 
              borderColor: errors.pesan ? theme.error : theme.border, 
              color: theme.textPrimary 
            }
          ]}
          placeholder="Tuliskan pesan atau catatan mengenai portofolio dan hasil UTS..."
          placeholderTextColor={theme.textMuted}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          value={pesan}
          onChangeText={(text) => {
            setPesan(text);
            if (errors.pesan) setErrors({ ...errors, pesan: null });
          }}
        />
        {errors.pesan && (
          <View style={styles.errorRow}>
            <Ionicons name="alert-circle" size={13} color={theme.error} style={{ marginRight: 4 }} />
            <Text style={[styles.errorText, { color: theme.error }]}>{errors.pesan}</Text>
          </View>
        )}
      </View>

      {/* Action Buttons */}
      <View style={styles.actionRow}>
        <TouchableOpacity
          style={[styles.submitBtn, { backgroundColor: theme.primary }]}
          onPress={handleSubmit}
          disabled={loading}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <>
              <Ionicons name="paper-plane-outline" size={15} color="#FFFFFF" style={{ marginRight: 6 }} />
              <Text style={styles.submitBtnText}>Kirim Pesan Sekarang</Text>
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.resetBtn, { backgroundColor: theme.secondaryBg, borderColor: theme.border }]}
          onPress={handleClear}
          activeOpacity={0.8}
        >
          <Text style={[styles.resetBtnText, { color: theme.textSecondary }]}>Batal / Bersihkan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 20,
  },
  formHeader: {
    marginBottom: 16,
  },
  formHeaderTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: 6,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTitle: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  formSubtitle: {
    fontSize: 11,
    marginTop: 2,
  },
  successBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 14,
  },
  successText: {
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },
  inputGroup: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
  },
  textArea: {
    minHeight: 88,
  },
  errorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  errorText: {
    fontSize: 11,
    fontWeight: '500',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 6,
  },
  submitBtn: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    borderRadius: 6,
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  resetBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 11,
    borderRadius: 6,
    borderWidth: 1,
  },
  resetBtnText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
