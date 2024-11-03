import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>这是首页</Text>
      <Button title="去设置页面" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

export default HomeScreen;
