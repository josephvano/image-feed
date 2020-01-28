import React                    from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Constants                from 'expo-constants';
import Card                     from "./components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        fullName={'Joseph Vano'}
        image={{
          uri: 'http://unsplash.it/600/600'
        }}
        linkText={'Comments'}
        onPressLinkText={() => console.log('Comments linked')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#fff',
    marginTop      : Constants.statusBarHeight
  },
});
