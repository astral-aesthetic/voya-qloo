import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Mail, Lock, Eye, EyeOff, Star, Sparkles } from 'lucide-react-native';
import { CosmicBackground } from '@/components/CosmicBackground';
import { Planet3D } from '@/components/Planet3D';
import { GlowButton } from '@/components/GlowButton';
import { router } from 'expo-router';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleAuth = () => {
    // Mock authentication - in real app, integrate with Supabase
    router.replace('/(tabs)');
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <CosmicBackground variant="deep" />
      
      {/* Floating 3D Elements */}
      <Planet3D size={10} color="#FFD700" orbitRadius={100} duration={20000} />
      <Planet3D size={25} color="#FF69B4" orbitRadius={140} duration={25000} />
      <Planet3D size={30} color="#9370DB" orbitRadius={180} duration={30000} />

      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView 
          style={styles.keyboardView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Star size={40} color="#FFD700" fill="#FFD700" />
              <Sparkles size={24} color="#FFD700" style={styles.sparkle} />
            </View>
            <Text style={styles.title}>Voya</Text>
            <Text style={styles.subtitle}>Your cosmic travel companion</Text>
          </View>

          {/* Auth Form */}
          <View style={styles.formContainer}>
            <LinearGradient
              colors={['rgba(61, 42, 127, 0.8)', 'rgba(26, 11, 46, 0.9)']}
              style={styles.formGradient}
            >
              <Text style={styles.formTitle}>
                {isLogin ? 'Welcome Back' : 'Get in Alignment'}
              </Text>
              <Text style={styles.formSubtitle}>
                {isLogin 
                  ? 'Continue your journey' 
                  : 'Discover life line destinations'
                }
              </Text>

              {/* Email Input */}
              <View style={styles.inputContainer}>
                <Mail size={20} color="#FFD700" />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#B8A9C9"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* Password Input */}
              <View style={styles.inputContainer}>
                <Lock size={20} color="#FFD700" />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#B8A9C9"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeOff size={20} color="#B8A9C9" />
                  ) : (
                    <Eye size={20} color="#B8A9C9" />
                  )}
                </TouchableOpacity>
              </View>

              {/* Forgot Password (Login only) */}
              {isLogin && (
                <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
              )}

              {/* Auth Button */}
              <GlowButton
                title={isLogin ? 'Login' : 'Create Account'}
                onPress={handleAuth}
                size="large"
                style={styles.authButton}
              />

              {/* Divider */}
              <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>or</Text>
                <View style={styles.dividerLine} />
              </View>

              {/* Social Login */}
              <GlowButton
                title="Continue with Google"
                onPress={() => {}}
                variant="outline"
                size="large"
                style={styles.socialButton}
              />

              {/* Toggle Auth Mode */}
              <View style={styles.toggleContainer}>
                <Text style={styles.toggleText}>
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                </Text>
                <TouchableOpacity onPress={toggleAuthMode}>
                  <Text style={styles.toggleLink}>
                    {isLogin ? 'Sign Up' : 'Login'}
                  </Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>

          {/* Guest Mode */}
          <TouchableOpacity style={styles.guestMode} onPress={handleAuth}>
            <Text style={styles.guestModeText}>Continue as Guest</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  sparkle: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
  title: {
    fontSize: 36,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#B8A9C9',
    textAlign: 'center',
  },
  formContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  formGradient: {
    padding: 24,
  },
  formTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#B8A9C9',
    textAlign: 'center',
    marginBottom: 32,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    gap: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#FFD700',
  },
  authButton: {
    width: '100%',
    marginBottom: 24,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(184, 169, 201, 0.3)',
  },
  dividerText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#B8A9C9',
    marginHorizontal: 16,
  },
  socialButton: {
    width: '100%',
    marginBottom: 24,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#B8A9C9',
  },
  toggleLink: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#FFD700',
  },
  guestMode: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  guestModeText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#B8A9C9',
    textDecorationLine: 'underline',
  },
});