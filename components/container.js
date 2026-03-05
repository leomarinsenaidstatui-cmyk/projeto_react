import {View, StyleSheet} from "react-native";
       

export default function Container({children}){
    return(

<View style={style.cont}>{children}</View>

    )
}

const style = StyleSheet.create({

    cont:{

        flex:1,
        backgroundColor:"#404040",
        justifyContent:"center",
        alignItems:"center"
    }
})