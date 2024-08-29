

import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const VideoPlayerScreen = ({ route }) => {
  const { videoUrl } = route.params;

  // // Extract video ID from URL (if necessary)
  // const videoId = videoUrl.split('v=')[1].split('&')[0];

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={Dimensions.get('window').height}
        play
        videoId={'MvmKSNdyJ9g'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default VideoPlayerScreen;
