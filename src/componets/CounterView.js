import {View, Text} from 'react-native';
import React from 'react';

export default function CounterView({counterValue}) {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>{counterValue}</Text>
    </View>
  );
}
