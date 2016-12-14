import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
import { Input, Container, Grid, Button, Icon, Popup } from 'semantic-ui-react';
import NavMenu from './Nav';

import AV from 'leancloud-storage';

import '../css/Login.css'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      isLoginSuccess:true
    }
  }

  componentDidMount() {
    const el = findDOMNode(this.refs.mainbox);
    el.style = "height:"+ document.body.clientHeight +"px";
    
  }

  handleRegistry(e) {
    let user = new AV.User();
    user.setUsername(this.state.username);
    user.setPassword(this.state.password);
    user.signUp().then(function (loginedUser) {
      console.log(loginedUser);
    }, function (error) {
      
    });
    console.log(this.state);
  }

  handleLogin(e) {
    let _this = this;
    AV.User.logIn(this.state.username, this.state.password).then(function(loginedUser){
      console.log(loginedUser);
      _this.setState({
        isLoginSuccess : true
      });
    }, function(error) {
      _this.setState({
        isLoginSuccess : false
      });
      console.log(_this.state);
    });
  }

  handleChangeName = (e,value) => {
    this.setState({
      username : e.target.value
    });
  }

  handleChangePwd = (e,value) => {
    this.setState({
      password : e.target.value
    });
  }

  render() {
    return (
      <div ref="mainbox">
        <NavMenu />
        <div id="floater">
        </div>
        <div className="loginbox">
          <Grid centered columns={1}>
            <Grid.Row id="firstrow">
              <Input iconPosition="left" focus placeholder='昵称'>
                <Icon name="user" />
                <input value={this.state.username} onChange={this.handleChangeName.bind(this)}/>
              </Input>
            </Grid.Row>
              <br />
              <br />
            <Grid.Row>
              <Input ref="pwd" iconPosition="left" focus placeholder='密码'>
                <Icon name="privacy" />
                <input value={this.state.password} type="password" onChange={this.handleChangePwd.bind(this)}/>
              </Input>
            </Grid.Row>
            {
              this.state.isLoginSuccess?null:
              <p id="loginHint">
                亲，您输入的昵称或密码错误，请再试一次~
              </p>
            }
            <Grid.Row>
              <Button.Group>
                <Button type="submit" color="blue" onClick={this.handleLogin.bind(this)}>登录</Button>
                <Button.Or />
                <Button type="submit" color="yellow" onClick={this.handleRegistry.bind(this)}>注册</Button>
              </Button.Group>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Login;