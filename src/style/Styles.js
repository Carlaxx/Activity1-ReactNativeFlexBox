import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      justifyContent: 'flex-start',
      marginRight: 20,
      marginLeft: 20,
      alignItems: 'stretch',
      flexWrap: 'wrap',
    },
    boxMain:{
        width: 350,
        height: 240,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 20,
        borderWidth:1,
    },
    iconArea:{
        width: 110,
        height: 110,
        alignItems: 'center',
        marginTop: 50,
        marginLeft: 20,
        borderWidth:1,
        borderRadius: 50,
      },
    a:{
        marginLeft: 20,
        fontSize: 23,
        color: 'white',
    },
    aa:{
        marginLeft: 20,
        fontSize: 15,
        color: 'white',
    },
    aaa:{
        marginTop: 20,
        fontSize: 18,
        color: 'black',
        marginBottom: 10,
    },
    rectangle:{
        flexDirection: "row",
        width: 350,
        height: 75,
        borderRadius: 15,
        marginBottom: 20,
    },
    disFont:{
        marginTop: 20,
        textAlign: 'flex-start',
        marginLeft: 20,
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
    },
    disFont1:{
        marginTop: 20,
        marginLeft: 20,
        fontSize: 13,
        color: 'black',
    },
    grndFont:{
            flexDirection: 'row',
            textAlign: "right",
            color:'blue', 
    },
  });