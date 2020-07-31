import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 8,
    backgroundColor: '#FFF',

  },

  header: {
    alignItems: 'center'
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    margin: 4
  },

  name: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 20,
    color: '#898988'
  },

  doctorInfo: {
    margin: 8
  },

  label: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 20,
    margin: 8,
    color: '#0D0D0D'
  },

  about:{
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    justifyContent: 'center',
    padding: 8,
    marginBottom: 8,
  },

  aboutText: {
    textAlign: 'left',
    fontFamily: 'Roboto_400Regular',
    fontSize: 15,
  },

  iconsGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

});
