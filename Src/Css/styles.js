import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"#ff4d4d",
        padding:1,
        justifyContent:"center",
        alignItems:"center",
    },
    col:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
    },
    image:{
        width:150,
        height:150,
        resizeMode:"contain",
        margin:10,
    },
    inputs:{
        width:250,
        height:40,
        backgroundColor:"#ff4d4d",
        fontWeight:"bold",
        borderRadius:4,
        margin:4,
        padding:4,
        color:"white",
        borderBottomWidth:2,
        borderColor:"white",
    },
    btn:{
        backgroundColor:"white",
        height:40,
        width:250,
        alignItems:"center",
        justifyContent:'center',
        margin:10,
        borderRadius:4,
        
    },
    btnText:{
        fontWeight:"bold",
        color:"#ff4d4d",
    },
    link:{
        margin:20,
        width:"90%",
        justifyContent:"center",
        alignItems:"center"
    },
    linkText:{
        color:"#ffffff"
    },
    icon:{
        width:24,
        height:24,
    },
    text:{
        fontSize:40,
        color:"#ffffff",
        fontFamily:"calibri",
        fontStyle:"italic",
    },
    card:{
        justifyContent:"center",
        alignItems:"center",
        width:100,
        height:100,
        backgroundColor:"#ffff",
        zIndex:2,
        borderRadius:5,
        margin:4,
    },
    icona:{
        width:44,
        height:44,
    },
    row:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    cardBig:{
        width:170,
        height:150,
        // justifyContent:"center",
        // alignItems:"center",
        backgroundColor:"#ffff",
        zIndex:2,
        borderRadius:5,
        margin:4,
    },
    scrollTop:{
        flex:1,
        padding:4,
        justifyContent:"center",
        alignItems:'center',
    },
    scrollBottom:{
        flex:4,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:'center',
    }
});



export default styles;