import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "../stylesheet";
import { useState } from "react";

const MyCouponsScreen = () => {
    const [coupons, setCoupons] = useState([
        {
            id: 1,
            date: new Date(2026, 1, 1),
            name: "Example Coupon",
            description: "This is a description of the coupon - may want to limit char length"
        },
        {
            id: 2,
            date: new Date("2025-12-31"),
            name: "Example Coupon",
            description: "This is a description of the coupon - may want to limit char length"
        }
    ]);

    return (<View style={styles.base}>
        <Text style={styles.title}>My Coupons</Text>
        <FlatList 
          data={coupons}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View>
                <TouchableOpacity>
                    <Text>icon to check off</Text>
                </TouchableOpacity>
                <Text>{item.date.toDateString()}</Text>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
            </View> 
          )}  
        />
    </View>
    )
};

export default MyCouponsScreen;