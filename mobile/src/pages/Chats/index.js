import React, { useState, useEffect } from 'react';
import { 
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
 
import styles from './styles';

export default function Chats() {
  const [contact, setContact] = useState({});
  const [messages, setMessages] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();
  const params = route.params;

  useEffect(() => {
    setContact(params);

    setMessages([
      {
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.In vehicula dui ac auctor scelerisque.",
        user: false
      },
      {
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.In vehicula dui ac auctor scelerisque.",
        user: true
      },
      {
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.In vehicula dui ac auctor scelerisque.",
        user: false
      },
      {
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.In vehicula dui ac auctor scelerisque.",
        user: true
      },
      {
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.In vehicula dui ac auctor scelerisque.",
        user: false
      },
      {
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.In vehicula dui ac auctor scelerisque.",
        user: true
      },
      {
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.In vehicula dui ac auctor scelerisque.",
        user: true
      },
    ]);
  }, []);

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
    >
      <View style={styles.contactInfo}>
       
       <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        
        <TouchableOpacity
          onPress={handleNavigationGoBack}
          activeOpacity={0.6}
        >
          <Icon 
            name="arrow-left" 
            size={25} 
            color="#FAC900"
            style={{ marginLeft: 8 }}
          />
        </TouchableOpacity>
        
        <Image 
          style={styles.image}
          source={{ uri: contact.image_url }}
        />

          <Text style={styles.name}>{contact.name}</Text>
       </View>

        <Icon 
          name="video" 
          size={25} 
          color="#FAC900"
          style={{ marginRight: 12 }}
        />
      </View>
    
      <ScrollView 
        style={styles.messages}
        showsVerticalScrollIndicator={false}
      >
          {messages.map(message => (
            <View
              style={[
                message.user ? styles.messageUser : styles.message
              ]}
            >
              <Text style={styles.body}>{message.body}</Text>
            </View>
          ))}
      </ScrollView>
      <View
          style={styles.inputContainer}
        >
          <TextInput 
            placeholder="Write here!"
            placeholderTextColor="#B2B2B2"
            style={styles.input}
          />

          <Icon name="send" size={25} color="#FAC900" />
      </View>
    </KeyboardAvoidingView>
  );
}