import { Stack } from "expo-router";
import "../global.css";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Layout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />

        <ProtectedRoute>
          <Stack.Screen name="users/index" options={{ title: "Users" }} />
        </ProtectedRoute>

        <Stack.Screen name="auth/login/index" options={{ title: "Login" }} />
      </Stack>
    </AuthProvider>
  );
}
