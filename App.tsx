/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {
  useCameraDevices,
  CameraPermissionStatus,
  Camera,
} from 'react-native-vision-camera';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    React.useState<CameraPermissionStatus>('not-determined');

  const devices = useCameraDevices();
  // console.log(JSON.stringify(devices.back, null, '  '));
  const device = devices.back;

  const requestCameraPermission = React.useCallback(async () => {
    console.log('Requesting camera permission...');
    const permission = await Camera.requestCameraPermission();
    console.log(`Camera permission status: ${permission}`);

    // if (permission === 'denied') await Linking.openSettings();
    setCameraPermissionStatus(permission);
  }, []);

  if (cameraPermissionStatus === 'not-determined') {
    return (
      <View>
        <Text
          className="text-2xl text-black dark:text-white"
          onPress={requestCameraPermission}>
          Grant
        </Text>
      </View>
    );
  }

  return device ? (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={false} />
  ) : (
    <Text>Loading</Text>
  );
  // <SafeAreaView style={backgroundStyle}>
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
