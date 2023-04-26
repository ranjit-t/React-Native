import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask) {
      const allTasks = [...tasks, newTask];
      setTasks(allTasks);
      setNewTask("");
    }
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.textContainer}>My Tasks</Text>
        </View>
        <View style={styles.container1}>
          <TextInput
            style={{ width: 200, fontSize: 20, borderWidth: 0.3, padding: 10 }}
            placeholder="Enter A New Task"
            onChangeText={(text) => setNewTask(text)}
            value={newTask}
            onSubmitEditing={addTask}
          />
          <TouchableOpacity style={styles.buttonContainer} onPress={addTask}>
            <Text style={styles.buttonText}>Enter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.buttonContainerDelete}
            onPress={deleteAllTasks}
          >
            <Text style={styles.buttonText}>Delete All</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 4, alignItems: "center", borderTopWidth: 1 }}>
        <Text style={{ fontSize: 25 }}>Your Tasks</Text>
        {tasks.length > 0 ? (
          <FlatList
            data={tasks}
            renderItem={(task) => {
              return (
                <View key={task.index} style={{ position: "relative" }}>
                  <Text style={styles.tasks}>
                    {task.index + 1 + ") " + task.item}
                  </Text>
                  <Text
                    style={styles.taskDelete}
                    onPress={() => {
                      setTasks(tasks.filter((itTask) => itTask !== task.item));
                    }}
                  >
                    {" "}
                    X
                  </Text>
                </View>
              );
            }}
          />
        ) : (
          <Text style={{ fontSize: 15 }}>No tasks in the list</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textContainer: {
    fontSize: 30,
  },
  container1: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    columnGap: 3,
  },
  container2: {
    paddingTop: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  container3: {
    paddingTop: 20,
    borderBottomWidth: 1,
    width: 300,
    alignItems: "center",
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  buttonContainerDelete: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  scrollView: {
    marginTop: 20,
    marginBottom: 20,
    maxHeight: "50%",
  },
  tasks: {
    backgroundColor: "#05BFDB",
    color: "white",
    margin: 5,
    padding: 10,
    width: 300,
    fontSize: 25,
  },
  taskDelete: {
    color: "red",
    position: "absolute",
    fontSize: 30,
    right: 10,
    top: 10,
  },
});
