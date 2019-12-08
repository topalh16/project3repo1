import React, { Component} from 'react';
import { ScrollView, View, Image, TouchableOpacity,ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import styles from "./stylesheets/loginPage";
import { Button, EditableText } from './components/index'
import { KeyboardAvoidingView } from 'react-native';


import { emailChanged,
         passwordChanged,
         passwordConfrimChanged,
         adChanged,
         soyadChanged,
         telChanged,
         SignUps } from './actions'


class SignUp extends Component{
   

    render(){
        return(
            <ImageBackground source={require("./images/background.jpg")} style={{height:"100%", width:"100%"}}>
              
                <TouchableOpacity onPress={() => {Actions.pop()}} style={{justifyContent:"center" ,alignItems:"center",width:40,margin:7.5}}>
                    <Image source={require("./images/left-arrow.png")} style={{height:40,width:40}}/>
                </TouchableOpacity>
               
                <KeyboardAvoidingView behavior="padding" enabled>
                   
                    <ScrollView>
               
                        <View style={styles.signupcontainer}>
                            <Button title="DAMN IT" />                           

                            <EditableText placeholder="Ad"
                            viewStyle={styles.editTextView}
                            textStyle={styles.editText}
                            onChangeText={ad => this.props.adChanged(ad)} />

                            <EditableText placeholder="Soyad"
                            viewStyle={styles.editTextView}
                            textStyle={styles.editText}
                            onChangeText={soyad => this.props.soyadChanged(soyad)} />

                            <EditableText placeholder="Telefon Numarası"
                            viewStyle={styles.editTextView}
                            textStyle={styles.editText}
                            onChangeText={tel => this.props.telChanged(tel)} />
                            
                            <EditableText placeholder="Email Address *"
                            viewStyle={styles.editTextView}
                            textStyle={styles.editText}
                            onChangeText={email => this.props.emailChanged(email)} />
                            
                            <EditableText placeholder="Password *"
                            secureTextEntry
                            viewStyle={styles.editTextView}
                            textStyle={styles.editText}
                            onChangeText={password => this.props.passwordChanged(password)} />
                            
                            <EditableText placeholder="Password Confirm *" secureTextEntry={true}                            
                            viewStyle={styles.editTextView}
                            textStyle={styles.editText}
                            onChangeText={password_confrim => this.props.passwordConfrimChanged(password_confrim)} />
                           
                            <Button onPress={()=>this.SignUpPressed()} viewStyle={styles.viewStyle} textStyle={styles.textStyle}>Sign Up</Button>
                        
                        </View>
                     
                     </ScrollView>
                
                </KeyboardAvoidingView>
           
            </ImageBackground>
        )
    }

     SignUpPressed=()=>{

        const { email,password,password_confrim,tel,ad,soyad} = this.props;
        this.props.SignUps(email,password,password_confrim,ad,soyad,tel);  
    }
}

const mapStateToProps2 = ({ kimlikdogrulamaResponse}) => {
    const {email,password,password_confrim,ad,soyad,tel} = kimlikdogrulamaResponse;
    return {
      email,
      ad,
      soyad,
      tel,
      password,
      password_confrim
    }
}
export default connect(mapStateToProps2,{adChanged,soyadChanged,telChanged,emailChanged,passwordChanged,passwordConfrimChanged,SignUps})(SignUp);