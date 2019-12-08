import React,{ Component} from 'react';
import { Text, View , Image , TouchableOpacity,ImageBackground,Linking } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Actions } from 'react-native-router-flux';

import {Button} from './components/index'

class MainPage extends Component{
    constructor(props){
        super(props)

        this.state = {
            data:this.props.data,
            counter:0
        }

    }

    render(){
        const increment = () =>{
            const i = this.state.counter + 1;
            this.setState({counter:i})
        }

        const decrement = () => {
            if(this.state.counter > 0){
                const i = this.state.counter - 1;
            this.setState({counter:i})
            }
        }
        
        return(
            <View style={{flex:1}}>
                <View style={{flex:2}}>
                    <ImageBackground source={{uri:this.state.data.image}} style={{height:"100%" , width:"100%",justifyContent:"flex-end"}}>
                        <Text style={{color:"black" , fontSize:20,fontWeight:"bold",backgroundColor:"#ffffffbf",paddingLeft:10}}>{this.state.data.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{flex:3}}>
                    <View style={{flex:0.2,flexDirection:"row",padding:10,backgroundColor:"#E0E0E0",elevation:3,margin:10}}>
                        <Image source={{uri:this.state.data.image}} style={{flex:1,resizeMode:"contain",borderRadius:90}}/>
                        <Text style={{flex:4,textAlignVertical:"center",marginLeft:10}}>{this.state.data.artist}</Text>
                    </View>
                    <View style={{flex:0.4,backgroundColor:"#E0E0E0",elevation:3,margin:10}}>
                        <View style={{flexDirection:"row",flex:0.5,justifyContent:"center",alignItems:"center"}}>
                        <TouchableOpacity onPress={decrement}>
                                <Icon name="minus-square-o" color="red" size={30}/>
                            </TouchableOpacity>
                            <Text style={{margin:10,fontSize:15}}>
                                {this.state.counter}
                            </Text>
                            <TouchableOpacity onPress={increment}>
                                <Icon name="plus-square-o" color="green" size={30}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{justifyContent:"center",alignItems:"center",flex:0.5}}>
                            <Button viewStyle={{backgroundColor:"red",borderRadius:45,width:"50%",justifyContent:"center",alignItems:"center",height:"75%"}} textStyle={{color:"white"}}
                            onPress={this.goPay}>Satın Al</Button>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    goPay = () => {
        Actions.webpage({url:this.state.data.url})
    }
}

export default MainPage;