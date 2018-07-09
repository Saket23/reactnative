import React,{Component} from 'react';
import { View,Text } from 'react-native';
import ReduxThing from './Reduxthing';


class Hidden extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <View>
        <Text>{this.props.show}</Text>
        <ReduxThing />
        </View>
        );
    }
}

export default Hidden;