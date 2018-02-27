




import React,{Component} from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput,Image,KeyboardAvoidingView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button,ListItem,CheckBox,Body } from 'native-base';

export default class Login extends Component {
  static navigationOptions = {
    header: false
}
  constructor(props){
    super(props)
    this.state={
      one:false,
    }
  }
  
  press(){
        this.setState({
            one:!this.state.one,
       })
  }
  aalert(){
    this.setState({
        one:this.refs.uname.value,
    });
    this.props.navigation.navigate("Chat")
   
    
}
  render() {
  

    return (
    
      <View style={{flex:1}}>
        <ImageBackground  style={{height:undefined,width:undefined,flex:1}} source={require('./images/backgroundone.jpg')} >
      
        <View style={{flex:2,justifyContent:"flex-end",alignContent:"flex-end"}}>
            <Image style={{height:100,width:180,alignSelf:"center"}} source={require('./images/logo.png')} />
        </View>
               	     <Container style={{flex:3,padding:25,justifyContent:"flex-start"}}>
                        
                            <Form>
                                 <Item  floatingLabel >         
                                 <Label style={{color:"white"}}>Mobile no</Label>     
                                 <KeyboardAvoidingView>      
                                    <Input  style={{color:"white"}} />
                                    </KeyboardAvoidingView>    
                                 </Item>
                                 <Item  floatingLabel>
                                 <Label  style={{color:"white"}}>Password</Label> 
                                 <KeyboardAvoidingView>  
                                     <Input secureTextEntry style={{color:"white"}}  />
                                     </KeyboardAvoidingView>  
                                 </Item>
                               
                                     <Text style={{textAlign:"right",color:"white",marginTop:5}}>Forgot Password</Text>
                                        <ListItem style={{borderBottomColor:"transparent"}}>
                                          <CheckBox checked={this.state.one} onPress={this.press.bind(this)} style={{borderColor:"white"}} />
                                          <Text style={{color:"white",marginLeft:5}}>Remember Me</Text>
                                      </ListItem>
                                        
                                          
                              <Button style={{backgroundColor:"white",marginLeft:20,marginRight:20,width:280,justifyContent:"center",borderRadius:5}}  ><Text style={{fontSize:20,color:"darkblue",fontWeight:"300"}}>SIGN IN</Text></Button>
                              
                           </Form>
                     </Container>
                     <View style={{flex:1,flexDirection:"row",justifyContent:"space-around",padding:25}}>
                      <Image style={{height:50,width:50}} source={require('./images/FACEBOOK.png')} />
                      <Image style={{height:50,width:50}} source={require('./images/twitter.png')} />
                      <Image style={{height:50,width:50}} source={require('./images/googleplus.png')} />
                     </View>
                     <View style={{flex:1}}>
                     <Text style={{textAlign:"center",color:"white",marginTop:-30}}>--------------------------or--------------------------</Text>
                               <Text style={{textAlign:"center",color:"white",fontSize:17,marginTop:20}}   onPress={() => this.props.navigation.navigate('Chat')} >New User ?</Text>
                               
                              </View>
                          
         </ImageBackground>
      </View>  
    );
  }
}
