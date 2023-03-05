import React, { useState } from 'react';
import { View, Text, TextInput, Image,  } from 'react-native';
import { Styles } from './Styles';
import { FontAwesome } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import { inputtextwallpaper } from '../atoms/wallpaperinputtext';

const Navbar = () => {
    const [searchValue, setSearchValue] = useRecoilState(inputtextwallpaper)
    const onChangeTextInput = (text) =>{
        setSearchValue(text)
    }
  return (
    <View style={Styles.navbar_container} > 
       <View style={Styles.searchBar_container} >
            <FontAwesome name="search" size={24} color="black" style={Styles.searchBar_icon} />
            <TextInput 
            style={Styles.searchInput}
            placeholder='Search Here...'
            //onChangeText={val => setSearchValue(val)}
            onChangeText={(text)=>onChangeTextInput(text)}
            ></TextInput>
       </View>
    </View>
  )
}

export default Navbar
