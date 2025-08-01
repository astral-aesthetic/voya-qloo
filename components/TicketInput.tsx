import React from 'react';
import { View, TextInput, Text, StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface TicketInputProps {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  style?: ViewStyle;
  editable?: boolean;
}

export function TicketInput({
  label,
  value,
  onChangeText,
  placeholder,
  icon,
  style,
  editable = true
}: TicketInputProps) {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)']}
        style={StyleSheet.absoluteFill}
      />
      
      {/* Ticket perforations */}
      <View style={styles.leftPerforation} />
      <View style={styles.rightPerforation} />
      
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputRow}>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            editable={editable}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    position: 'relative',
    overflow: 'hidden',
  },
  leftPerforation: {
    position: 'absolute',
    left: -8,
    top: '50%',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(15, 12, 41, 0.9)',
    transform: [{ translateY: -8 }],
    zIndex: 2,
  },
  rightPerforation: {
    position: 'absolute',
    right: -8,
    top: '50%',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(15, 12, 41, 0.9)',
    transform: [{ translateY: -8 }],
    zIndex: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 2,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
});