import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';

const SkeletonLoader = ({
  numItems = 5,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.skeleton, styles.titleSkeleton]} />
      </View>
      
      {[...Array(numItems)].map((_, index) => (
        <View key={index} style={styles.itemContainer}>
          <View style={[styles.skeleton, styles.itemSkeleton]} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  titleSkeleton: {
    height: 56,
    borderRadius: 4,
  },
  itemContainer: {
    marginBottom: 20,
  },
  itemSkeleton: {
    height: 70,
    borderRadius: 4,
  },
  skeleton: {
    backgroundColor: '#e1e1e1',
    overflow: 'hidden',
    position: 'relative',
  },
});

export default memo(SkeletonLoader);