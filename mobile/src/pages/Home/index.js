import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { AppLoading } from 'expo'
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold
} from '@expo-google-fonts/ubuntu'

import styles from './styles';

export default function Home() {

  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.textHeader}>Hi, </Text>
          <Text style={[styles.textHeader, { color: '#FAC900' }]}>João</Text>
        </View>

        <Text>Logo</Text>
      </View>
      
      <View>
        <Text style={styles.title}>Live</Text>
        <ScrollView
          style={styles.liveGroup}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.live}>
            <Image 
              style={styles.doctorImage}
              source={{ uri: 'https://hcplive.s3.amazonaws.com/v1_media/_image/happydoctor.jpg'}}
            />
            <Text style={styles.doctorName}>Dr. Luan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.live}>
            <Image 
              style={styles.doctorImage}
              source={{ uri: 'https://hcplive.s3.amazonaws.com/v1_media/_image/happydoctor.jpg'}}
            />
            <Text style={styles.doctorName}>Dr. Luan</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.live}>
            <Image 
              style={styles.doctorImage}
              source={{ uri: 'https://hcplive.s3.amazonaws.com/v1_media/_image/happydoctor.jpg'}}
            />
            <Text style={styles.doctorName}>Dr. Luan</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    

      <Text style={styles.title}>Recomendados</Text>
    </View>
  );
}
