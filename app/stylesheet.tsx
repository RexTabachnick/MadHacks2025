import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
          
    },
    title: {
        fontSize: 28, 
        marginBottom: 28
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 28
    },
    button: {
        backgroundColor: '#6BC7FF', 
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 12
    },
    listitem: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff'
    }
});