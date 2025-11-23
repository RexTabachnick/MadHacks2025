import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "../stylesheet";
import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";

const MyCouponsScreen = () => {
  const router = useRouter();
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      date: new Date(2026, 1, 1),
      name: "Example Coupon",
      description:
        "This is a description of the coupon - may want to limit char length",
    },
    {
      id: 2,
      date: new Date("2025-12-31"),
      name: "Example Coupon",
      description:
        "This is a description of the coupon - may want to limit char length",
    },
  ]);

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
            <TouchableOpacity>
              <Feather name="check-square" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.listTitleText}>{item.date.toDateString()}</Text>
            <Text style={styles.listTitleText}>{item.name}</Text>
            <Text style={styles.listSubtitleText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MyCouponsScreen;
