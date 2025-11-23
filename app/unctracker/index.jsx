import {Image, Text, View} from 'react-native'
import gif from './unctracker.gif'

export default function Index() {
    return (<View>
        <Text>Locating uncs...</Text>
        <Image source={gif}></Image>
        
    </View>);
}