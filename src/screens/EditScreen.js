import React,{useContext} from 'react';
import  {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation}) =>{
    const {state, editBlogPost} = useContext(Context);
    const id = navigation.getParam('id');
    const blogpost = state.find(
        (blogpost) => blogpost.id === id
    );
    
    return <BlogPostForm 
        initialValues = {{title: blogpost.title, content: blogpost.content}}
        onSubmit={(title,content)=>{
            editBlogPost(id, title,content,()=> navigation.popToTop());
    }}/>
};

const styles =StyleSheet.create({});

export default EditScreen;