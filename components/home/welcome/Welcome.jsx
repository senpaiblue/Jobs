import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';
import { FONT, icons, SIZES } from '../../../constants';

import styles from './welcome.style';
const jobTypes = ['Full-time', 'Part-Time', 'Contractor']

const Welcome = () => {
  const router = useRouter()
  const [activeJobType, SetActiveJobType] = useState('Full-time')
  return (
    <View>
      <View>
        <Text style={{ fontWeight: '900', fontSize: 20, color: 'Black' }}>Hello Sakcham</Text>
        <Text style={{ fontWeight: '900', fontSize: 24, color: 'gray' }}>Find Your Perfect Job</Text>
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'coloumn',
        width: '100%',
        gap: 20,
        padding:0,
        margin:0,
        alignItems: 'center'
      }}>
        <View style={{
          backgroundColor: '#F3F3F6',
          flex: 1,
          flexDirection: 'row',
          borderRadius: 8,
          marginTop: 20,
          marginRight:60,
          gap:120,
          alignItems:'center',
          justifyContent:"space-between"
        }}>
          <TextInput
            style={{ paddingTop: 5, paddingRight: 10, paddingBottom: 5, paddingLeft: 10 }}
            value=''
            onChange={() => { }}
            placeholder='What are you looking for?'
          />
          <TouchableOpacity style={{ backgroundColor: '#F3F3F6', borderRadius: 8 }} onPress={() => { }}>
            <Image
              style={{ width: 32, height: 32 ,marginRight:10,}}
              source={icons.search}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.tabsContainer}>
          <FlatList
            data={jobTypes}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  SetActiveJobType(item);
                  router.push(`/search/${item}`)

                }}>

                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item=>item}
            contentContainerStyle={{columnGap:SIZES.small}}
            horizontal
          />
        </View>
      </View>
    </View>
  );
}

export default Welcome;
