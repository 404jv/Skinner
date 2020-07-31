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

export default function Profile() {
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior='padding'
    >
      <View style={styles.header}>
        <Image 
          style={styles.image}
          source={{ uri: 'https://avatars1.githubusercontent.com/u/53544964?s=460&u=ebc4863261df782f22600061af32477136e3b39a&v=4' }}        
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
        <Text style={styles.name}>João Victor</Text>
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
            I'm from Brazil, love games, run, movies, series, program on JS and 🐶 is better than 🐱!.
          </Text>
        </View>

        <Text style={styles.label}>E-mail</Text>
        <View style={styles.input}>
          <Text style={styles.textInput}>joaovictorramalho7@gmail.com</Text>
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.input}>
          <Text style={styles.textInput}>*******</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
