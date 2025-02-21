import { View, Text, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View className="flex justify-center items-center h-full gap-8 bg-gray-100 p-4">
      <View className="flex justify-center items-center gap-2">
        <Text className="text-3xl font-bold text-blue-600">📝 Todo App</Text>
        <Text className="text-lg text-gray-700">
          Manage your tasks efficiently
        </Text>
      </View>
      <View className="flex justify-center items-center gap-4">
        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-full"
          onPress={() => router.push("/auth/login")}
        >
          <Text className="text-white text-lg">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
