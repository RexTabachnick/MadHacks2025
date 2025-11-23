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
        <Text>Add a coupon/find coupons</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {router.push('/progressbar')}}
      >
        <Text>Progress bar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {router.push('/mycoupons')}}
      >
        <Text>My Coupons
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {router.push('/unctracker')}}
      >
        <Text>UNC TRACKER UNC TRACKER
        </Text>
      </TouchableOpacity>


    </View>
  );
}
