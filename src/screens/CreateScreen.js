import React, {useContext, useState} from 'react';
import {View, Text,StyleSheet,TextInput,Button} from 'react-native';
import {Context} from '../context/BlogContext';
 

const ShowScreen = ({navigation}) =>{
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const {addBlogPost} = useContext(Context);
 return(
     <View >
         <Text style={styles.label}>Enter Title:</Text>
         <TextInput style={styles.input} value={title} onChangeText={(text)=> setTitle(text)}/>
         <Text style={styles.label}>Enter Content:</Text>
         <TextInput style={styles.input} value={content} onChangeText={(text)=> setContent(text)} />
         <Button  
         onPress ={()=> {
            addBlogPost(title,content, ()=>{
                navigation.navigate('Index'); // better to save api if it is too slow to fetch
            });
            
        }}
         title="Add Blog Post"
         
         />
     </View>
 );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'grey',
        marginBottom: 10,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
        marginTop: 10
    },
  

});
export default ShowScreen;