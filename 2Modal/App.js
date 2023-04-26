import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  FlatList,
  Image,
} from "react-native";
import InputModal from "./components/InputModal";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  const addTask = (newTask) => {
    if (newTask) {
      const allTasks = [...tasks, newTask];
      setTasks(allTasks);
      handleModal();
    }
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 40 }}>
        {isModalVisible && (
          <InputModal
            isModalVisible={isModalVisible}
            handleModal={handleModal}
            addTask={addTask}
          />
        )}
        <View>
          <Image source={require("./assets/goal.png")} style={styles.Image} />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 20,
            columnGap: 10,
          }}
        >
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              handleModal();
            }}
          >
            <Text style={styles.buttonText}>Add Task</Text>
          </TouchableOpacity>

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
    justifyContent: "center",
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
    backgroundColor: "#0A4D68",
    color: "white",
    margin: 5,
    padding: 10,
    width: 300,
    fontSize: 25,
    borderRadius: 10,
  },
  taskDelete: {
    color: "red",
    position: "absolute",
    fontSize: 40,
    right: 15,
    top: 5,
  },
  Image: {
    marginTop: -30,
    height: 100,
    width: 100,
    marginBottom: 30,
    marginLeft: 55,
  },
});
