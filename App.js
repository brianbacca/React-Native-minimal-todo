import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import ListTodo from "./components/ListTodo";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListTodo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get("window").height * 0.1,
  },
});
