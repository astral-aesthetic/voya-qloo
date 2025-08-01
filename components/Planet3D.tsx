import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming,
  interpolate
} from 'react-native-reanimated';

interface Planet3DProps {
  size?: number;
  color?: string;
  orbitRadius?: number;
  duration?: number;
}

export function Planet3D({ 
  size = 60, 
  color = '#FFD700', 
  orbitRadius = 100,
  duration = 10000 
}: Planet3DProps) {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration }),
      -1,
      false
    );
  }, [duration]);

  const animatedStyle = useAnimatedStyle(() => {
    const angle = rotation.value * (Math.PI / 180);
    return {
      transform: [
        { translateX: Math.cos(angle) * orbitRadius },
        { translateY: Math.sin(angle) * orbitRadius * 0.3 },
        { scale: interpolate(rotation.value, [0, 180, 360], [1, 0.8, 1]) },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <LinearGradient
        colors={[color, `${color}80`, color]}
        style={[
          styles.planet,
          { 
            width: size, 
            height: size, 
            borderRadius: size / 2 
          }
        ]}
      />
      <View style={[
        styles.highlight,
        { 
          width: size * 0.3, 
          height: size * 0.3,
          borderRadius: size * 0.15,
          top: size * 0.2,
          left: size * 0.2
        }
      ]} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  planet: {
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  highlight: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});