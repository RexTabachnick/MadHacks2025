import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./stylesheet";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (<View
      style={styles.base}
    >
      <Text style={styles.title}>Edit app/index.tsx to edit this screen.</Text>
      <Text style={styles.subtitle}>peepeepoopoo</Text>
      
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


    </View>
  );
}
