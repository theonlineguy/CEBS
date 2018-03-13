import React,{Component} from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput,Image,KeyboardAvoidingView,ScrollView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button,ListItem,CheckBox,Body } from 'native-base';
import { StackNavigator } from 'react-navigation';
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class signup extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          username: '',
          password: '',
        }
      }
    static navigationOptions = {
        header: false
    }
    onChanged(text){
        this.setState({
         username:text
        })
        if(this.state.username.length == 5){
            this.props.navigation.navigate('Next')
        }
       
     }
    _handlePress() {
        alert(this.state.username);
        
      }
  
  render() {
 

    return (
    
      <KeyboardAvoidingView style={styles.container} behavior="padding">
     
        <ImageBackground  style={styles.background} source={require('./images/backgroundone.jpg')} >
        <ScrollView style={{marginTop:100}}>
        <View style={styles.imagesHolder}>
            <Image style={styles.images} source={require('./images/logo.png')} />
           
        </View>
        <Text style={styles.signUp}>SIGN UP</Text>
        <View style={styles.body} >
                        
                        <Form>
                             <Item  floatingLabel >         
                             <Label style={{color:"white"}}>User Id</Label>       
                                <Input style={styles.laabel} />
                             </Item>
                    
                             <Item  floatingLabel >         
                             <Label style={{color:"white"}}>Email Address</Label>       
                                <Input style={styles.laabel} />
                             </Item>
                             <Item  floatingLabel>
                             <Label  style={{color:"white"}}>Mobile No</Label> 
                                 <Input  style={styles.laabel}  />
                             </Item>
                       
                             <Button style={styles.but} onPress={() => this.props.navigation.navigate('Next')} ><Text>GET OTP</Text></Button>
                             
                       </Form>
                  
                 </View>  
                 <View style={styles.cont}> 
                                
                               
                             

                       <Item  floatingLabel style={styles.otp}>
                        <Label  style={{ color:"white",textAlign:"center"}}>Enter OTP</Label> 
                     
                            <Input style={styles.laabel}     value={this.state.username}  onChangeText={(value) => this.onChanged(value)}  />
                           
                        </Item>
                        </View>
                        
         </ScrollView>
         </ImageBackground>
      </KeyboardAvoidingView>  
     
    );
  }
}

const styles = StyleSheet.create({

    container : {
        flex:1,
    },

    background : {
        height:undefined,
        width:undefined,
        flex:1
    },
    imagesHolder :{
        flex:1,
        justifyContent:"flex-end",
        alignContent:"flex-end"
    },
    images : {
        height:101,
        width:180,
        alignSelf:"center"
    },
    body : {
        flex:2,
        padding:25,
        justifyContent:"flex-start"
    },
    signUp : {
        fontSize:25,color:"white",textAlign:"center"
    },
    laabel : {
        color:"white"
    },
    cont : {
        
        padding:15,
        justifyContent:"flex-start",
        alignContent:"center"
    },
    but : {
        backgroundColor:"white",
        width:100,
        justifyContent:"center",
        borderRadius:5,
        alignSelf:"center",
        marginTop:10
    },
    otp : {
        width:150
    },
    otpLabel : {
        color:"white",
        textAlign:"center"
    }
})
