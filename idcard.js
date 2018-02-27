import React,{Component} from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput,Image,Picker,KeyboardAvoidingView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button,ListItem,CheckBox,Body } from 'native-base';
import { Dropdown } from 'react-native-material-dropdown';
export default class idcard extends Component {
constructor(props){
  super(props)
  this.state={
    language:""
  }
}

  static navigationOptions = {
    header: false
}

  render() {
    let data = [{
      value: 'Passport',
    }, {
      value: 'Aadhar Card',
    }, {
      value: 'Pan Card',
    }];
    return (
    
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground  style={styles.background} source={require('./images/backgroundone.jpg')} >
        <View style={styles.imagesHolder}>
            <Image style={styles.images} source={require('./images/logo.png')} />
        </View>
        <Container style={{padding:25}}>
        <View style={{flexDirection: 'row', alignItems: 'center',padding:25}}>
        <View style={{flex:1}}>
          <Text style={{color:"white",marginTop:20}}>ID Card Type</Text>
        </View>
        <View style={{flex:1 }}>
        <Dropdown 
    itemColor='black'
    textColor='white'
    baseColor='white'
    selectedItemColor='black'
        data={data}
      />
     
        </View>
      </View>
   
     
      <View style={{flexDirection: 'row', alignItems: 'center',padding:25}} >
        <View style={{flex:.5}}>
          <Text style={{color:"white",marginTop:5}}>ID Card Number</Text>
        </View>
        <View style={{flex:.5}} >
      
          <Input style={{borderBottomWidth:1,borderBottomColor:"white",color:"white"}} />
      
        </View>
      </View>
    
        <View style={{flex:1,alignSelf:"center"}}>
          <Button bordered light style={{padding:25}}><Text style={{color:"white"}}>Submit</Text></Button>
        </View>
   

        </Container>    
               
         </ImageBackground>
      </KeyboardAvoidingView>  
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
        justifyContent:"center",
        alignContent:"center"
    },
    images : {
        height:101,
        width:180,
        alignSelf:"center"
    },
    body : {
        flex:.5,
        padding:25,
        justifyContent:"flex-start"
    },
    signUp : {
        fontSize:25,color:"white",textAlign:"center"
    },
    laabel : {
        color:"white",
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

