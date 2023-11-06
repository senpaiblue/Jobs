import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import styles from './popularjobs.style';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch'; // Replace with the actual path to your useFetch file

const Popularjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch({
    endpoint: 'search',
    query: {
      query: 'Python developer in Texas, USA',
      page: '1',
      num_pages: '1'
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : error ? (
          <Text>Something went wrong !!</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard item={item} />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
