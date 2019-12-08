import React,{ Component} from 'react';
import { Text, View , Image , TextInput , TouchableOpacity,ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from "./stylesheets/loginPage";
import {Button,EditableText,ListView} from './components/index'

class FirstPage extends Component{
    render(){
        return(
            <ImageBackground source={require("./images/background.jpg")} style={{ height:"100%" , width:"100%" , flex:1}}>
                <View style={{ justifyContent:"center" , alignItems:"center",flex:3}}>
                    <Text style={{ color:"white" , fontSize:40}}>App</Text>
                    <Text style={{ color:"white" , fontSize:16}}>Sign In or Sign Up</Text>
                </View>
                <View style={{justifyContent:"center",alignItems:"center" , flex:1}}>
                    <Button viewStyle={styles.viewStyle} textStyle={styles.textStyle} onPress={() => {
                        Actions.login();
                    }}>Sign In</Button>
                    <Button viewStyle={styles.viewStyle} textStyle={styles.textStyle} onPress={() => {
                        Actions.signup();
                    }}>Sign Up</Button>
                </View>
          </ImageBackground>
        )
    }
}

export default FirstPage;