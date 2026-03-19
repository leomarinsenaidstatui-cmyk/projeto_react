import { useEffect } from "react";
import { View, Image ,StyleSheet} from "react-native";




export default function Splash({navigation}){

    useEffect(()=> {

    const time = setTimeout(()=>{
    
    navigation.navigate("Login");

    },5000)

    return()=>clearTimeout(time);
    
},[])

     return(


   <View style={style.imgBack}>



<Image source={require('../assets/logonovo.png')}/> 

</View>



           


     )



}

const style = StyleSheet.create({

imgBack:{

flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#2a2a2a"







},
imglogo:{

width:300,
height:300,



}






})