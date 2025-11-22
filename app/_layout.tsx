import { Stack } from "expo-router";
import { useRouter } from "expo-router";

export default function RootLayout() {
  
  return <Stack>
      <Stack.Screen name="index"></Stack.Screen>
    </Stack>
  ;
}
