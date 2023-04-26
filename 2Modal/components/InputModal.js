import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const InputModal = ({ isModalVisible, handleModal, addTask }) => {
  const [newTask, setNewTask] = useState("");
  return (
    <Modal visible={isModalVisible} animationType="slide" transparent={true}>
      <View style={styles.ModalContainer}>
        <View>
          <Image source={require("../assets/goal.png")} style={styles.Image} />
        </View>
        <View>
          <TextInput
            placeholder="enter your task"
            style={{
              width: width / 1.5,
              fontSize: 20,
              borderWidth: 0.3,
              padding: 5,
              color: "black",
              backgroundColor: "white",
            }}
            onChangeText={(e) => setNewTask(e)}
            value={newTask}
            onSubmitEditing={() => {
              addTask(newTask);
              setNewTask("");
              console.log(newTask);
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: width / 2,
          }}
        >
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              addTask(newTask);
              setNewTask("");
            }}
          >
            <Text style={styles.buttonText}>Add Task</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainerDelete}
            onPress={() => {
              handleModal();
            }}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default InputModal;

const styles = StyleSheet.create({
  ModalContainer: {
    width: width,
    height: height + 120,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#0A4D68",
    marginTop: -120,
  },
  buttonContainer: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    marginTop: 20,
    flex: 1,
    alignItems: "center",
  },
  buttonContainerDelete: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    marginTop: 20,
    flex: 1,
    alignItems: "center",
  },
  Image: {
    height: 150,
    width: 150,
    marginBottom: 50,
  },
});
