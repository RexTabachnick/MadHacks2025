import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    
    base: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#C0DFA1'
    },
    title: {
        fontSize: 28, 
        marginVertical: 28
    },
    subtitle: {
        fontSize: 16,
        marginVertical: 16
    },
    button: {
        backgroundColor: '#3C5233', 
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 12
    },
    listItem: {
        
        justifyContent: 'space-between', 
        backgroundColor: '#ebebeb', 
        padding: 15,
        borderRadius: 5,
        marginVertical: 5
    }, 
    listTitleText: {
        fontSize: 20
    },
    listSubtitleText: {
        fontSize: 16
    },
    input: {
        width: "80%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginVertical: 8,
        backgroundColor: "white",
    },
    white_text: {
        color:'#FFFFFF'
    }
      
});