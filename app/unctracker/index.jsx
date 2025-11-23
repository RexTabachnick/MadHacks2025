import {Image, Text, View} from 'react-native'
import gif from './unctracker.gif'
import { styles } from '@/app/stylesheet.ts'
import CouponsContextProvider from '../CouponsContext';

export default function Index() {
    return (
        <CouponsContextProvider>
    <View style={styles.base}>
        <Text style={styles.title}>Locating uncs...</Text>
        <Image source={gif}></Image>
        
    </View>
    </CouponsContextProvider>);
}