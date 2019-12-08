import React,{ Component} from 'react';
import { Text, View , Image , TouchableOpacity,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import SvgUri from 'react-native-svg-uri';

import {Button} from './components/index';
import Liste from './components/Liste';

class MainPage extends Component{
    
    render(){
        return(
            <ImageBackground source={require("./images/saha.png")} style={{ height:"100%" , width:"100%" , flex:1}}>
              

                <View  style={{flexDirection:"row", flex:1,marginTop:100}}>
                    <View style={{width:50,height:50,marginTop:50,marginLeft:65}}>
                    <Button viewStyle={{backgroundColor:"black",borderRadius:100, padding:25,width:"1%",height:"1%"}}>P1</Button>
                    
                    </View>
                    <View style={{width:50,height:50,marginTop:50,marginLeft:65}}>
                    <Button viewStyle={{backgroundColor:"black",borderRadius:100, padding:25,width:"1%",height:"1%"}}></Button>

                    </View>
                    <View style={{width:50,height:50,marginTop:50,marginLeft:65}}>
                    <Button viewStyle={{backgroundColor:"black",borderRadius:100, padding:25,width:"1%",height:"1%"}}></Button>

                    </View>

                </View>
                <View  style={{flex:1,flexDirection:"row"}}>
                    <View style={{width:50,height:50,marginTop:50,marginLeft:125}}>
                    <Button viewStyle={{backgroundColor:"black",borderRadius:100, padding:25,width:"1%",height:"1%"}}></Button>

                    </View>
                    <View style={{width:50,height:50,marginTop:50,marginLeft:55}}>
                    <Button viewStyle={{backgroundColor:"black",borderRadius:100, padding:25,width:"1%",height:"1%"}}></Button>

                    </View>
                </View>
                <View  style={{flex:1,flexDirection:"row"}}>
                    <View style={{width:50,height:50,marginTop:50,marginLeft:125}}>
                    <Button viewStyle={{backgroundColor:"black",borderRadius:100, padding:25,width:"1%",height:"1%"}}></Button>

                    </View>
                    <View style={{width:50,height:50,marginTop:50,marginLeft:55}}>
                    <Button viewStyle={{backgroundColor:"black",borderRadius:100, padding:25,width:"1%",height:"1%"}}></Button>

                    </View>
                </View>
                <View  style={{flex:1,flexDirection:"row"}}>
                    <View style={{width:50,height:50,marginTop:50,marginLeft:65}}>
                    <Button viewStyle={{backgroundColor:"black",borderRadius:100, padding:25,width:"1%",height:"1%"}}></Button>

                    </View>
                    <View style={{width:50,height:50,marginTop:50,marginLeft:65}}>
                    <Button viewStyle={{backgroundColor:"black",borderRadius:100, padding:25,width:"1%",height:"1%"}}></Button>

                    </View>
                    <View style={{width:50,height:50,marginTop:50,marginLeft:65}}>
                    <Button viewStyle={{backgroundColor:"black",borderRadius:100, padding:25,width:"1%",height:"1%"}}></Button>

                    </View>
                </View>
          </ImageBackground>
        )
    }
}

export default MainPage;

/*<View style={{flex:2}}>
                <Button viewStyle={{backgroundColor:"black",borderRadius:100, padding:20,width:"1%",height:"1%"}}></Button>

                    <ImageBackground source={{uri:'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg'}} style={{height:"100%" , width:"100%",justifyContent:"flex-end"}}>
                        <Text style={{color:"black" , fontSize:20,fontWeight:"bold",backgroundColor:"#ffffffbf",paddingLeft:10}}>Can swift</Text>
                    </ImageBackground>
                </View>
                <View style={{flex:3}}>
                    <View style={{flex:0.2,flexDirection:"row",padding:10,backgroundColor:"#E0E0E0",elevation:3,margin:10}}>
                        <Image source={{uri:'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg'}} style={{flex:1,height:"100%",resizeMode:"center",borderRadius:90}}/>
                        <Text style={{flex:4,textAlignVertical:"center",marginLeft:10}}>Taylor Swift</Text>
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
                            <Button viewStyle={{backgroundColor:"red",borderRadius:45,width:"50%",justifyContent:"center",alignItems:"center",height:"75%"}} textStyle={{color:"white"}}>Satın Al</Button>
                        </View>
                    </View>
                </View>*/