import React,{Component} from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput,Image,KeyboardAvoidingView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button,ListItem,CheckBox,Body } from 'native-base';
import { StackNavigator } from 'react-navigation';

export default class signup extends Component {
    static navigationOptions = {
        header: false
    }
  
  render() {
 

    return (
    
      <View style={styles.container}>
        <ImageBackground  style={styles.background} source={require('./images/backgroundone.jpg')} >
        <View style={styles.imagesHolder}>
            <Image style={styles.images} source={require('./images/logo.png')} />
        </View>
        <KeyboardAvoidingView style={styles.body} behavior="padding">
                        <Text style={styles.signUp}>SIGN UP</Text>
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
                      
                             <View style={styles.cont}> 
                                
                                     <Button style={styles.but} onPress={() => this.props.navigation.navigate('Next')} ><Text>GET OTP</Text></Button>
                                  

                            <Item  floatingLabel style={styles.otp}>
                             <Label  style={{ color:"white",textAlign:"center"}}>Enter OTP</Label> 
                          
                                 <Input style={styles.laabel}  />
                                
                             </Item>
                             </View>
                             
                       </Form>
                    
                 </KeyboardAvoidingView>  
                
         </ImageBackground>
      </View>  
    );
  }
}

const styles = StyleSheet.create({

    container : {
        flex:1
    },

    background : {
        height:undefined,
        width:undefined,
        flex:1
    },
    imagesHolder :{
        flex:1,
        justifyContent:"flex-end",
        alignContent:"center"
    },
    images : {
        height:101,
        width:180,
        alignSelf:"center"
    },
    body : {
        flex:2,
        padding:25,
        justifyContent:"center"
    },
    signUp : {
        fontSize:25,color:"white",textAlign:"center"
    },
    laabel : {
        color:"white"
    },
    cont : {
        padding:15,
        alignSelf:"center"
    },
    but : {
        backgroundColor:"white",
        width:100,
        justifyContent:"center",
        borderRadius:5,
        alignSelf:"center"
    },
    otp : {
        width:150
    },
    otpLabel : {
        color:"white",
        textAlign:"center"
    }
})




