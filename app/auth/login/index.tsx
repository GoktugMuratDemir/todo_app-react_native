import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const Login = () => {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await login(username, password);
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  return (
    <View className="flex-1 justify-center p-4 bg-gray-100">
      <TouchableOpacity
        onPress={() => router.push("../")}
        className="absolute top-10 left-4 p-2 bg-gray-300 rounded"
      >
        <Text className="text-gray-800">Back</Text>
      </TouchableOpacity>
      <Text className="text-2xl font-bold mb-6 text-center">Login</Text>
      <TextInput
        className="h-10 border border-gray-400 mb-3 px-2 rounded bg-white"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        className="h-10 border border-gray-400 mb-3 px-2 rounded bg-white"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
