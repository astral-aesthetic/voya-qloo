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
import { MapPin, ArrowUpDown, Search, Compass } from 'lucide-react-native';
import { CosmicBackground } from '@/components/CosmicBackground';
import { GlassmorphismCard } from '@/components/GlassmorphismCard';
import { TicketInput } from '@/components/TicketInput';
import { AirplaneHero } from '@/components/AirplaneHero';

const { width } = Dimensions.get('window');
const DEFAULT_FROM = 'Miami';
const DEFAULT_TO = 'Destination';

export default function HomeScreen() {
  const [from, setFrom] = useState(DEFAULT_FROM);
  const [to, setTo] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Near Me data
  const nearMeActivities = [
    {
      id: 1,
      name: 'Horseback Riding',
      price: '$85',
      image: 'https://images.pexels.com/photos/2612565/pexels-photo-2612565.jpeg'
    },
    {
      id: 2,
      name: 'Bungee Jumping',
      price: '$380',
      image: 'https://images.pexels.com/photos/26811613/pexels-photo-26811613.jpeg'
    },
    {
      id: 3,
      name: 'Rock Climbing',
      price: '$75',
      image: 'https://images.pexels.com/photos/3077882/pexels-photo-3077882.jpeg'
    },
    {
      id: 4,
      name: 'Kayaking',
      price: '$95',
      image: 'https://images.pexels.com/photos/3413678/pexels-photo-3413678.jpeg'
    },
  ];

  // Trending data
  const trendingActivities = [
    {
      id: 1,
      name: 'Concerts',
      price: '$150',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg'
    },
    {
      id: 2,
      name: 'Snorkeling',
      price: '$125',
      image: 'https://images.pexels.com/photos/2405643/pexels-photo-2405643.jpeg'
    },
    {
      id: 3,
      name: 'Hot Air Balloon',
      price: '$450',
      image: 'https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg'
    },
    {
      id: 4,
      name: 'Skydiving',
      price: '$299',
      image: 'https://images.pexels.com/photos/70361/california-parachutists-skydivers-flares-70361.jpeg'
    },
  ];

  // Self-Care data
  const selfCareActivities = [
    {
      id: 1,
      name: 'Spa Day',
      price: '$180',
      image: 'https://images.pexels.com/photos/33191050/pexels-photo-33191050.jpeg'
    },
    {
      id: 2,
      name: 'Massage Therapy',
      price: '$90',
      image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg'
    },
    {
      id: 3,
      name: 'Meditation Session',
      price: '$45',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'
    },
    {
      id: 4,
      name: 'Yoga Retreat',
      price: '$120',
      image: 'https://images.pexels.com/photos/317155/pexels-photo-317155.jpeg'
    },
  ];

  // New Hobbies data
  const newHobbiesActivities = [
    {
      id: 1,
      name: 'Pottery Classes',
      price: '$65',
      image: 'https://images.pexels.com/photos/3094018/pexels-photo-3094018.jpeg'
    },
    {
      id: 2,
      name: 'Guitar Lessons',
      price: '$80',
      image: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg'
    },
    {
      id: 3,
      name: 'Cooking Class',
      price: '$95',
      image: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg'
    },
    {
      id: 4,
      name: 'Photography Workshop',
      price: '$110',
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg'
    },
  ];

  // Immersive Experiences data
  const immersiveExperiences = [
    {
      id: 1,
      name: 'VR Adventure',
      price: '$35',
      image: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg'
    },
    {
      id: 2,
      name: 'Escape Room',
      price: '$28',
      image: 'https://images.pexels.com/photos/21294046/pexels-photo-21294046.jpeg'
    },
    {
      id: 3,
      name: 'Museum Tour',
      price: '$25',
      image: 'https://images.pexels.com/photos/2167395/pexels-photo-2167395.jpeg'
    },
    {
      id: 4,
      name: 'Art Gallery Walk',
      price: '$15',
      image: 'https://images.pexels.com/photos/1604991/pexels-photo-1604991.jpeg'
    },
  ];

  // Good Eats data
  const goodEatsActivities = [
    {
      id: 1,
      name: 'Wine Tasting',
      price: '$75',
      image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg'
    },
    {
      id: 2,
      name: 'Food Tour',
      price: '$60',
      image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg'
    },
    {
      id: 3,
      name: 'Chef Experience',
      price: '$150',
      image: 'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg'
    },
    {
      id: 4,
      name: 'Brewery Tour',
      price: '$45',
      image: 'https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg'
    },
  ];

  const renderActivitySection = (title, activities, cardStyle = 'suggestion') => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity accessible accessibilityLabel={`See all ${title}`}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={cardStyle === 'suggestion' ? styles.suggestionsScroll : { gap: 16 }}
      >
        {activities.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={cardStyle === 'suggestion' ? styles.suggestionCard : styles.trendingCard}
            accessible 
            accessibilityLabel={`${title}: ${item.name}, Price: ${item.price}`}
          >
            {cardStyle === 'suggestion' ? (
              <View style={styles.suggestionImageContainer}>
                <Image 
                  source={{ uri: item.image }} 
                  style={styles.suggestionImage} 
                  onError={() => console.error(`Failed to load image: ${item.image}`)}
                />
                <LinearGradient
                  colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
                  style={styles.suggestionOverlay}
                />
                <View style={styles.suggestionContent}>
                  <Text style={styles.suggestionName}>{item.name}</Text>
                  <Text style={styles.suggestionPrice}>{item.price}</Text>
                </View>
              </View>
            ) : (
              <View style={styles.trendingContent}>
                <Image 
                  source={{ uri: item.image }} 
                  style={styles.trendingImage} 
                  onError={() => console.error(`Failed to load image: ${item.image}`)} 
                />
                <Text style={styles.trendingName}>{item.name}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <CosmicBackground variant="deep" />
      
      <SafeAreaView style={styles.safeArea}>
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Search Header */}
          <View style={styles.searchHeader}>
            <TicketInput
              label=""
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Discover..."
              icon={<Compass size={16} color="rgba(255, 255, 255, 0.7)" />}
              style={styles.searchInput}
            />
          </View>
          
          {/* Near Me */}
          {renderActivitySection('Near Me', nearMeActivities, 'suggestion')}

          {/* Trending */}
          {renderActivitySection('Trending', trendingActivities, 'trending')}

          {/* Self-Care */}
          {renderActivitySection('Self-Care', selfCareActivities, 'suggestion')}

          {/* New Hobbies */}
          {renderActivitySection('New Hobbies', newHobbiesActivities, 'trending')}

          {/* Immersive Experiences */}
          {renderActivitySection('Immersive Experiences', immersiveExperiences, 'suggestion')}

          {/* Good Eats */}
          {renderActivitySection('Good Eats', goodEatsActivities, 'trending')}

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
    marginBottom: 30,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  greeting: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  userName: {
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  profileIcon: {
    position: 'relative',
  },
  notificationBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FF6B6B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  airplaneSection: {
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 24,
  },
  airplaneImage: {
    width: width * 0.85,
    height: 120,
  },
  searchSection: {
    paddingHorizontal: 24,
    marginBottom: 40,
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
  searchCard: {
    padding: 24,
  },
  searchContent: {
    gap: 20,
  },
  locationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  locationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationInfo: {
    flex: 1,
  },
  locationLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 4,
  },
  locationValue: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  placeholder: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  swapButton: {
    alignSelf: 'center',
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  seeAll: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  suggestionsScroll: {
    gap: 16,
    paddingHorizontal: 4,
  },
  suggestionCard: {
    width: 180,
    height: 220,
  },
  suggestionImageContainer: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  suggestionImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  suggestionOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
  },
  suggestionContent: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  suggestionName: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  suggestionPrice: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#FFD700',
  },
  trendingCard: {
    width: 160,
    marginRight: 16,
  },
  trendingContent: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  trendingImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  trendingName: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#FFFFFF',
    paddingLeft: 4,
  },
});