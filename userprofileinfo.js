import React,{Component} from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput,Image,KeyboardAvoidingView,ScrollView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button,ListItem,CheckBox,Body } from 'native-base';
import { StackNavigator } from 'react-navigation';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

export default class signup extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          username: '',
          password: '',
          date:moment().format("DD-MM-YYYY")
        }
      }
    static navigationOptions = {
       title:"Edit Profile",
       headerStyle: {
        backgroundColor: '#0bd4b8'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: "normal",
      },
    }
    render(){
      let data = [{
        value: 'Male',
      }, {
        value: 'Female',
      }, {
        value: 'Other',
      }];
      return(
       
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={100}>
          <ScrollView>
            <View style={styles.first}>
            <Image style={styles.images} source={require('./images/logo.png')} />
            </View>
            <View style={styles.second}>
            <Form>
                             <Item  floatingLabel >         
                             <Label>First Name</Label>       
                                <Input  />
                             </Item>
                    
                             <Item  floatingLabel >         
                             <Label >Last Name</Label>       
                                <Input  />
                             </Item>
                             <View style={{padding:10,width:210}}>
                             <Dropdown 
                                itemColor='black'
                                textColor='black'
                                baseColor='black'
                                selectedItemColor='black'
                                data={data}
                                label="Gender"
                                />
                                </View>
                                <Item ><Label > Date Of Birth</Label>  
                                <DatePicker
                                      style={{width:250}}
                                      date={this.state.date}
                                      mode="date"
                                      showIcon={false}
                                      placeholder="DD-MM-YYYY"
                                      format="DD-MM-YYYY"
                                      confirmBtnText="Confirm"
                                      cancelBtnText="Cancel"
                                      customStyles={{
                                         
                                        dateInput: {
                                          
                                          borderBottomWidth: 0,
                                          borderLeftWidth:0,
                                          borderRightWidth:0,
                                       

                                                                    height: 50,
                                                                    paddingTop:5,
                                                                    paddingLeft:10
                                        
                                        },
                                       
                                        // ... You can check the source to find the other keys. 
                                      }}
                                      onDateChange={(date) => {this.setState({date: date})}}
                                    />
                                    </Item>
                                     <Item  floatingLabel >         
                             <Label>Address</Label>       
                                <Input  />
                             </Item>
                       </Form>
            </View>
           </ScrollView>
        </KeyboardAvoidingView>
       
      )
    }
}

const styles = StyleSheet.create ({
  container : {
      flex:1,
      
  },
  first : {
    flex:2,
   
  },
  second : {
    flex:2,
    marginBottom:10
  },
  images : {
    height:250,
    width:180,
    alignSelf:"center",
    justifyContent:"flex-end"
},


})
