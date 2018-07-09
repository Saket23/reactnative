import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput} from 'react-native';
import {connect} from 'react-redux';
import Hidden from './Hidden';

import {fetchData} from './Actions';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      NameText:'',
      submit:false
    }
  }
  onTextChange(event){
    console.log(event);
    this.setState({NameText:event});
  }
  hidden(){
    if(this.state.submit){
      return <Hidden show={this.state.NameText} />
    }
  }

  onSubmit(event){
    console.log(event);
    this.setState({submit:true});
    this.props.fetchData(this.state.NameText);
  }
  render() {
    return (
      <View>
      <Text>Name:</Text>
      {/*<input type="text" name="name" onChange={this.onTextChange.bind(this)}/>*/}
      <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "Email"
      placeholderTextColor = "#9a73ef"
      autoCapitalize = "none"
      onChangeText = {this.onTextChange.bind(this)}/>
      <Button onPress={this.onSubmit.bind(this)} title="Submit"/>
      {this.hidden()}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 1
  }
})

export default connect(null,{fetchData})(App);

//export default App;
