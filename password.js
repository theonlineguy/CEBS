import React,{Component} from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput,Image,KeyboardAvoidingView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button,ListItem,CheckBox,Body } from 'native-base';

export default class password extends Component {
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
                            <Text style={styles.password}>PASSWORD</Text>
                            <Form>
                                 <Item  floatingLabel >         
                                 <Label style={{color:"white"}}>Password</Label>       
                                    <Input secureTextEntry  style={styles.imp} />
                                 </Item>
                                 <Item  floatingLabel>
                                 <Label  style={{color:"white"}}>Re-Password</Label> 
                                     <Input secureTextEntry style={styles.imp}  />
                                 </Item>
                               
                           
                              
                           </Form>
                           </KeyboardAvoidingView>
                    <Container style={styles.cont}>
                     <Text style={styles.next} onPress={() => this.props.navigation.navigate('Further')}>NEXT</Text>
                   </Container>
                              
         </ImageBackground>
      </View>  
    );
  }
}

const styles = StyleSheet.create ({
  container : {
    flex:1
  },
  background : {
    height:undefined,
    width:undefined,
    flex:1
  },
  imagesHolder : {
    flex:2,
    justifyContent:"flex-end"
  },
  images : {
    height:100,
    width:180,
    alignSelf:"center"
  },
  body : {
    flex:3,
    padding:25,
    justifyContent:"center"
  },
  password : {
    fontSize:25,
    color:"white",
    textAlign:"center"
    ,marginBottom:20
  },
  imp : {
    color:"white"
  },
  cont : {
    flex:1,
    justifyContent:"flex-end"
  },
  next : {
    textAlign:"right",
    fontSize:20,
    marginBottom:10,
    color:"white",
    marginRight:10
  }
})
