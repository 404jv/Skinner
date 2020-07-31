import React from 'react';
import { 
  View, 
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';


import styles from './styles';

export default function Home() {
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior='padding'
    >
      <View style={styles.header}>
        <Image 
          style={styles.image}
          source={{ uri: 'https://images.daznservices.com/di/library/GOAL/23/bc/neymar-psg-ligue-1_zv7n75ib8ihzjlour392nac.jpg?t=432816832&quality=100' }}        
        />
        
        <TouchableOpacity
          style={styles.buttonCam}
          activeOpacity={0.6}
        >
          <Icon 
            name="camera" 
            size={25} 
            color="#FFF"
            style={{ margin: 5}}
          />
        </TouchableOpacity>
        <Text style={styles.name}>Dr. Luan</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.buttonEdit}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
        <Icon 
          name="edit"
          size={20}
          color="#0D0D0D"
        />
      </TouchableOpacity>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>About</Text>
        <View style={styles.input}>
          <Text style={styles.textInput}>
            Formado na USP mestrado em Harvard. Trabalhando na Laboratório Irineu
          </Text>
        </View>

        <Text style={styles.label}>E-mail</Text>
        <View style={styles.input}>
          <Text style={styles.textInput}>menino7ney@bacelona.com</Text>
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.input}>
          <Text style={styles.textInput}>*******</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
