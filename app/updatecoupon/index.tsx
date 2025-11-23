import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../stylesheet";

export default function UpdateCouponScreen() {
  const router = useRouter();

  const { couponObj } = useLocalSearchParams();
  const coupon = JSON.parse(Array.isArray(couponObj) ? couponObj[0] : couponObj);

  const [store, setStore] = useState(coupon.store);
  const [offer, setOffer] = useState(coupon.offer);
  const [expires, setExpires] = useState(coupon.expires);

  const updateCoupon = () => {
    fetch("http://localhost:8080/api/coupons", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: coupon.id,
        store,
        offer,
        expires,
        used: false
      })
    })
      .then(data => {
        console.log("✅ Coupon updated:", data);
        router.push("/mycoupons");
      })
      .catch(err => console.log("❌ Failed to update:", err));
  };

  return (
    <View style={styles.base}>
      <Text style={styles.title}>Update Coupon</Text>

      <TextInput
        placeholder={coupon.store}
        style={styles.input}
        value={store}
        onChangeText={setStore}
      />

      <TextInput
        placeholder={coupon.offer}
        style={styles.input}
        value={offer}
        onChangeText={setOffer}
      />

      <TextInput
        placeholder={coupon.expires}
        style={styles.input}
        value={expires}
        onChangeText={setExpires}
      />

      <TouchableOpacity style={styles.button} onPress={updateCoupon}>
        <Text>Update Coupon</Text>
      </TouchableOpacity>
    </View>
  );
}
