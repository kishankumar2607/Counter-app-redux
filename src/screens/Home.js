import {View, Text} from 'react-native';
import React from 'react';
//
import {Provider, useSelector} from 'react-redux';

export default function Home() {
  const data = useSelector(state => state.user);

  console.log(data);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
