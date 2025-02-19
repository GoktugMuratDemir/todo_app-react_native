import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

const UsersScreen = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>👥 Users Page</Text>
      <Button title="Back to Home" onPress={() => router.push("../")} />
    </View>
  );
};

export default UsersScreen;
