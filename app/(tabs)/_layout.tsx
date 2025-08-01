import { Tabs } from 'expo-router';
import { View, StyleSheet, Dimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Compass, Globe, Plane, User } from 'lucide-react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming,
  interpolateColor
} from 'react-native-reanimated';
import { useEffect } from 'react';

const { width } = Dimensions.get('window');

function GlowingBackground() {
  const colorProgress = useSharedValue(0);

  useEffect(() => {
    colorProgress.value = withRepeat(
      withTiming(1, { duration: 8000 }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      colorProgress.value,
      [0, 0.2, 0.4, 0.6, 0.8, 1],
      ['#FFD700', '#FF69B4', '#9370DB', '#4169E1', '#00CED1', '#FFD700']
    );

    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.glowingCircle, animatedStyle]}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.1)', 'transparent']}
        style={StyleSheet.absoluteFill}
      />
    </Animated.View>
  );
}

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <GlowingBackground />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarBackground: () => (
            <BlurView intensity={80} style={StyleSheet.absoluteFill} />
          ),
          tabBarActiveTintColor: '#FFA500',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIconStyle: styles.tabBarIcon,
        }}>
        <Tabs.Screen
          name="bookings"
          options={{
            title: '',
            tabBarIcon: ({ size, color }) => (
              <Plane size={size} color={color} strokeWidth={1} />
            ),
          }}
        />      
        <Tabs.Screen
          name="index"
          options={{
            title: '',
            tabBarIcon: ({ size, color }) => (
              <Compass size={size} color={color} strokeWidth={1} />
            ),
          }}
        />
        <Tabs.Screen
          name="map"
          options={{
            title: '',
            tabBarIcon: ({ size, color }) => (
              <Globe size={size} color={color} strokeWidth={1} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: '',
            tabBarIcon: ({ size, color }) => (
              <User size={size} color={color} strokeWidth={1} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  glowingCircle: {
    position: 'absolute',
    bottom: 30,
    left: width / 2 - 60,
    width: 120,
    height: 120,
    borderRadius: 60,
    opacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 30,
    elevation: 10,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    height: 100,
    paddingBottom: 20,
  },
  tabBarLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    marginTop: 4,
  },
  tabBarIcon: {
    marginTop: 8,
  },
});