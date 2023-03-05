import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Styles } from './Styles';
import { useRecoilState } from 'recoil';
import { inputtextwallpaper } from '../atoms/wallpaperinputtext';
import Navbar from './Navbar';

const Screen1 = ({navigation}) => {
    const access_key = '4L3Eirlp7nq3CQGwHv7FssRcKKDXKQjNtG1kR21FSRM'
    const [searchValue, setSearchValue] = useRecoilState(inputtextwallpaper)
    const [imageCollection, setImageCollection] = useState([])

    useEffect(()=>{
        const getimagecollection = async() =>{
            let data = await fetch(`https://api.unsplash.com/search/collections?page=1&per_page=30&query=+${searchValue}&client_id=${access_key}`)
            
            let jasondata = await data.json()
            setImageCollection(jasondata)
            //console.log(jasondata)
        }

        getimagecollection()
    },[searchValue])

    imageCollection.total == 0 && setSearchValue('all')

    const ShowWallpaper = (item) =>{
        navigation.navigate('Screen2',{clickedImage:`${JSON.stringify(item)}`})
    }

  return (
    <View style={Styles.Screen1_container} >
      <Navbar />
      <Text style={Styles.resultText} >Showing results for: {searchValue}</Text>
      <FlatList
      numColumns={2}
      data={imageCollection.results}
      renderItem={({item})=>
        <TouchableOpacity onPress={()=>ShowWallpaper(item)} >
            <View style={Styles.imageContainer} >
                {/* <Text>{item.title}</Text> */}
                <Image source={{uri:item.cover_photo.urls.regular}} style={Styles.image} ></Image>
            </View>
        </TouchableOpacity>
      }
      /> 
    </View>
  )
}

export default Screen1
