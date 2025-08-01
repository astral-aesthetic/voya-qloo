import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming,
  interpolate,
  withSequence
} from 'react-native-reanimated';

interface Airplane3DProps {
  size?: number;
  style?: any;
}

export function Airplane3D({ size = 200, style }: Airplane3DProps) {
  const progress = useSharedValue(0);
  const tilt = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 3000 }),
      -1,
      false
    );
    
    tilt.value = withRepeat(
      withSequence(
        withTiming(5, { duration: 2000 }),
        withTiming(-5, { duration: 2000 })
      ),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(progress.value, [0, 0.5, 1], [0, -10, 0]) },
      { rotateZ: `${tilt.value}deg` },
      { rotateY: '15deg' },
    ],
  }));

  return (
    <Animated.View style={[styles.container, { width: size, height: size * 0.6 }, style, animatedStyle]}>
      {/* Airplane Body */}
      <LinearGradient
        colors={['#E8E8E8', '#FFFFFF', '#D0D0D0']}
        style={styles.fuselage}
      />
      
      {/* Wings */}
      <LinearGradient
        colors={['#F0F0F0', '#E0E0E0']}
        style={styles.wing}
      />
      
      {/* Tail */}
      <LinearGradient
        colors={['#E8E8E8', '#D8D8D8']}
        style={styles.tail}
      />
      
      {/* Engine */}
      <View style={styles.engine} />
      
      {/* Windows */}
      <View style={styles.windowsContainer}>
        {[...Array(8)].map((_, i) => (
          <View key={i} style={styles.window} />
        ))}
      </View>
      
      {/* Airline Logo Area */}
      <View style={styles.logoArea}>
        <LinearGradient
          colors={['#FF6B35', '#FF4500']}
          style={styles.logoStripe}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  fuselage: {
    position: 'absolute',
    width: '100%',
    height: '40%',
    top: '30%',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  wing: {
    position: 'absolute',
    width: '90%',
    height: '25%',
    top: '37.5%',
    left: '5%',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  tail: {
    position: 'absolute',
    width: '15%',
    height: '50%',
    right: '5%',
    top: '15%',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  engine: {
    position: 'absolute',
    width: '12%',
    height: '20%',
    left: '25%',
    top: '55%',
    backgroundColor: '#C0C0C0',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  windowsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    width: '60%',
    left: '15%',
    top: '35%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  window: {
    width: 4,
    height: 6,
    backgroundColor: '#4A90E2',
    borderRadius: 2,
  },
  logoArea: {
    position: 'absolute',
    width: '30%',
    height: '15%',
    right: '25%',
    top: '42.5%',
  },
  logoStripe: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});