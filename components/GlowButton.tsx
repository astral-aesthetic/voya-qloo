import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GlowButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function GlowButton({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
  textStyle
}: GlowButtonProps) {
  const getGradientColors = () => {
    switch (variant) {
      case 'secondary':
        return ['#3D2A7F', '#5B4B9D'];
      case 'outline':
        return ['transparent', 'transparent'];
      default:
        return ['#FFD700', '#FFA500'];
    }
  };

  const getButtonStyle = () => {
    const baseStyle = [styles.button, styles[size]];
    if (variant === 'outline') {
      baseStyle.push(styles.outline);
    }
    if (disabled) {
      baseStyle.push(styles.disabled);
    }
    return baseStyle;
  };

  const getTextColor = () => {
    if (variant === 'outline') return '#FFD700';
    return variant === 'primary' ? '#1A0B2E' : '#FFFFFF';
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[style]}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={getGradientColors()}
        style={getButtonStyle()}
      >
        <Text style={[
          styles.text,
          styles[`${size}Text`],
          { color: getTextColor() },
          textStyle
        ]}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  small: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  medium: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  large: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  outline: {
    borderWidth: 2,
    borderColor: '#FFD700',
    shadowOpacity: 0.2,
  },
  disabled: {
    opacity: 0.5,
    shadowOpacity: 0,
  },
  text: {
    fontFamily: 'Inter-SemiBold',
    textAlign: 'center',
  },
  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },
});