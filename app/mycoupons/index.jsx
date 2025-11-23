import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import * as Dummy from "../dummy_backend/couponsManager";
import { styles } from "../stylesheet";

// ❌ OLD dummy backend import

// ✅ Keep access to dummy functions for fallback

const MyCouponsScreen = () => {
  const router = useRouter();
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/coupons")
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
  
  async function deleteCoupon(coupon) {
    fetch("http://localhost:8080/api/coupons", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(coupon),
    })
    .then(
      console.log("✅ Coupon deleted successfully"),
      // setCoupons(prevCoupons => prevCoupons.filter(c => c.id !== coupon.id));
      setCoupons(coupons)
    )
    .catch(err => {
      console.log("❌ Error deleting coupon:", err);
    });
  }

  async function updateCoupon(coupon) {
    router.push({
      pathname: "/updatecoupon",
      params: {couponObj: JSON.stringify(coupon)}
    })
  }

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
            <TouchableOpacity onPress={() => deleteCoupon(item)}>
              <Feather name="check-square" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => updateCoupon(item)}>
              <Feather name="check-square" size={24} color="blue" />
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
