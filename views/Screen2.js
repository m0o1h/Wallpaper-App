import React,{useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Styles } from './Styles';
import { useRecoilState } from 'recoil';
import { inputtextwallpaper } from '../atoms/wallpaperinputtext';


const Screen2 = ({route}) => {
    const {clickedImage} = route.params;
    const [imageData, setImageData] = useState();
    const [searchValue, setSearchValue] = useRecoilState(inputtextwallpaper)

    useEffect(()=>{
        setImageData(JSON.parse(clickedImage)?.cover_photo.urls.regular)
    },[])

    const downloadImage = () =>{
      alert('Image will be downloaded.')
    }

    const showNextImage = async() =>{
      const data = await fetch(`https://source.unsplash.com/random/900×1200/?${searchValue}`)

      setImageData(data.url)
      console.log(data.url)

    }
    

  return (
    <View style={Styles.screen2ImageContainer} >
        <Image source={{uri:imageData}} style={Styles.image} ></Image>
        
        <TouchableOpacity style={Styles.downloadbtn}
        onPress={downloadImage}
         >
          <Text style={Styles.downloadText} >Download</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.nextbtn}
        onPress={showNextImage}
         >
          <Text style={Styles.nextText} >Next</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Screen2
