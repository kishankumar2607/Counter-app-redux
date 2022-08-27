import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';

//
import {useSelector, useDispatch} from 'react-redux';

//
import CounterView from '../componets/CounterView';
import CounterControllers from '../componets/CounterControllers';

export default function CounterScreen({customValueParentState}) {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  console.log(counter);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CounterView counterValue={counter.count} />
      <CounterControllers />
      <TextInput
        value={counter.changeValue}
        style={{borderWidth: 1, width: '80%', marginTop: 30}}
        onChangeText={text => dispatch({type: 'changeValue', payload: text})}
      />
    </View>
  );
}
