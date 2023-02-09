import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {useCameraDevices, Camera} from 'react-native-vision-camera';

const MainScene = () => {
  const devices = useCameraDevices();
  const device = devices.front;

  if (device == null) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </SafeAreaView>
  );
};

export default MainScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
