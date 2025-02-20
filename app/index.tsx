import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View className="flex justify-center items-center h-full gap-8">
      <View className="flex justify-center items-center gap-2">
        <Text className="text-2xl font-bold">🏠 Home Page</Text>
        <Button title="Go to Users" onPress={() => router.push("../users")} />
      </View>
      <View>
        <Text className="text-red-600 text-sm">
          This is a simple example of how to use the expo-router package.
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;
