import React,{ Component} from 'react';
import { Text, View , Image , TextInput , TouchableOpacity} from 'react-native';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import firebase from 'firebase';
import { connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { emailChanged,passwordChanged } from './actions'
import styles from "./stylesheets/loginPage";
import {Button,EditableText,ListView} from './components/index'
import reducers from './reducers';
import Login from './Login';
import Router from './Router';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp(
      {
        apiKey: "AIzaSyD2NHfhumreSLm-UG7onMzUu2xJK_RCYaM",
        authDomain: "studentproject-4f6dd.firebaseapp.com",
        databaseURL: "https://studentproject-4f6dd.firebaseio.com",
        projectId: "studentproject-4f6dd",
        storageBucket: "studentproject-4f6dd.appspot.com",
        messagingSenderId: "384417585491",
        appId: "1:384417585491:web:1efc990ab037f274"
      }
    );
  }

  render(){
    const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router /> 
      </Provider>
    );
  }
}

const mapStateToProps = ({ kimlikdogrulamaResponse}) => {
    const { email,password } = kimlikdogrulamaResponse;
    return {
      email,password
    }
}

export default App;