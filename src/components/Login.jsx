import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
import { Input, Container, Grid, Button, Icon } from 'semantic-ui-react';
import NavMenu from './Nav';

import '../css/Login.css'

class Login extends Component {

  componentDidMount() {
    const el = findDOMNode(this.refs.mainbox);
    el.style = "height:"+ document.body.clientHeight +"px";
  }

  render() {
    console.log("what");
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
                <input type="text" />
              </Input>
            </Grid.Row>
              <br />
              <br />
            <Grid.Row>
              <Input iconPosition="left" focus placeholder='密码'>
                <Icon name="privacy" />
                <input type="password" />
              </Input>
            </Grid.Row>
            <Grid.Row>
              <Button.Group>
                <Button color="blue">登录</Button>
                <Button.Or />
                <Button color="yellow">注册</Button>
              </Button.Group>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Login;