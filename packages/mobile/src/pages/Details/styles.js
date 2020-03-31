import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  incident: {
    padding: 24,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 30,
  },

  incidentProperty: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#41414D',
    marginTop: 24,
  },

  incidentValue: {
    fontSize: 15,
    color: '#737380',
    marginTop: 8,
  },

  contactBox: {
    padding: 24,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 16,
  },

  heroTitle: {
    color: '#13131A',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
  },

  heroDescription: {
    color: '#737380',
    fontSize: 15,
    marginTop: 16,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  action: {
    backgroundColor: '#E02041',
    borderRadius: 8,
    width: '48%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
