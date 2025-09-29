import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { auth } from "../firebase";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Giriş yaptı", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Kayıt oldu", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <LinearGradient
      colors={["#F1E2E3", "#D1AFDD", "#B7A1E8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>Welcome Back</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.paragraf}>
            Hoş geldiniz! Lütfen hesabınıza giriş yapın.<br/>
            <Text style={{ fontWeight: "bold" }}>Email ve şifrenizi girin</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={["#F1E2E3", "#D1AFDD", "#B7A1E8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <TouchableOpacity
              onPress={handleLogin}
              style={styles.buttonTouchable}
            >
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity onPress={handleSignUp}>
            <Text style={{ textAlign: "center", color: "gray" }}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  paragraf: {
    fontSize: 15,
    textAlign: "center",
    color: "gray",
    padding: 10,
  },
  container: {
    height: "auto",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    hegiht: "40%",
    position: "absolute",
    backgroundColor: "white",
    padding: 0,
    top: "30%",
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  inputContainer: {
    width: "60%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 10,
    borderRadius: 10,
  },

  buttonContainer: {
    width: "60%",
    marginTop: 40,
  },
  button: {
    borderRadius: 100,
    marginBottom: 10,
  },

  buttonTouchable: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },

  outlineButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
