import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming,
  interpolate
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

interface CosmicBackgroundProps {
  variant?: 'default' | 'sunset' | 'deep';
}

export function CosmicBackground({ variant = 'default' }: CosmicBackgroundProps) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 20000 }),
      -1,
      false
    );
  }, []);

  const star1Style = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(progress.value, [0, 1], [0, width * 0.3]) },
      { translateY: interpolate(progress.value, [0, 1], [0, height * 0.2]) },
    ],
    opacity: interpolate(progress.value, [0, 0.5, 1], [0.3, 1, 0.3]),
  }));

  const star2Style = useAnimatedStyle(() => ({
    transform: [
      { translateX: interpolate(progress.value, [0, 1], [width, width * 0.2]) },
      { translateY: interpolate(progress.value, [0, 1], [height * 0.8, height * 0.1]) },
    ],
    opacity: interpolate(progress.value, [0, 0.3, 0.7, 1], [0.5, 0.2, 0.8, 0.5]),
  }));

  const getGradientColors = () => {
    switch (variant) {
      case 'sunset':
        return ['#1A0B2E', '#24115C', '#FF6B35', '#FFD700'];
      case 'deep':
        return ['#0F0C29', '#1A0B2E', '#24115C'];
      default:
        return ['#0F0C29', '#1A0B2E', '#24115C', '#3D2A7F'];
    }
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <LinearGradient
        colors={getGradientColors()}
        style={StyleSheet.absoluteFill}
      />
      
      {/* Animated Stars */}
      <Animated.View style={[styles.star, star1Style]} />
      <Animated.View style={[styles.star, star2Style]} />
      
      {/* Static Stars */}
      <View style={[styles.staticStar, { top: height * 0.1, left: width * 0.8 }]} />
      <View style={[styles.staticStar, { top: height * 0.3, left: width * 0.15 }]} />
      <View style={[styles.staticStar, { top: height * 0.6, left: width * 0.9 }]} />
      <View style={[styles.staticStar, { top: height * 0.8, left: width * 0.3 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  star: {
    position: 'absolute',
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  staticStar: {
    position: 'absolute',
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: 'rgba(255, 215, 0, 0.6)',
  },
});