import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: Constants.statusBarHeight + 8,
    alignItems: 'center'
  },

  header: {
    alignItems: 'center'
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  buttonCam: {
    width: 35,
    height: 35,
    backgroundColor: '#FADA00',
    bottom: 30,
    left: 40,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    bottom: 20,
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 20,
    color: '#898988'
  },

  buttonEdit: {
    width: '90%',
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 12,
    backgroundColor: '#F5F5F5',

  },

  buttonText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 15,
    marginRight: 8,
    color: '#0D0D0D',
  },

  inputGroup: {
    width: '90%'
  },

  label: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 20,
    margin: 8,
    color: '#0D0D0D'
  },

  input:{
    height: 55,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: 16,
    padding: 8
  },

  textInput: {
    textAlign: 'left',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16
  },

});
