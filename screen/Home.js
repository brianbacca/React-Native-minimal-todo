import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import ListTodo from "../components/ListTodo";
import { todosData } from "../data/todos";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [locaData, setLocalData] = React.useState(
    todosData.sort((a, b) => {
      return a.isCompleted - b.isCompleted;
    })
  );
  const [isHidden, setIsHidden] = React.useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    if (isHidden) {
      setIsHidden(false);
      setLocalData(
        todosData.sort((a, b) => {
          return a.isCompleted - b.isCompleted;
        })
      );
      return;
    }
    setIsHidden(!isHidden);
    setLocalData(locaData.filter((todo) => !todo.isCompleted));
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://lh3.googleusercontent.com/a-/AFdZucpn3ucbarAI4yFR-Un37WUSEbKr00qKYYcYoIYvTDs=s260-p-rw-no",
        }}
        style={styles.pic}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Today</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={{ color: "#3478f6" }}>
            {isHidden ? "Showo Completed" : "Hide Completed"}
          </Text>
        </TouchableOpacity>
      </View>
      <ListTodo todosData={locaData.filter((todo) => todo.isToday)} />
      <Text style={styles.title}>Tomorrow</Text>
      <ListTodo todosData={todosData.filter((todo) => !todo.isToday)} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Add")}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    paddingHorizontal: 15,
  },
  pic: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 35,
    marginTop: 10,
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 50,
    right: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  plus: {
    fontSize: 40,
    color: "#fff",
    position: "absolute",
    top: -11,
    left: 8.5,
  },
});
