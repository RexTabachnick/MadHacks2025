import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "../stylesheet";
import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { getCoupons, removeCoupon } from "../dummy_backend/couponsManager";

const MyCouponsScreen = () => {
  const router = useRouter();
  const [coupons, setCoupons] = useState(getCoupons());

  return (
    <View style={styles.base}>
      <Text style={styles.title}>My Coupons</Text>
      <TouchableOpacity style={styles.button} onPress={() => {router.push('/addcoupons')}}>
        <Text>Add coupons</Text>
      </TouchableOpacity>
      <FlatList
        data={coupons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <TouchableOpacity onPress={() => removeCoupon(item)}>
              <Feather name="check-square" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.listTitleText}>{item.date}</Text>
            <Text style={styles.listTitleText}>{item.name}</Text>
            <Text style={styles.listSubtitleText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MyCouponsScreen;
