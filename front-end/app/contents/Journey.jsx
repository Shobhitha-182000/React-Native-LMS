import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';  
import Webdev from './Webdev';

const courses = [
  { id: '1', name: 'Web Development', image: require('./fullstack.png'), rating: '4.5/5', price: '$49.99' },
  { id: '2', name: 'Data Science', image: 'https://analyticstraininghub.com/wp-content/uploads/2022/10/data-analyst-skills-2020.jpg', rating: '4.7/5', price: '$59.99' },
  { id: '3', name: 'Machine Learning', image: require('./fullstack.png'), rating: '4.8/5', price: '$69.99' },
  { id: '4', name: 'Cloud Computing', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJRlCpATYf8w-2kHaNZtRn1P-Icpzsu_ETA&s', rating: '4.6/5', price: '$79.99' },
];

const Journey = () => {
  const navigation = useNavigation();
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    const updateLayout = () => {
      const { width } = Dimensions.get('window');
      setNumColumns(width < 600 ? 1 : 2);
    };

    const subscription = Dimensions.addEventListener('change', updateLayout);
    updateLayout();
    return () => subscription?.remove();
  }, []);

  const handleCardPress = (id) => {
    if (id === '1') {
       <Webdev/>
    } else if (id === '3') {
      navigation.navigate('Machine');
    }
  };

  const handleEnrollPress = (course) => {
    if (enrolledCourses.includes(course.id)) {
      Alert.alert('Course Already Added', 'This course is already in your cart.');
    } else {
      setEnrolledCourses([...enrolledCourses, course.id]);
      Alert.alert('Course Added', 'The course has been added to your cart.');
    }
  };

  const renderStars = (rating) => {
    const stars = parseFloat(rating) || 0;
    return (
      <View style={styles.ratingContainer}>
        {Array.from({ length: 5 }).map((_, index) => (
          <FontAwesome
            key={index}
            name={index < stars ? 'star' : 'star-o'}
            size={16}
            color="#FFD700"
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        key={numColumns}
        data={courses}
        renderItem={({ item }) => (
          <View style={[styles.card, { width: (Dimensions.get('window').width / numColumns) - 15 }]}>
            <TouchableOpacity
              onPress={() => handleCardPress(item.id)}
              style={styles.imageContainer}
            >
              <Image source={item.image} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.content}>
              <Text style={styles.title}>{item.name}</Text>
              <View style={styles.ratingContainer}>
                {renderStars(item.rating)}
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => handleEnrollPress(item)}
            >
              <Text style={styles.buttonText}>
                {enrolledCourses.includes(item.id) ? 'Added' : 'Enroll now'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  list: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    margin: 5,
    flexDirection: 'row',
    height: 180,
  },
  imageContainer: {
    width: '40%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#001F3F',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008000',
    height: 40,
    borderRadius: 5,
    margin: 10,
    marginTop: 120,
    width: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default Journey;
