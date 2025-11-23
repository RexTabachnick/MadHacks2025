import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./stylesheet";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (<View
      style={styles.base}
    >
      <Text style={styles.title}>Keep track of your coupons</Text>
      <Text style={styles.subtitle}>Get started by finding or uploading coupons</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {router.push('/addcoupons')}}
      >
        <Text style={styles.white_text}>Add a coupon/find coupons</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {router.push('/progressbar')}}
      >
        <Text style={styles.white_text}>Progress bar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {router.push('/mycoupons')}}
      >
        <Text style={styles.white_text}>My Coupons
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {router.push('/unctracker')}}
      >
        <Text style={styles.white_text}>UNC TRACKER UNC TRACKER
        </Text>
      </TouchableOpacity>


    </View>
  );
}
