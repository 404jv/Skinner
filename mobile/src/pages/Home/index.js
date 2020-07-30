import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { AppLoading } from 'expo'
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold
} from '@expo-google-fonts/ubuntu'
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';

export default function Home() {

  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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

      <Text style={styles.title}>For you</Text>
      <ScrollView
        contentContainerStyle={{ 
          alignItems: 'center'
        }}
      > 
        <View style={styles.doctor}>
          <View style={styles.doctorInfo}>
            <Image 
              source={{ uri: 'https://images.daznservices.com/di/library/GOAL/23/bc/neymar-psg-ligue-1_zv7n75ib8ihzjlour392nac.jpg?t=432816832&quality=100'}}
              style={styles.imageFeed}
            />
            <View style={{ margin: 8, }}> 
              <Text style={styles.namefeed}>Menino Ney</Text>
              <Text style={styles.textFeed}>Formado na USP mestrado em Harvard. Trabalhando na Laboratório Irineu</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.textButton}>Ver mais</Text>
            <Icon name="arrow-right" size={20} color="#FAC900" />
          </TouchableOpacity>
        </View>

        <View style={styles.doctor}>
          <View style={styles.doctorInfo}>
            <Image 
              source={{ uri: 'https://images.daznservices.com/di/library/GOAL/23/bc/neymar-psg-ligue-1_zv7n75ib8ihzjlour392nac.jpg?t=432816832&quality=100'}}
              style={styles.imageFeed}
            />
            <View style={{ margin: 8, }}> 
              <Text style={styles.namefeed}>Menino Ney</Text>
              <Text style={styles.textFeed}>Formado na USP mestrado em Harvard. Trabalhando na Laboratório Irineu</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.textButton}>Ver mais</Text>
            <Icon name="arrow-right" size={20} color="#FAC900" />
          </TouchableOpacity>
        </View>

        <View style={styles.doctor}>
          <View style={styles.doctorInfo}>
            <Image 
              source={{ uri: 'https://images.daznservices.com/di/library/GOAL/23/bc/neymar-psg-ligue-1_zv7n75ib8ihzjlour392nac.jpg?t=432816832&quality=100'}}
              style={styles.imageFeed}
            />
            <View style={{ margin: 8, }}> 
              <Text style={styles.namefeed}>Menino Ney</Text>
              <Text style={styles.textFeed}>Formado na USP mestrado em Harvard. Trabalhando na Laboratório Irineu</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.textButton}>Ver mais</Text>
            <Icon name="arrow-right" size={20} color="#FAC900" />
          </TouchableOpacity>
        </View>

        <View style={styles.doctor}>
          <View style={styles.doctorInfo}>
            <Image 
              source={{ uri: 'https://images.daznservices.com/di/library/GOAL/23/bc/neymar-psg-ligue-1_zv7n75ib8ihzjlour392nac.jpg?t=432816832&quality=100'}}
              style={styles.imageFeed}
            />
            <View style={{ margin: 8, }}> 
              <Text style={styles.namefeed}>Menino Ney</Text>
              <Text style={styles.textFeed}>Formado na USP mestrado em Harvard. Trabalhando na Laboratório Irineu</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.textButton}>Ver mais</Text>
            <Icon name="arrow-right" size={20} color="#FAC900" />
          </TouchableOpacity>
        </View>

        <View style={styles.doctor}>
          <View style={styles.doctorInfo}>
            <Image 
              source={{ uri: 'https://images.daznservices.com/di/library/GOAL/23/bc/neymar-psg-ligue-1_zv7n75ib8ihzjlour392nac.jpg?t=432816832&quality=100'}}
              style={styles.imageFeed}
            />
            <View style={{ margin: 8, }}> 
              <Text style={styles.namefeed}>Menino Ney</Text>
              <Text style={styles.textFeed}>Formado na USP mestrado em Harvard. Trabalhando na Laboratório Irineu</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.textButton}>Ver mais</Text>
            <Icon name="arrow-right" size={20} color="#FAC900" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScrollView>
  );
}
