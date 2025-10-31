import { StyleSheet, Text, View } from 'react-native'
import StackNavigation from './StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';

const App = () => {
  return (
    <View  style={{flex : 1 }}>
      <NavigationContainer>
      <TabNavigation />
      </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})