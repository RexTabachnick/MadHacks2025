import { View, Text } from "react-native";
import { styles } from "../stylesheet";

const AddCouponScreen = () => {
    return (<View style={styles.base}>
        <Text style={styles.title}>Upload a coupon</Text>
        
        <Text style={styles.subtitle}>or</Text>
        <Text style={styles.title}>Browse coupons online</Text>


    </View>
    )
};

export default AddCouponScreen;