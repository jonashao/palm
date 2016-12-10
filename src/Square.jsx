`use strict`;
import React, { Component } from 'react';
import Headroom from 'react-headroom';
import AV from 'leancloud-storage';
import { Label, Icon, Container, Card, Header } from 'semantic-ui-react';
import NavMenu from './Nav';

import './css/Square.css';

class Tags extends Component {
    render() {
        return (
            <Label.Group color='teal' className="tags">
              <Label as='a'>
                Fun
                <Icon name='close' />
              </Label>
              <Label as='a'>
                Happy
                <Label.Detail>22</Label.Detail>
              </Label>
              <Label as='a'>Smart</Label>
              <Label as='a'>Insane</Label>
              <Label as='a'>Exciting</Label>
            </Label.Group>
            );
    }
}


class Square extends Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {
            items: []
        }
    }


    extra(icon, label) {
        return ( <span className='right floated' style={ { marginLeft: '2rem' } }>                                      <Icon name={ icon } /> { label } </span>)
    }

    fetchData() {
        let _this = this;
        var query = new AV.Query('Post');

        query.limit(10);

        query.find().then(function(results) {
            console.log(results);
            let items = [];
            for (let post of results) {
                let postId = post.get('postId');
                let item = {
                    key: postId,
                    header: (
                    <Header href={ '/' + post.get('postId') }>
                      { post.get('title') }
                    </Header>
                    ),
                    description: post.get('description'),
                    fluid: true,
                    extra: (
                    <div>
                      { post.get('author') }
                      { _this.extra('clock', post.get('updatedAt').toLocaleDateString()) }
                      { _this.extra('like', post.get('heart')) }
                    </div>
                    ),

                };
                items.push(item);
            }

            _this.setState({
                items: items
            });

        }, function(error) {});
    }

    componentDidMount() {
        this.fetchData();
    }


    render() {
        return (
            <div className="Square">
              <Headroom>
                <NavMenu search/>
              </Headroom>
              <Container>
                <Tags/>
                <Card.Group items={ this.state.items } />
              </Container>
            </div>
            );
    }
}

export default Square;
