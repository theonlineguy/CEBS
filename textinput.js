import React, { Component } from 'react';
import { Keyboard, TextInput, ScrollView ,StyleSheet,View,Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button,ListItem,CheckBox,Body } from 'native-base';

export default class AwesomeProject extends Component {

  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }
  onChanged(text){
   this.setState({
    username:text
   })
}
  _handlePress() {
    alert(this.state.username);
    alert(this.state.password);
  }

  render() {
    return (
    <ScrollView >
      <View >

        <Text>
          Create Account
        </Text>

        <Text >
          Name
        </Text>

        <TextInput
          
          placeholder="Enter Name"
          returnKeyLabel = {"next"}
          value={this.state.username}
          onChangeText={(value) => this.onChanged(value)}
          
        />

        <Text>
          Name
        </Text>

        <TextInput
         
          placeholder="Enter Name"
          returnKeyLabel = {"next"}
          onChangeText={(text) => this.setState({password:text})}
          
        />

        <Button 
          onPress={() => this._handlePress()}>
            <Text>SUBMIT</Text>
        </Button>

        </View>
      </ScrollView>
    );
  }
}    
