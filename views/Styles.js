import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        //flex: 1,
        marginTop:'8%',
        width:'100%',
        height:'100%',
        //backgroundColor: 'red',
        alignItems: 'center',
        //justifyContent: 'center',
      },
    navbar_container:{
        //flex:1,
        justifyContent:'center',
        paddingVertical:10,
        alignItems:'center',
        width:'100%',
        backgroundColor:'white',
    },
    Screen1_container:{
        //flex:1,
        //justifyContent:'center',
        //paddingVertical:10,
        width:'100%',
        height:'100%',
        //backgroundColor:'white',
    },
    searchBar_container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        elevation:10,
        borderRadius:10,
        padding:10,
        width:'95%',
    },
    searchBar_icon:{
        paddingRight:10,
    },
    searchInput:{
        fontSize:15,
        width:'95%',
    },
    imageContainer:{
        width:200,
        height:300,
        backgroundColor:'white',
    },
    image:{
        width:'100%',
        height:'100%',
    },
    resultText:{
        paddingLeft:10,
        fontWeight:'bold'
    },
    screen2ImageContainer:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
    },
    downloadbtn:{
        position:'absolute',
        bottom:10,
        left:'10%',
        backgroundColor:'black',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
        elevation:10,
    },
    downloadText:{
        color:'white',
        fontSize:20,
    },
    nextbtn:{
        position:'absolute',
        bottom:10,
        left:'70%',
        backgroundColor:'black',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
        elevation:10,
    },
    nextText:{
        color:'white',
        fontSize:20,
    },
})

export {Styles}