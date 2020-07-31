import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();

  const message = `Hello ${'dr. Luan'}, I'm contacting you because I want to make an appointment about...`;

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Conversation with ${'Paciente'}`,
      recipients: ['joaovictorramalho7@gmail.com'],
      body: message,
    });
  }

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  function handleNavigateToChat() {
    navigation.navigate('Chats', { 
      image_url: 'https://img.freepik.com/fotos-gratis/jovem-mulher-doutora-na-mesa_23-2147767624.jpg?size=626&ext=jpg',
      name: 'Dr. Luan'
    });
  }

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        onPress={handleNavigationGoBack}
        activeOpacity={0.6}
      >
        <Icon 
          name="arrow-left"
          size={25}
          color='#FAC900'
          style={{ margin: 8 }}
        />
      </TouchableOpacity>
      <View style={styles.header}>

        <Image 
          style={styles.image}
          source={{ uri: 'https://img.freepik.com/fotos-gratis/jovem-mulher-doutora-na-mesa_23-2147767624.jpg?size=626&ext=jpg' }}        
        />
        
        <Text style={styles.name}>Dr. Jhennifer</Text>
      </View>

      <View style={styles.doctorInfo}>
        <Text style={styles.label}>About</Text>
        <View style={styles.about}>
          <Text style={styles.aboutText}>I'm Jhennifer, a psychologist and volunteer for the Skinner program. Graduated from USP São Paulo Brazil. Count on me for whatever you need, here we are friends.</Text>
        </View>

        <Text style={styles.label}>E-mail</Text>
        <View style={styles.about}>
          <Text style={[styles.aboutText, { fontSize: 18 }]}>doctor@gmail.com</Text>
        </View>

        <Text style={[styles.label, { textAlign: 'center', marginTop: 32 }]}>
          Let's talk?
        </Text>
        <View style={styles.iconsGroup}>
          <TouchableOpacity
            onPress={sendEmail}
            activeOpacity={0.6}
          >
            <Icon 
              name="mail"
              size={25}
              color="#FF0000"
              style={{ marginRight: 21 }}
            />
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={handleNavigateToChat}
            activeOpacity={0.6}
          >
            <Icon
              name="send" 
              size={25} 
              color="#FAC900" 
            />
          </TouchableOpacity>

        </View>
      </View>


    </View>
  );
}