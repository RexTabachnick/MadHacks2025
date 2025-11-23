import { Stack } from "expo-router";
import { useRouter } from "expo-router";
import { styles } from "./stylesheet";

export default function RootLayout() {
  
  return <Stack>
      <Stack.Screen name="index" options={{title: 'Home'}}></Stack.Screen>
    </Stack>
  ;
}
