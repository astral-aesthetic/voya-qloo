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
import { 
  Search, 
  Filter, 
  MapPin, 
  Star,
  TrendingUp
} from 'lucide-react-native';
import { CosmicBackground } from '@/components/CosmicBackground';
import { GlassmorphismCard } from '@/components/GlassmorphismCard';
import { TicketInput } from '@/components/TicketInput';

const { width } = Dimensions.get('window');

export default function MapScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const planetaryLines = [
    { id: 'venus', name: 'Charisma', color: '#FF69B4', influence: 'Harmony & Opulence' },
    { id: 'jupiter', name: 'Abundance', color: '#28A745', influence: 'Growth & Prosperity' },
    { id: 'mars', name: 'Drive', color: '#FF4500', influence: 'High Energy & Conflict' },
    { id: 'saturn', name: 'Self-Discipline', color: '#8B4513', influence: 'Responsibilities & Delays' },
    { id: 'sun', name: 'Confidence', color: '#FFD700', influence: 'Leadership & Vitality' },
    { id: 'mercury', name: 'Clarity', color: '#808080', influence: 'Communication & Logic' },
    { id: 'uranus', name: 'Exhilaration', color: '#7FFFD4', influence: 'Innovation & Change' },
    { id: 'neptune', name: 'Detachment', color: '#4169E1', influence: 'Intuition & Dreams' },
    { id: 'pluto', name: 'Reset', color: '#2F2F2F', influence: 'Transformation & Rebirth' },
  ];

  const locations = [
    {
      id: 1,
      name: 'Bali',
      country: 'Indonesia',
      influence: '+Charisma',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
      type: 'positive',
      planets: ['venus']
    },
    {
      id: 2,
      name: 'Santorini',
      country: 'Greece',
      influence: '+Charisma +Detachment',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg',
      type: 'positive',
      planets: ['venus', 'neptune']
    },
    {
      id: 3,
      name: 'Kyoto',
      country: 'Japan',
      influence: '+Self-Discipline',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg',
      type: 'positive',
      planets: ['saturn']
    },
    {
      id: 4,
      name: 'Hushan',
      country: 'China',
      influence: '+Clarity +Self-Discipline',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/9274463/pexels-photo-9274463.jpeg',
      type: 'positive',
      planets: ['mercury', 'saturn']
    },
    {
      id: 5,
      name: 'Barcelona',
      country: 'Spain',
      influence: '+Drive +Exhilaration',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg',
      type: 'positive',
      planets: ['mars', 'uranus']
    },
    {
      id: 6,
      name: 'Nice',
      country: 'France',
      influence: '+Abundance +Confidence',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/632523/pexels-photo-632523.jpeg',
      type: 'positive',
      planets: ['jupiter', 'sun']
    }
  ];

  const extraMapPoints = [
    { color: '#28A745', id: 'green-point', planets: ['jupiter'] },
    { color: '#FF69B4', id: 'pink-point', planets: ['venus'] },
    { color: '#FF4500', id: 'orange-point', planets: ['mars'] }
  ];

  const selectedPlanet = planetaryLines.find(p => p.id === selectedCategory);

  const getFilteredLocations = () => {
    if (!selectedCategory) return locations;
    return locations.filter(location => location.planets.includes(selectedCategory));
  };

  const getFilteredMapPoints = () => {
    if (!selectedCategory) return extraMapPoints;
    return extraMapPoints.filter(point => point.planets.includes(selectedCategory));
  };

  const handleCategorySelect = (planetId) => {
    setSelectedCategory(selectedCategory === planetId ? null : planetId);
  };

  return (
    <View style={styles.container}>
      <CosmicBackground />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          >
          
          
          {/* Search Header */}
          <View style={styles.searchHeader}>
            <TicketInput
              placeholder="Where to?"
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={styles.searchInput}
            />
          </View>

          {/* Category Selector */}
          <View style={styles.section}>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryScroll}
            >
              {planetaryLines.map((planet) => (
                <TouchableOpacity
                  key={planet.id}
                  onPress={() => handleCategorySelect(planet.id)}
                  style={[
                    styles.categoryCard,
                    selectedCategory === planet.id && styles.selectedCategoryCard
                  ]}
                >
                  <GlassmorphismCard 
                    variant="subtle" 
                    style={[
                      styles.planetCard,
                      selectedCategory === planet.id && {
                        borderColor: planet.color,
                        backgroundColor: `${planet.color}15`,
                      }
                    ]}
                  >
                    <View style={styles.planetContent}>
                      <View style={[
                        styles.planetDot, 
                        { backgroundColor: planet.color },
                        selectedCategory === planet.id && styles.selectedPlanetDot
                      ]} />
                      <View style={styles.planetInfo}>
                        <Text style={[
                          styles.planetName,
                          selectedCategory === planet.id && { 
                            color: planet.color,
                            fontFamily: 'Inter-Bold'
                          }
                        ]}>
                          {planet.name}
                        </Text>
                        <Text style={[
                          styles.planetInfluence,
                          selectedCategory === planet.id && { 
                            color: planet.color,
                            fontFamily: 'Inter-Medium',
                            opacity: 0.9
                          }
                        ]}>
                          {planet.influence}
                        </Text>
                      </View>
                    </View>
                  </GlassmorphismCard>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Interactive Map with Filtered Points */}
          <GlassmorphismCard style={styles.mapCard}>
            <View style={styles.mapContainer}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg' }} 
                style={styles.mapImage}
                resizeMode="cover"
              />
              <LinearGradient
                colors={['rgba(15, 12, 41, 0.2)', 'rgba(26, 11, 46, 0.1)']}
                style={styles.mapGradient}
              >
                <Text style={styles.mapTitle}>Life Line</Text>
                <Text style={styles.mapSubtitle}>Destinations</Text>
              
                {/* Filtered Map Points */}
                <View style={styles.mapPoints}>
                  {/* Original location points - filtered */}
                  {getFilteredLocations().map((location) => (
                    <TouchableOpacity 
                      key={location.id} 
                      style={[
                        styles.mapPoint,
                        { 
                          backgroundColor: selectedPlanet ? selectedPlanet.color : '#FFD700',
                          left: `${Math.random() * 80 + 10}%`,
                          top: `${Math.random() * 60 + 20}%`
                        }
                      ]}
                    >
                      <MapPin size={12} color="#1A0B2E" />
                    </TouchableOpacity>
                  ))}
                
                  {/* Extra random points - filtered */}
                  {getFilteredMapPoints().map((point) => (
                    <TouchableOpacity 
                      key={point.id}
                      style={[
                        styles.mapPoint,
                        { 
                          backgroundColor: point.color,
                          left: `${Math.random() * 80 + 10}%`,
                          top: `${Math.random() * 60 + 20}%`
                        }
                      ]}
                    >
                      <MapPin size={12} color="#1A0B2E" />
                    </TouchableOpacity>
                  ))}
                </View>
              </LinearGradient>
            </View>
          </GlassmorphismCard>

          {/* Filtered Featured Locations */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {selectedPlanet ? `${selectedPlanet.name} Destinations` : 'Worldwide Destinations'}
            </Text>
            {getFilteredLocations().map((location) => (
              <TouchableOpacity key={location.id} style={styles.locationCard}>
                <GlassmorphismCard>
                  <View style={styles.locationContent}>
                    <Image source={{ uri: location.image }} style={styles.locationImage} />
                    <LinearGradient
                      colors={['transparent', 'rgba(0, 0, 0, 0.7)']}
                      style={styles.locationOverlay}
                    />
                    <View style={styles.locationInfo}>
                      <View style={styles.locationHeader}>
                        <View>
                          <Text style={styles.locationName}>{location.name}</Text>
                          <Text style={styles.locationCountry}>{location.country}</Text>
                        </View>
                        <View style={styles.ratingContainer}>
                          <Star 
                            size={16} 
                            color={selectedPlanet ? selectedPlanet.color : '#FFD700'} 
                            fill={selectedPlanet ? selectedPlanet.color : '#FFD700'} 
                          />
                          <Text style={[
                            styles.rating,
                            { color: selectedPlanet ? selectedPlanet.color : '#FFD700' }
                          ]}>
                            {location.rating}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.influenceContainer}>
                        <TrendingUp 
                          size={14} 
                          color={selectedPlanet ? selectedPlanet.color : '#FFD700'} 
                        />
                        <Text style={[
                          styles.influence,
                          { color: selectedPlanet ? selectedPlanet.color : '#FFD700' }
                        ]}>
                          {location.influence} Boost(s)
                        </Text>
                      </View>
                    </View>
                  </View>
                </GlassmorphismCard>
              </TouchableOpacity>
            ))}
          </View>

          {/* US Trips */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>US Trips</Text>
            {[
              {
                id: 'us1',
                name: 'New York City',
                country: 'United States',
                influence: '+Drive +Confidence',
                rating: 4.9,
                image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg'
              },
              {
                id: 'us2',
                name: 'San Francisco',
                country: 'United States',
                influence: '+Innovation +Clarity',
                rating: 4.7,
                image: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg'
              }
            ].map((location) => (
              <TouchableOpacity key={location.id} style={styles.locationCard}>
                <GlassmorphismCard>
                  <View style={styles.locationContent}>
                    <Image source={{ uri: location.image }} style={styles.locationImage} />
                    <LinearGradient
                      colors={['transparent', 'rgba(0, 0, 0, 0.7)']}
                      style={styles.locationOverlay}
                    />
                    <View style={styles.locationInfo}>
                      <View style={styles.locationHeader}>
                        <View>
                          <Text style={styles.locationName}>{location.name}</Text>
                          <Text style={styles.locationCountry}>{location.country}</Text>
                        </View>
                        <View style={styles.ratingContainer}>
                          <Star size={16} color="#FFD700" fill="#FFD700" />
                          <Text style={styles.rating}>{location.rating}</Text>
                        </View>
                      </View>
                      <View style={styles.influenceContainer}>
                        <TrendingUp size={14} color="#FFD700" />
                        <Text style={styles.influence}>{location.influence} Boost(s)</Text>
                      </View>
                    </View>
                  </View>
                </GlassmorphismCard>
              </TouchableOpacity>
            ))}
          </View>

          {/* Romantic Getaways */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Romantic Getaways</Text>
            {[
              {
                id: 'rom1',
                name: 'Paris',
                country: 'France',
                influence: '+Charisma +Romance',
                rating: 4.9,
                image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg'
              },
              {
                id: 'rom2',
                name: 'Maldives',
                country: 'Maldives',
                influence: '+Detachment +Harmony',
                rating: 4.8,
                image: 'https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg'
              }
            ].map((location) => (
              <TouchableOpacity key={location.id} style={styles.locationCard}>
                <GlassmorphismCard>
                  <View style={styles.locationContent}>
                    <Image source={{ uri: location.image }} style={styles.locationImage} />
                    <LinearGradient
                      colors={['transparent', 'rgba(0, 0, 0, 0.7)']}
                      style={styles.locationOverlay}
                    />
                    <View style={styles.locationInfo}>
                      <View style={styles.locationHeader}>
                        <View>
                          <Text style={styles.locationName}>{location.name}</Text>
                          <Text style={styles.locationCountry}>{location.country}</Text>
                        </View>
                        <View style={styles.ratingContainer}>
                          <Star size={16} color="#FF69B4" fill="#FF69B4" />
                          <Text style={styles.rating}>{location.rating}</Text>
                        </View>
                      </View>
                      <View style={styles.influenceContainer}>
                        <TrendingUp size={14} color="#FF69B4" />
                        <Text style={styles.influence}>{location.influence} Boost(s)</Text>
                      </View>
                    </View>
                  </View>
                </GlassmorphismCard>
              </TouchableOpacity>
            ))}
          </View>

          {/* Staycations */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Staycations</Text>
            {[
              {
                id: 'stay1',
                name: 'Local Spa Resort',
                country: 'Your City',
                influence: '+Self-Care +Reset',
                rating: 4.5,
                image: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg'
              },
              {
                id: 'stay2',
                name: 'Urban Exploration',
                country: 'Your City',
                influence: '+Clarity +Home',
                rating: 4.3,
                image: 'https://images.pexels.com/photos/220769/pexels-photo-220769.jpeg'
              }
            ].map((location) => (
              <TouchableOpacity key={location.id} style={styles.locationCard}>
                <GlassmorphismCard>
                  <View style={styles.locationContent}>
                    <Image source={{ uri: location.image }} style={styles.locationImage} />
                    <LinearGradient
                      colors={['transparent', 'rgba(0, 0, 0, 0.7)']}
                      style={styles.locationOverlay}
                    />
                    <View style={styles.locationInfo}>
                      <View style={styles.locationHeader}>
                        <View>
                          <Text style={styles.locationName}>{location.name}</Text>
                          <Text style={styles.locationCountry}>{location.country}</Text>
                        </View>
                        <View style={styles.ratingContainer}>
                          <Star size={16} color="#28A745" fill="#28A745" />
                          <Text style={styles.rating}>{location.rating}</Text>
                        </View>
                      </View>
                      <View style={styles.influenceContainer}>
                        <TrendingUp size={14} color="#28A745" />
                        <Text style={styles.influence}>{location.influence} Boost(s)</Text>
                      </View>
                    </View>
                  </View>
                </GlassmorphismCard>
              </TouchableOpacity>
            ))}
          </View>

          {/* Business Travel */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Business Travel</Text>
            {[
              {
                id: 'biz1',
                name: 'Singapore',
                country: 'Singapore',
                influence: '+Productivity +Focus',
                rating: 4.8,
                image: 'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg'
              },
              {
                id: 'biz2',
                name: 'Dubai',
                country: 'UAE',
                influence: '+Abundance +Drive',
                rating: 4.7,
                image: 'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg'
              }
            ].map((location) => (
              <TouchableOpacity key={location.id} style={styles.locationCard}>
                <GlassmorphismCard>
                  <View style={styles.locationContent}>
                    <Image source={{ uri: location.image }} style={styles.locationImage} />
                    <LinearGradient
                      colors={['transparent', 'rgba(0, 0, 0, 0.7)']}
                      style={styles.locationOverlay}
                    />
                    <View style={styles.locationInfo}>
                      <View style={styles.locationHeader}>
                        <View>
                          <Text style={styles.locationName}>{location.name}</Text>
                          <Text style={styles.locationCountry}>{location.country}</Text>
                        </View>
                        <View style={styles.ratingContainer}>
                          <Star size={16} color="#FF4500" fill="#FF4500" />
                          <Text style={styles.rating}>{location.rating}</Text>
                        </View>
                      </View>
                      <View style={styles.influenceContainer}>
                        <TrendingUp size={14} color="#FF4500" />
                        <Text style={styles.influence}>{location.influence} Boost(s)</Text>
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

// ... rest of your styles remain the same

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
  searchHeader: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingTop: 20,
    marginBottom: 24,
    gap: 12,
  },
  searchInput: {
    flex: 1,
  },
  filterButton: {
    width: 60,
  },
  filterContent: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapCard: {
    marginHorizontal: 24,
    marginBottom: 32,
    height: 250,
    marginTop: 20,
    overflow: 'hidden',
  },
  mapContainer: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  mapGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  mapTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  mapSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  mapPoints: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  mapPoint: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
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
  planetsGrid: {
    gap: 12,
  },
  planetCard: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  planetContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  planetDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  planetInfo: {
    flex: 1,
  },
  planetName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  planetInfluence: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  locationCard: {
    marginBottom: 16,
  },
  locationContent: {
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  locationImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  locationOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '70%',
  },
  locationInfo: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  locationName: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  locationCountry: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#FFD700',
  },
  influenceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  influence: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#FFD700',
  },
  // Category selector styles
  categoryScroll: {
    gap: 12,
    paddingHorizontal: 4,
  },
  categoryCard: {
    minWidth: 140,
  },
  selectedCategoryCard: {
    transform: [{ scale: 1.00 }],
  },
  selectedPlanetDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});