import React,{ Component,Fragment} from 'react';
import {WebComponent } from './components/index';

class WebPage extends Component{

    constructor(props){
        super(props)
        this.state = {
            url:this.props.url
        }
    }

    render(){
        return(
            <Fragment>         
                <WebComponent url={this.state.url}/>
            </Fragment>
        )
    }
}

export default WebPage;