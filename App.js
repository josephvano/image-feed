import React                    from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Constants                from 'expo-constants';
import AuthorRow                from "./components/AuthorRow";

export default function App() {
  return (
    <View style={styles.container}>
      <AuthorRow fullName={'Joseph Vano'} linkText={'Comments'} onPressLinkText={
        () => console.log('Comments clicked!')
      }/>
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
