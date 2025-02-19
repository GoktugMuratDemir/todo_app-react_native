import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>🏠 Home Page</Text>
      <Button title="Go to Users" onPress={() => router.push("../users")} />
    </View>
  );
};

export default HomeScreen;
