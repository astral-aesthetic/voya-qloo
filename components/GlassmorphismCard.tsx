import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'ticket' | 'subtle';
}

export function GlassmorphismCard({ 
  children, 
  style, 
  variant = 'default' 
}: GlassmorphismCardProps) {
  const getCardStyle = () => {
    switch (variant) {
      case 'ticket':
        return styles.ticketCard;
      case 'subtle':
        return styles.subtleCard;
      default:
        return styles.defaultCard;
    }
  };

  return (
    <View style={[getCardStyle(), style]}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.05)']}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultCard: {
    borderRadius: 20,
    borderWidth: 0,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  ticketCard: {
    borderRadius: 16,
    borderWidth: 0,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    position: 'relative',
  },
  subtleCard: {
    borderRadius: 12,
    borderWidth: 0,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  content: {
    flex: 1,
    zIndex: 1,
  },
});