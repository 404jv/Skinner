import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 8,
    backgroundColor: '#FFF'
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    height: 55,
    borderRadius: 50,
    marginLeft: 20,
    marginRight: 20,
  },

  icon: {
    margin: 5,
    marginLeft: 16,
    width: 25,
    alignItems: 'center'
  },

  input: {
    flex: 1,
    height: 55,
    fontFamily: 'Ubuntu_400Regular',
    fontSize: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
  },

  contacts: {
    marginTop: 32,
  },


  contact: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    marginBottom: 15,
  },

  contactInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 8
  },

  name: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 18,
  },

  message: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 19,
    color: '#B2B2B2',
    textAlign: 'center'
  },

  time: {
    fontFamily: 'Roboto_400Regular',
    color: '#B2B2B2',
    fontSize: 14,
  },

  totMessage: {
    textAlign: 'center',
    backgroundColor: '#FAC900',
    borderRadius: 30,
    marginTop: 6,
    color: '#FFF'
  },
});
