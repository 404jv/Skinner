import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({

  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 8,
  },

  name: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 18,
  },
  
  messages: {
    marginLeft: 16,
    marginRight: 16,
  },

  message: {
    backgroundColor: '#F5F5F5',
    width: '60%',
    marginTop: 14,
    padding: 8,
    borderRadius: 8,
  },

  messageUser: {
    backgroundColor: '#FADA00',
    width: '60%',
    left: '40%',
    marginTop: 14,
    padding: 8,
    borderRadius: 8,
  },

  body: {
    textAlign: 'left',
    color: '#0D0D0D',
    fontSize: 15,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  },

  input: {
    width: '80%',
    textAlign: 'center',
    backgroundColor: '#E0E0E0',
    height: 45,
    borderRadius: 50,
    color: '#0D0D0D',
    marginRight: 8,
    marginBottom: 8
  },
});
