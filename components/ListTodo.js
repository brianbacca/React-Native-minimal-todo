import * as React from "react";

import { FlatList, Text } from "react-native";
import Todo from "./Todo";

export default function ListTodo({ todosData }) {
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
