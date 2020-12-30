import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';

import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
  const { state,deleteBlogPost,getBlogposts } = useContext(Context);

  useEffect(()=>{
      getBlogposts();
    const listener = navigation.addListener('didFocus', ()=>{
        getBlogposts();
      });

      return () =>{
        listener.remove();
      };
  },[]);

  return (
    <View>
     
    
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress= {()=> navigation.navigate('Show', {id: item.id})}> 
              <View style={styles.row}>
                 <Text style={styles.title}>{item.title} - {item.id}</Text>

                 <TouchableOpacity onPress = {()=> deleteBlogPost(item.id)}>
                    <Feather name="trash-2" size={24} color="black" />
                 </TouchableOpacity>
              </View>
            </TouchableOpacity>
              
          );
        }}
      />
    </View>
  );
};
// important for  project 
IndexScreen.navigationOptions = ({navigation}) =>{
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18
    }
});

export default IndexScreen;