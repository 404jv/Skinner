import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 8,
    backgroundColor: '#FFF'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 32
  },

  textHeader: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 18,
    lineHeight: 18,
  },

  title: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 18,
    lineHeight: 18,
    marginLeft: 18,
    marginBottom: 8
  },

  liveGroup: {
    marginLeft: 16,
    marginBottom: 16
  },

  doctorImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1.5,
    borderColor: '#FAC900',
  },

  doctorName: {
    zIndex: 10,
    fontFamily: 'Ubuntu_400Regular',
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: '#FAC900',
    borderRadius: 10,
    textAlign: 'center',
    bottom: 15,
    color: '#F5F5F5'
  },

  live: {
    marginLeft: 8,
  },

  doctor: {
    width: '95%',
    height: 140,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 8,
    justifyContent: 'space-between',
    marginBottom: 16,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
  },

  doctorInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  imageFeed: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 8
  },

  namefeed: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 20,
    marginBottom: 4
  },

  textFeed: {
    fontFamily: 'Ubuntu_400Regular',
    color: '#444344',
    fontSize: 16,
    width: '37%'
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  textButton: {
    fontFamily: 'Ubuntu_400Regular',
  },
});
