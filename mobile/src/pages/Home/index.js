import React, { useState, useEffect } from 'react';
import { View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { AppLoading } from 'expo'
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_700Bold,
  Ubuntu_500Medium
} from '@expo-google-fonts/ubuntu';
import {
  Roboto_400Regular
} from '@expo-google-fonts/roboto';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

import Header from '../../components/Header';

export default function Home() {

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_700Bold,
    Ubuntu_500Medium,
    Roboto_400Regular
  });

  function handleNavigateToDetail() {
    navigation.navigate('Detail');
  }

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <Header />
      
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
        style={{ marginBottom: 64 }}
        contentContainerStyle={{ 
          alignItems: 'center',
        }}
      > 
        <View style={styles.doctor}>
          <View style={styles.doctorInfo}>
            <Image 
              source={{ uri: 'https://img.freepik.com/fotos-gratis/jovem-mulher-doutora-na-mesa_23-2147767624.jpg?size=626&ext=jpg'}}
              style={styles.imageFeed}
            />
            <View style={{ margin: 8, }}> 
              <Text style={styles.namefeed}>Dr. Jhennifer</Text>
              <Text style={styles.textFeed}>I'm Jhennifer, a psychologist and volunteer for the Skinner program. Graduated from...</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleNavigateToDetail}
          >
            <Text style={styles.textButton}>More</Text>
            <Icon name="arrow-right" size={20} color="#FAC900" />
          </TouchableOpacity>
        </View>

        <View style={styles.doctor}>
          <View style={styles.doctorInfo}>
            <Image 
              source={{ uri: 'https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/c9b144/c9b144513ebe41a9f1985a9ff2097a96_large.jpg'}}
              style={styles.imageFeed}
            />
            <View style={{ margin: 8, }}> 
              <Text style={styles.namefeed}>Mary</Text>
              <Text style={styles.textFeed}>I love to talk and help people, I like my focus on people of the best age, call me and we can...</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleNavigateToDetail}
          >
            <Text style={styles.textButton}>More</Text>
            <Icon name="arrow-right" size={20} color="#FAC900" />
          </TouchableOpacity>
        </View>

        <View style={styles.doctor}>
          <View style={styles.doctorInfo}>
            <Image 
              source={{ uri: 'data:image/jpeg;base64,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'}}
              style={styles.imageFeed}
            />
            <View style={{ margin: 8, }}> 
              <Text style={styles.namefeed}>Dr. Jhennifer</Text>
              <Text style={styles.textFeed}>Hello, my name is José. If you need help, I am the right person for you. I have great...</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleNavigateToDetail}
          >
            <Text style={styles.textButton}>More</Text>
            <Icon name="arrow-right" size={20} color="#FAC900" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScrollView>
  );
}
