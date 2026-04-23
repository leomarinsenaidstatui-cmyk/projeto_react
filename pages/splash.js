import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Image , Text, StyleSheet} from "react-native";






export default function Splash({navigation}){

    useEffect(()=> {
     let timeoutId;

     const validarToken= async()=>{
               const token = await AsyncStorage.getItem('token');
               console.log("token.:", token);

               timeoutId = setTimeout(() => {
                    if(token){
                         navigation.navigate("Cep");
                    } else {
                         navigation.navigate("Login");
                    }
               }, 5000);
     }

    validarToken();

    return () => {
         if (timeoutId) {
              clearTimeout(timeoutId);
         }
    };
    
},[navigation])

     return(


   <View style={style.imgBack}>



<Image source={require('../assets/logocep.png')}/> 

</View>



           


     )



}

const style = StyleSheet.create({

imgBack:{

flex:1,
justifyContent:"center",
alignItems:"center",
backgroundColor:"#000000"







},
imglogo:{

width:300,
height:300,



}






})
