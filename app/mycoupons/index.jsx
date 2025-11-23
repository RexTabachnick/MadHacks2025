import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import * as Dummy from "../dummy_backend/couponsManager";
import { styles } from "../stylesheet";

// ❌ OLD dummy backend import
import { removeCoupon } from "../dummy_backend/couponsManager";

// ✅ Keep access to dummy functions for fallback

const MyCouponsScreen = () => {
  const router = useRouter();
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    fetch("http://10.4.51.72:8080/api/coupons")
      .then(res => res.json())
      .then(data => {
        console.log("✅ Backend coupons:", data);
        setCoupons(Object.values(data));
        console.log("✅ Backend coupons:", data);
      })
      .catch(err => {
        console.log("❌ Backend failed, using dummy data:", err);
        setCoupons(Dummy.getCoupons());
      });
  }, []);
  
  

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
            <Text style={styles.listTitle}>{item.store}</Text>
            <Text style={styles.listSubtitle}>{item.offer}</Text>
            <Text style={styles.listDate}>{item.expires}</Text>

          </View>
        )}
      />
    </View>
  );
};

export default MyCouponsScreen;
