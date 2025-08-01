import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Image,
  Switch
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  User, 
  Calendar, 
  MapPin, 
  Clock, 
  Star,
  Heart,
  Plane,
  Settings,
  Bell,
  Moon
} from 'lucide-react-native';
import { CosmicBackground } from '@/components/CosmicBackground';
import { GlassmorphismCard } from '@/components/GlassmorphismCard';
import { TicketInput } from '@/components/TicketInput';

export default function ProfileScreen() {
  const [preferences, setPreferences] = useState(true);
  const [african, setAfrican] = useState(true);
  const [asian, setAsian] = useState(true);
  const [australian, setAustralian] = useState(true);
  const [european, setEuropean] = useState(true);
  const [middleeast, setMiddle] = useState(true);
  const [northamerican, setNorth] = useState(true);
  const [southamerican, setSouthamerican] = useState(true);
  const [southasian, setSouthasian] = useState(true);

  const savedDestinations = [
    { 
      id: 1, 
      name: 'Bali, Indonesia', 
      influence: 'Charisma', 
      savedDate: '2 weeks ago',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg'
    },
    { 
      id: 2, 
      name: 'Santorini, Greece', 
      influence: 'Charisma & Escapism', 
      savedDate: '1 month ago',
      image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg'
    },
  ];

  const bookingHistory = [
    { 
      id: 1, 
      destination: 'Tulum, Mexico', 
      date: 'Nov 2024',
      status: 'Completed', 
      price: '$599',
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg'
    },
    { 
      id: 2, 
      destination: 'Bali, Indonesia', 
      date: 'Aug 2024', 
      status: 'Completed', 
      price: '$899',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg'
    },
  ];

  return (
    <View style={styles.container}>
      <CosmicBackground />
      
      <SafeAreaView style={styles.safeArea}>
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Profile Header */}
          <View style={styles.profileHeader}>
            <GlassmorphismCard style={styles.profileCard}>
              <View style={styles.profileContent}>
                <Image 
                  source={{ uri: 'https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg' }}
                  style={styles.profileImage}
                />
                <Text style={styles.profileName}>Joseph</Text>
                <Text style={styles.profileSubtitle}>Sight Seer</Text>
                
                <View style={styles.statsRow}>
                  <View style={styles.stat}>
                    <Text style={styles.statNumber}>12</Text>
                    <Text style={styles.statLabel}>Destinations</Text>
                  </View>
                  <View style={styles.stat}>
                    <Text style={styles.statNumber}>4</Text>
                    <Text style={styles.statLabel}>Trips</Text>
                  </View>
                  <View style={styles.stat}>
                    <Text style={styles.statNumber}>4.8</Text>
                    <Text style={styles.statLabel}>Rating</Text>
                  </View>
                </View>
              </View>
            </GlassmorphismCard>
          </View>

          {/* Birth Data Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Birth Data</Text>
            <GlassmorphismCard variant="ticket" style={styles.birthDataCard}>
              <View style={styles.birthDataContent}>
                <TicketInput
                  label="Birth Date"
                  value="March 15, 1990"
                  icon={<Calendar size={16} color="rgba(255, 255, 255, 0.7)" />}
                  style={styles.inputSpacing}
                  editable={false}
                />
                
                <TicketInput
                  label="Birth Time"
                  value="2:30 PM"
                  icon={<Clock size={16} color="rgba(255, 255, 255, 0.7)" />}
                  style={styles.inputSpacing}
                  editable={false}
                />
                
                <TicketInput
                  label="Birth Place"
                  value="Miami, FL"
                  icon={<MapPin size={16} color="rgba(255, 255, 255, 0.7)" />}
                  editable={false}
                />
              </View>
            </GlassmorphismCard>
          </View>

          {/* Saved Destinations */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Saved Destinations</Text>
            {savedDestinations.map((dest) => (
              <TouchableOpacity key={dest.id} style={styles.destinationCard}>
                <GlassmorphismCard variant="subtle">
                  <View style={styles.destinationContent}>
                    <Image source={{ uri: dest.image }} style={styles.destinationImage} />
                    <LinearGradient
                      colors={['transparent', 'rgba(0, 0, 0, 0.7)']}
                      style={styles.destinationOverlay}
                    />
                    <View style={styles.destinationInfo}>
                      <Heart size={16} color="#FFD700" fill="#FFD700" />
                      <View style={styles.destinationText}>
                        <Text style={styles.destinationName}>{dest.name}</Text>
                        <Text style={styles.destinationInfluence}>{dest.influence} Line</Text>
                      </View>
                      <Text style={styles.savedDate}>{dest.savedDate}</Text>
                    </View>
                  </View>
                </GlassmorphismCard>
              </TouchableOpacity>
            ))}
          </View>

          {/* Booking History */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Trips</Text>
            {bookingHistory.map((booking) => (
              <TouchableOpacity key={booking.id} style={styles.bookingCard}>
                <GlassmorphismCard variant="subtle">
                  <View style={styles.bookingContent}>
                    <Image source={{ uri: booking.image }} style={styles.bookingImage} />
                    <LinearGradient
                      colors={['transparent', 'rgba(0, 0, 0, 0.7)']}
                      style={styles.bookingOverlay}
                    />
                    <View style={styles.bookingInfo}>
                      <Plane size={16} color="#FFD700" />
                      <View style={styles.bookingText}>
                        <Text style={styles.bookingDestination}>{booking.destination}</Text>
                        <Text style={styles.bookingDate}>{booking.date}</Text>
                      </View>
                      <View style={styles.bookingDetails}>
                        <Text style={styles.bookingPrice}>{booking.price}</Text>
                        <Text style={styles.bookingStatus}>{booking.status}</Text>
                      </View>
                    </View>
                  </View>
                </GlassmorphismCard>
              </TouchableOpacity>
            ))}
          </View>

          {/* Settings */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cultural Preferences</Text>
            <GlassmorphismCard style={styles.settingsCard}>
              <View style={styles.settingsContent}>
                <View style={styles.settingItem}>
                  <View style={styles.settingLeft}>
                    <Bell size={20} color="rgba(255, 255, 255, 0.5)" />
                    <Text style={styles.settingLabel}>ON</Text>
                  </View>
                  <Switch 
                    value={preferences} 
                    onValueChange={setPreferences}
                    trackColor={{false: 'rgba(255, 255, 255, 0.2)', true: '#FFD700'}}
                    thumbColor={preferences ? '#1A0B2E' : '#f4f3f4'}
                  />
                </View>

                <View style={styles.settingItem}>
                  <View style={styles.settingLeft}>
                    <Text style={styles.settingLabel}>African</Text>
                  </View>
                  <Switch 
                    value={african} 
                    onValueChange={setAfrican}
                    trackColor={{false: 'rgba(255, 255, 255, 0.2)', true: '#FFD700'}}
                    thumbColor={african ? '#1A0B2E' : '#f4f3f4'}
                  />
                </View>

                  <View style={styles.settingItem}>
                  <View style={styles.settingLeft}>
                    <Text style={styles.settingLabel}>Asian</Text>
                  </View>
                  <Switch 
                    value={asian} 
                    onValueChange={setAsian}
                    trackColor={{false: 'rgba(255, 255, 255, 0.2)', true: '#FFD700'}}
                    thumbColor={asian ? '#1A0B2E' : '#f4f3f4'}
                  />
                </View>

                  <View style={styles.settingItem}>
                  <View style={styles.settingLeft}>
                    <Text style={styles.settingLabel}>Australian</Text>
                  </View>
                  <Switch 
                    value={australian} 
                    onValueChange={setAustralian}
                    trackColor={{false: 'rgba(255, 255, 255, 0.2)', true: '#FFD700'}}
                    thumbColor={australian ? '#1A0B2E' : '#f4f3f4'}
                  />
                </View>

                  <View style={styles.settingItem}>
                  <View style={styles.settingLeft}>
                    <Text style={styles.settingLabel}>European</Text>
                  </View>
                  <Switch 
                    value={european} 
                    onValueChange={setEuropean}
                    trackColor={{false: 'rgba(255, 255, 255, 0.2)', true: '#FFD700'}}
                    thumbColor={european ? '#1A0B2E' : '#f4f3f4'}
                  />
                </View>

                  <View style={styles.settingItem}>
                  <View style={styles.settingLeft}>
                    <Text style={styles.settingLabel}>Middle Eastern</Text>
                  </View>
                  <Switch 
                    value={middleeast} 
                    onValueChange={setMiddle}
                    trackColor={{false: 'rgba(255, 255, 255, 0.2)', true: '#FFD700'}}
                    thumbColor={middleeast ? '#1A0B2E' : '#f4f3f4'}
                  />
                </View>

                  <View style={styles.settingItem}>
                  <View style={styles.settingLeft}>
                    <Text style={styles.settingLabel}>North American</Text>
                  </View>
                  <Switch 
                    value={northamerican} 
                    onValueChange={setNorth}
                    trackColor={{false: 'rgba(255, 255, 255, 0.2)', true: '#FFD700'}}
                    thumbColor={northamerican ? '#1A0B2E' : '#f4f3f4'}
                  />
                </View>

                  <View style={styles.settingItem}>
                  <View style={styles.settingLeft}>
                    <Text style={styles.settingLabel}>South American</Text>
                  </View>
                  <Switch 
                    value={southamerican} 
                    onValueChange={setSouthamerican}
                    trackColor={{false: 'rgba(255, 255, 255, 0.2)', true: '#FFD700'}}
                    thumbColor={southamerican ? '#1A0B2E' : '#f4f3f4'}
                  />
                </View>

                  <View style={styles.settingItem}>
                  <View style={styles.settingLeft}>
                    <Text style={styles.settingLabel}>South Asian</Text>
                  </View>
                  <Switch 
                    value={southasian} 
                    onValueChange={setSouthasian}
                    trackColor={{false: 'rgba(255, 255, 255, 0.2)', true: '#FFD700'}}
                    thumbColor={southasian ? '#1A0B2E' : '#f4f3f4'}
                  />
                </View>

                <TouchableOpacity style={styles.settingItem}>
                  <View style={styles.settingLeft}>
                    <Settings size={20} color="rgba(255, 255, 255, 0.7)" />
                    <Text style={styles.settingLabel}>Account Settings</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </GlassmorphismCard>
          </View>
        </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  profileHeader: {
    paddingHorizontal: 24,
    paddingTop: 20,
    marginBottom: 32,
  },
  profileCard: {
    padding: 24,
  },
  profileContent: {
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  profileName: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  profileSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#FFD700',
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  birthDataCard: {
    padding: 20,
  },
  birthDataContent: {
    gap: 16,
  },
  inputSpacing: {
    marginBottom: 0,
  },
  destinationCard: {
    marginBottom: 12,
  },
  destinationContent: {
    height: 80,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  destinationImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  destinationOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
  },
  destinationInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  destinationText: {
    flex: 1,
  },
  destinationName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  destinationInfluence: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#FFD700',
  },
  savedDate: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  bookingCard: {
    marginBottom: 12,
  },
  bookingContent: {
    height: 80,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  bookingImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  bookingOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
  },
  bookingInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  bookingText: {
    flex: 1,
  },
  bookingDestination: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  bookingDate: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  bookingDetails: {
    alignItems: 'flex-end',
  },
  bookingPrice: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#FFD700',
  },
  bookingStatus: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#4CAF50',
  },
  settingsCard: {
    padding: 20,
  },
  settingsContent: {
    gap: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingLabel: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF',
  },
});