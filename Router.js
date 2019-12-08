import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Scene,Router, Actions } from 'react-native-router-flux';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import firebase from 'firebase';
import Login from './Login';
import MainPage from './MainPage';
import FirstPage from './FirstPage';
import SignUp from './SignUp';
import SecondPage from './SecondPage';
import WebPage from './WebPage';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="kimlik">
                    <Scene key="first" component={FirstPage} title="FirstPage" hideNavBar/>
                    <Scene key="login" component={Login} title="LoginPage" hideNavBar/>
                    <Scene key="signup" component={SignUp} title="Sign Up" hideNavBar/>
                </Scene>

                <Scene key="main" navigationBarStyle={{backgroundColor:"#2196F3"}} >
                    <Scene key="list" component={MainPage} title="Basketball Application" titleStyle={{color:"white",textAlign:"center",flex:1}} renderRightButton={renderMainPageRight} renderLeftButton={renderMainPageLeft}/>
                    <Scene key="second" component={SecondPage} title="Geri" titleStyle={{color:"white"}} renderBackButton={renderSecondPageBack}/>
                    <Scene key="webpage" component={WebPage} renderBackButton={renderSecondPageBack}/>
                </Scene>
            </Scene>
        </Router>
    );
};

const renderMainPageRight = () => {
    return(
        <TouchableOpacity onPress={LogOut}>
            <MaterialCommunityIcon name="exit-to-app" size={30} color={"#fff"} style={{marginRight:10}}/>
        </TouchableOpacity>
    )
}

const renderMainPageLeft = () => {
    return(
        <TouchableOpacity>
            <FeatherIcon name="user" size={30} color={"#fff"} style={{marginLeft:10}}/>
        </TouchableOpacity>
    )
}

const renderSecondPageBack = () => {
    return(
        <TouchableOpacity onPress={() => {Actions.pop()}}>
            <AntDesignIcon name="back" size={30} color={"#fff"} style={{marginLeft:10}}/>
        </TouchableOpacity>
    )
}

const LogOut = () => {
    firebase.auth().signOut()
    Actions.pop()
}

export default RouterComponent;