import React, {Component} from 'react';
import './App.css';
import Immutable from 'immutable';

class InputText extends Component {

  constructor(props) {
    super(props);
    this.state = ({text: this.props.text});
    this.handleChange = this
      .handleChange
      .bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value})
  }

  render() {
    return <input
      className={this.props.className}
      placeholder={this.props.placeholder}
      value={this.state.text}
      onChange={this.handleChange}/>;
  }
}

class Introduction extends Component {
  render() {
    return (
      <div className="introduction">
        <li>
          <InputText className="h1" placeholder="Title"/>
        </li>
        <li>
          <InputText className="h3" placeholder="author"/>
        </li>
      </div>
    );
  }
}

class ChaItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    };

    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleKeyDown = this
      .handleKeyDown
      .bind(this);
  }

  handleChange(event) {
    this
      .props
      .handleChange(this.props.index, event);
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this
        .props
        .createChaItem((this.props.index + 1));
    } else if (this.props.text.length === 0 && event.key === 'Backspace') {
      this
        .props
        .deleteChaItem(this.props.index);
    }
  }

  render() {
    return (
      <li>
        <input
          onKeyDown={this.handleKeyDown}
          className="chaItem"
          onChange={this.handleChange}
          placeholder="What to do?"
          value={this.props.text}/>
      </li>
    );
  }
}

class ChaList extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this
      .handleChange
      .bind(this);
  }

  handleChange(index, event) {
    this
      .props
      .handleListChange(index, event);
  }

  render() {
    var chaList = [];
    this
      .props
      .chaList
      .forEach((cha, index) => {
        var chaItem = <ChaItem
          ref={index}
          key={index}
          index={index}
          text={cha.text}
          needFocuse={cha.needFocuse}
          createChaItem={this.props.createChaItem}
          deleteChaItem={this.props.deleteChaItem}
          handleChange={this.handleChange}/>;
        chaList.push(chaItem);
      });

    return (
      <ul className="chaList">
        {chaList}
      </ul>
    );
  }
}

class FunctionalButtons extends Component {
  render() {
    return <button>Submit</button>
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      chaList: Immutable.List(),
      introduction: {
        "title": "",
        "author": ""
      }
    });

    this.handleListChange = this
      .handleListChange
      .bind(this);
    this.createChaItem = this
      .createChaItem
      .bind(this);
    this.deleteChaItem = this
      .deleteChaItem
      .bind(this);
  }

  handleListChange(index, event) {
    this.setState({
      chaList: this
        .state
        .chaList
        .update(index, function (item) {
          return ({text: event.target.value});
        })
    });
  }

  componentWillMount() {
    // load data
    this.setState({
      chaList: this
        .state
        .chaList
        .push({text: ""})
    })
  }

  createChaItem(index) {
    this.setState({
      chaList: this
        .state
        .chaList
        .insert(index, {
          text: "",
          needFocuse: true
        })
    });

  }

  deleteChaItem(index) {
    if (index > 0) {
      this.setState({
        chaList: this
          .state
          .chaList
          .delete(index)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Introduction data={this.state.introduction}/>
        </div>
        <div className="App-intro">
          <ChaList
            chaList={this.state.chaList}
            deleteChaItem={this.deleteChaItem}
            createChaItem={this.createChaItem}
            handleListChange={this.handleListChange}/>
        </div>
        <FunctionalButtons/>
      </div>
    );
  }
}

export default App;