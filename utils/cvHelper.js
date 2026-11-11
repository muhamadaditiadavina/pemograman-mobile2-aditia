import { Platform, Linking, Alert } from 'react-native';

export const CV_FILE_NAME = 'CV_Muhamad_Aditia_Davina_Kholik.pdf';
export const CV_PUBLIC_URL = '/CV_Muhamad_Aditia_Davina_Kholik.pdf';

/**
 * Downloads the Curriculum Vitae PDF file.
 * Handles both Web and Mobile platforms seamlessly.
 */
export const downloadCV = () => {
  try {
    if (Platform.OS === 'web') {
      const link = document.createElement('a');
      link.href = CV_PUBLIC_URL;
      link.setAttribute('download', CV_FILE_NAME);
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return true;
    } else {
      // On mobile native, attempt to open URL or trigger browser download
      Linking.openURL(CV_PUBLIC_URL).catch(() => {
        Alert.alert(
          'Unduh CV',
          'Dokumen PDF siap diunduh: ' + CV_FILE_NAME,
          [{ text: 'OK' }]
        );
      });
      return true;
    }
  } catch (error) {
    console.error('[cvHelper] Download error:', error);
    return false;
  }
};

/**
 * Opens the CV PDF in a new window/tab for instant preview.
 */
export const openCVPdf = () => {
  try {
    if (Platform.OS === 'web') {
      window.open(CV_PUBLIC_URL, '_blank', 'noopener,noreferrer');
    } else {
      Linking.openURL(CV_PUBLIC_URL).catch(() => {});
    }
  } catch (error) {
    console.error('[cvHelper] Open PDF error:', error);
  }
};

