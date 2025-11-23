import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../stylesheet";
import { useRouter } from "expo-router";
//Eva: i am at 39:17
const AddCouponScreen = () => {
    const router = useRouter();
    return (<View style={styles.base}>
        <TouchableOpacity style={styles.button} onPress={() => {router.push('/mycoupons')}}>
        <Text>My Coupons</Text>
      </TouchableOpacity>
        <Text style={styles.title}>Upload a coupon</Text>
        <TouchableOpacity>
        </TouchableOpacity>
        
        <Text style={styles.subtitle}>or</Text>
        <Text style={styles.title}>Browse coupons online</Text>


    </View>
    )
};

export default AddCouponScreen;