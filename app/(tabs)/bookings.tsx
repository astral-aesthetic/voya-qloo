import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Image,
  Dimensions 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MapPin, ArrowUpDown, Calendar, Users, Search, Plane, Clock, Star, ArrowRight } from 'lucide-react-native';
import { CosmicBackground } from '@/components/CosmicBackground';
import { GlassmorphismCard } from '@/components/GlassmorphismCard';
import { TicketInput } from '@/components/TicketInput';

const { width } = Dimensions.get('window');

export default function BookingsScreen() {
  const [origin, setOrigin] = useState('Miami');
  const [destination, setDestination] = useState('Anywhere');

  const flightDeals = [
    {
      id: 1,
      from: 'Miami',
      to: 'Bali',
      price: 899,
      duration: '18h 30m',
      stops: 1,
      airline: 'Singapore Airlines',
      cosmicRating: 4.8,
      influence: 'Venus',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg'
    },
    {
      id: 2,
      from: 'Miami',
      to: 'Santorini',
      price: 1299,
      duration: '16h 45m',
      stops: 1,
      airline: 'Emirates',
      cosmicRating: 4.9,
      influence: 'Venus & Neptune',
      image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg'
    },
    {
      id: 3,
      from: 'Miami',
      to: 'Kyoto',
      price: 1599,
      duration: '12h 20m',
      stops: 0,
      airline: 'British Airways',
      cosmicRating: 4.7,
      influence: 'Saturn',
      image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg'
    }
  ];

  return (
    <View style={styles.container}>
      <CosmicBackground variant="deep" />
      
      <SafeAreaView style={styles.safeArea}>
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Personalized Header */}
          <View style={styles.header}>
            <View style={styles.userInfo}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg' }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.greeting}>Good Evening,</Text>
                <Text style={styles.userName}>Joseph</Text>
              </View>
            </View>
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </View>

          {/* Flight Search Form */}
          <GlassmorphismCard variant="ticket" style={styles.searchCard}>
            <View style={styles.searchContent}>
              <TicketInput
                label="From"
                value={origin}
                onChangeText={setOrigin}
                icon={<MapPin size={16} color="rgba(255, 255, 255, 0.7)" />}
              />
              
              <TicketInput
                label="To"
                value={destination}
                onChangeText={setDestination}
                placeholder="Destination"
                icon={<MapPin size={16} color="rgba(255, 255, 255, 0.7)" />}
                style={styles.inputSpacing}
              />
              
              <View style={styles.datePassengerRow}>
                <TicketInput
                  label="Departure"
                  value="Dec 15"
                  icon={<Calendar size={16} color="rgba(255, 255, 255, 0.7)" />}
                  style={styles.halfInput}
                  editable={false}
                />
                <TicketInput
                  label="Passengers"
                  value="1 Adult"
                  icon={<Users size={16} color="rgba(255, 255, 255, 0.7)" />}
                  style={styles.halfInput}
                  editable={false}
                />
              </View>
              
              <TouchableOpacity style={styles.searchButton}>
                <LinearGradient
                  colors={['#FFD700', '#FFA500']}
                  style={styles.searchButtonGradient}
                >
                  <Search size={20} color="#1A0B2E" />
                  <Text style={styles.searchButtonText}>Search Flights</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </GlassmorphismCard>

          {/* Flight Deals */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Best Deals</Text>
            {flightDeals.map((flight) => (
              <TouchableOpacity key={flight.id} style={styles.flightCard}>
                <GlassmorphismCard>
                  <View style={styles.flightContent}>
                    <Image source={{ uri: flight.image }} style={styles.flightImage} />
                    <LinearGradient
                      colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
                      style={styles.flightOverlay}
                    />
                    
                    <View style={styles.flightInfo}>
                      <View style={styles.flightHeader}>
                        <View style={styles.routeContainer}>
                          <Text style={styles.cityName}>{flight.from}</Text>
                          <ArrowRight size={16} color="#FFD700" />
                          <Text style={styles.cityName}>{flight.to}</Text>
                        </View>
                        <View style={styles.priceContainer}>
                          <Text style={styles.price}>${flight.price}</Text>
                        </View>
                      </View>

                      <View style={styles.flightDetails}>
                        <View style={styles.detailItem}>
                          <Clock size={14} color="rgba(255, 255, 255, 0.7)" />
                          <Text style={styles.detailText}>{flight.duration}</Text>
                        </View>
                        <View style={styles.detailItem}>
                          <Plane size={14} color="rgba(255, 255, 255, 0.7)" />
                          <Text style={styles.detailText}>{flight.stops} stop(s)</Text>
                        </View>
                        <View style={styles.detailItem}>
                          <Star size={14} color="#FFD700" fill="#FFD700" />
                          <Text style={styles.detailText}>{flight.cosmicRating}</Text>
                        </View>
                      </View>

                      <View style={styles.flightFooter}>
                        <Text style={styles.airline}>{flight.airline}</Text>
                        <View style={styles.influenceTag}>
                          <Text style={styles.influenceTagText}>{flight.influence}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </GlassmorphismCard>
              </TouchableOpacity>
            ))}
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
   header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  greeting: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  userName: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  notificationBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FF6B35',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  searchHeader: {
    paddingHorizontal: 24,
    paddingTop: 20,
    marginBottom: 24,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  searchCard: {
    marginHorizontal: 24,
    marginBottom: 32,
  },
  searchContent: {
    padding: 20,
  },
  inputSpacing: {
    marginBottom: 16,
  },
  datePassengerRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  halfInput: {
    flex: 1,
  },
  searchButton: {
    borderRadius: 7,
    overflow: 'hidden',
  },
  searchButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  searchButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#1A0B2E',
  },
  section: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  flightCard: {
    marginBottom: 16,
  },
  flightContent: {
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  flightImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  flightOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '80%',
  },
  flightInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  flightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cityName: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#FFD700',
  },
  flightDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  flightFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  airline: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF',
  },
  influenceTag: {
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.3)',
  },
  influenceTagText: {
    fontSize: 10,
    fontFamily: 'Inter-SemiBold',
    color: '#FFD700',
  },
});