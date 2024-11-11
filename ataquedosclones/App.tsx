import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
    return <View style={styles.container} >
      <View style={styles.header}>
        <Image />
        <Image />
        <Image />
        <Image />
      </View>
      <View style={styles.cardValor}>
        <Image />
        <Image />
        <Image />
      </View>
      <View style={styles.cardMenu}>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
      </View>
      <View style={styles.cardAdvertising}>
        <Image/>
      </View>
      <View style={styles.cardAdvertising_cnn}>
        <Image />
      </View>


    </View>


};