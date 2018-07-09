import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux';

class ReduxThing extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
               <Text> {this.props.changeData} </Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
return {
    changeData:state.changeData.changeData
}
}

export default connect(mapStateToProps)(ReduxThing);