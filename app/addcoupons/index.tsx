// import { View, Text, TouchableOpacity } from "react-native";
// import { styles } from "../stylesheet";
// import { useRouter } from "expo-router";
// //Eva: i am at 39:17
// const AddCouponScreen = () => {
//     const router = useRouter();
//     return (<View style={styles.base}>
//         <TouchableOpacity style={styles.button} onPress={() => {router.push('/mycoupons')}}>
//         <Text>My Coupons</Text>
//       </TouchableOpacity>
//         <Text style={styles.title}>Upload a coupon</Text>
        
        
//         <Text style={styles.subtitle}>or</Text>
//         <Text style={styles.title}>Browse coupons online</Text>

//     </View>
//     )
// };

// export default AddCouponScreen;

import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../stylesheet";

export default function AddCouponScreen() {
  const router = useRouter();

  const [store, setStore] = useState("");
  const [offer, setOffer] = useState("");
  const [expires, setExpires] = useState("");

  const addCoupon = () => {
    fetch("http://localhost:8080/api/coupons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        store,
        offer,
        expires,
        used: false
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("✅ Coupon saved:", data);
        router.push("/mycoupons");
      })
      .catch(err => console.log("❌ Failed to save:", err));
  };

  return (
    <View style={styles.base}>
      <Text style={styles.title}>Add a Coupon</Text>

      <TextInput
        placeholder="Store"
        style={styles.input}
        value={store}
        onChangeText={setStore}
      />

      <TextInput
        placeholder="Offer"
        style={styles.input}
        value={offer}
        onChangeText={setOffer}
      />

      <TextInput
        placeholder="Expires"
        style={styles.input}
        value={expires}
        onChangeText={setExpires}
      />

      <TouchableOpacity style={styles.button} onPress={addCoupon}>
        <Text>Save Coupon</Text>
      </TouchableOpacity>
    </View>
  );
}
