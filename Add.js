import React,{ Component} from 'react';
import { Text, View , Image, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged,passwordChanged,loadingChanged,loginUser } from './actions'
import styles from "./stylesheets/loginPage";
import {Button,EditableText} from './components/index'

class Add extends Component {
    

    render(){
        console.log(this.props.product_name);
        console.log(this.props.product_photo);
        console.log(this.props.product_cost);

        const renderButton = () =>{
            if (this.props.loading) {
                return(
                    <Button viewStyle={styles.viewStyle} textStyle={styles.textStyle} onPress={onButtonPress}>...</Button>
                );
            }
            else{
                return(
                    <Button viewStyle={styles.viewStyle} textStyle={styles.textStyle} onPress={onButtonPress}>Log In</Button>
                )
            }
        }
    
        const onButtonPress = () => {
            this.setState({loaded:true})
            const { email,password } = this.props;
            this.props.loadingChanged(true);
            console.log(this.props.loading);
            this.props.loginUser(email,password)
        }

      return (
          <ImageBackground source={require("./images/background.jpg")} style={{ height:"100%" , width:"100%"}}>
              <View style={{flex:5,justifyContent:"center",alignItems:"center"}}>
                <Image source={require("./images/laptop.png")} style={{height:'50%',width:'50%'}}/>
                <Text style={{color:"white"}}>Welcome</Text>
                <Text style={{color:"white"}}>Login Your Account</Text>
            </View>
            <View style={styles.container}>
                <EditableText
                    placeholder="Email Address" 
                    imageStyle={styles.editTextImage} 
                    viewStyle={styles.editTextView} 
                    textStyle={styles.editText}  
                    imageSrc={require("./images/user_white.png")} 
                    onChangeText={email => this.props.emailChanged(email)}/>
                <EditableText
                    placeholder="Password"
                    secureTextEntry
                    imageStyle={styles.editTextImage} 
                    viewStyle={styles.editTextView} 
                    textStyle={styles.editText}  
                    imageSrc={require("./images/password_white.png")} 
                    onChangeText={ password => this.props.passwordChanged(password)}/>
                {this.props.loading ? <Button viewStyle={styles.viewStyle} textStyle={styles.textStyle} onPress={onButtonPress}>...</Button> : <Button viewStyle={styles.viewStyle} textStyle={styles.textStyle} onPress={onButtonPress}>Log In</Button>}
            </View>
            <View style={{flex:1}}></View>
          </ImageBackground>
      );
    }
}
  

const mapStateToProps = ({ kimlikdogrulamaResponse}) => {
    const { email,password,loading } = kimlikdogrulamaResponse;
    return {
      email,password,loading
    }
}

export default connect(mapStateToProps,{emailChanged,passwordChanged,loadingChanged,loginUser})(Add);