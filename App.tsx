import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import FontsScreen from './src/screens/FontsScreen';
import CustomLayoutWithFlexBox from './src/screens/CustomLayoutWithFlexBox';
import DetailScreen from './src/screens/DetailScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CustomLayoutWithFlexBox /> */}
      {/* <FontsScreen /> */}
      <DetailScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
