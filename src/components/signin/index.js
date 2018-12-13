import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import EmailAuthMiddleware from '../../store/middlewares';
import Firebase from "react-native-firebase";




 class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    componentDidMount() {
      setTimeout(() => { 


        Firebase.auth().createUserAndRetrieveDataWithEmailAndPassword("a@a.com", "123456789")
            .then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err)
            })
      },1000)
    }
    onSubmit = () => {
        let data = {
            email: this.state.email,
            password: this.state.password
          };
          console.log(data)
        this.props.LogInDispatch(data)
    }
  render() {
    return (
      <View style={styles.container}>
      <Text>Sign In</Text>
      <TextInput  onChange={(text) => this.setState({email:text})}/>
      <TextInput  secureTextEntry onChange={(text) => this.setState({password:text})}/>
      <Button
  onPress={this.onSubmit}
  title="SIGN IN"
  color="#841584"
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


function mapDispatchToProps(dispatch) {
    return {
      LogInDispatch: data => dispatch(EmailAuthMiddleware.SignIn(data))
    };
  }
  function mapStateToProps(state) {
    return {
      LogInState: state
    };
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn);