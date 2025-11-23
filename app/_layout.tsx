import { Stack } from "expo-router";
import { useRouter } from "expo-router";
import { styles } from "./stylesheet";

export default function RootLayout() {
  
  return <Stack>
      <Stack.Screen name="index" options={{title: 'Home'}}></Stack.Screen>
      <Stack.Screen name="progressbar" options={{title: 'Progress Bar'}}></Stack.Screen>
      <Stack.Screen name="addcoupons" options={{title: 'Add Coupons'}}></Stack.Screen>
      <Stack.Screen name="mycoupons" options={{title: 'My Coupons'}}></Stack.Screen>
      <Stack.Screen name="unctracker" options={{title: 'Unc Tracker'}}></Stack.Screen>
    </Stack>
  ;
}
