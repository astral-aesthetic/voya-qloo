import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Plane } from 'lucide-react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming,
  interpolate
} from 'react-native-reanimated';

interface FloatingPlaneProps {
  size?: number;
  color?: string;
}

export function FloatingPlane({ size = 40, color = '#FFD700' }: FloatingPlaneProps) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 8000 }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(progress.value, [0, 0.5, 1], [0, -20, 0]) },
      { rotate: `${interpolate(progress.value, [0, 0.25, 0.75, 1], [0, 5, -5, 0])}deg` },
    ],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.planeContainer}>
        <Plane size={size} color={color} strokeWidth={2} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  planeContainer: {
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
});