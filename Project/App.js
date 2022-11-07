import * as React from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";

export default class ToDoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      newToDoItem: "",
      listOfToDoItems: [],
    };
  }
  
  // Add To Do item 
  addToDoItem = () => {
    if (this.state.newToDoItem != "") {
      const newToDoItemJSON = {
        id: 1 + Math.random(),
        value: this.state.newToDoItem.slice(),
      };

      const toDoList = this.state.listOfToDoItems;

      toDoList.push(newToDoItemJSON);

      this.setState({
        listOfToDoItems: toDoList,
        newToDoItem: "",
      });
    }
  }
  // Delete To Do item 
  deleteToDoItem(id) {
    const toDoList = this.state.listOfToDoItems;
    const updatedToDoList = toDoList.filter((item) => item.id !== id);
    this.setState({
      listOfToDoItems: updatedToDoList,
    });
  }
  // Update To Do input 
  updateToDoInput(key, value) {
    this.setState({
      [key]: value,
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/f483c726d683e771e44070fbc4c94586' }}/>
        <Text style={styles.title}>
          ToDoNotes
        </Text>
        <Text style={styles.text}>
          By Kaveesha
        </Text>
        <View>
          <TextInput
            placeholder="  Add your to do here..."
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ newToDoItem: text });
            }}
            value={this.state.newToDoItem}
          ></TextInput>
          <View>
            <TouchableOpacity style={styles.button} onPress={this.addToDoItem}>
              <Text style={styles.buttontext}>+</Text>
            </TouchableOpacity>
          </View>

          <View>
            <ScrollView>
              {this.state.listOfToDoItems.map((item) => {
                return (
                  <View style={styles.listview}>
                    <Text style={styles.textstyle}> {item.value}</Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#D63031",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 10,
                      }}
                      onPress={() => this.deleteToDoItem(item.id)}
                    >
                      <Text style={{ color: "white" }}>Done</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0455A4",
  },
  title: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: "#D63031",
    borderRadius: "15px",
    paddingTop:'10px',
    paddingBottom:'10px',
  },
  logo: {
    height: 150,
    marginTop: 'none',
  },
  text: {
    fontSize: 18,
    fontWeight: 500,
    color: 'white',
    marginBottom: '20px',
    textAlign: "center",
  },
  inputBox: {
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 20,
    height: 50,
    marginRight: '20px',
    marginLeft: '20px',
  },
  button: {
    position: "absolute",
    right: 20,
    top: 50,
    backgroundColor: "black",
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  buttontext: {
    color: "#fff",
    fontSize: 26,
  },
  textstyle: {
    fontSize: 20,
    color: "white",
  },
  listview: {
    borderWidth: 2,
    height: 40,
    justifyContent: "space-between",
    borderColor: "#D63031",
    backgroundColor: "#D63031",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});