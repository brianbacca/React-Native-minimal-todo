import * as React from "react";
import { todosData } from "../data/todos";
import { FlatList, Text } from "react-native";
import Todo from "./Todo";

export default function ListTodo() {
  console.log(todosData, "aca perro");
  return (
    <FlatList
      data={todosData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(item) => {
        return <Todo {...item.item} />;
      }}
    />
  );
}
