import React, { Component } from 'react';
import Headroom from 'react-headroom';
import AV from 'leancloud-storage';
import { Label, Icon, Container, Card, Header } from 'semantic-ui-react';
import NavMenu from './Nav';

import './css/Square.css';

class Tags extends Component {
    render() {
        let labels = [];
        this.props.items.forEach((text, index) => {
            var item = <Label key={ index } as='a' href={ '/search?q=' + text.title }>
                         { text.title }
                       </Label>;
            labels.push(item);
        });
        return (
            <Label.Group color='teal' className="tags">
              { labels }
            </Label.Group>
            );
    }
}


class Square extends Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {
            items: [],
            tags: []
        }
    }


    extra(icon, label) {
        return ( <span className='right floated' style={ { marginLeft: '2rem' } }>                                      <Icon name={ icon } /> { label } </span>)
    }

    fetchData() {
        let _this = this;
        var query = new AV.Query('Post');
        query.select(['postId', 'title', 'description', 'author', 'updatedAt', 'like', 'heart']);
        query.limit(10);
        query.find().then(function(results) {
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

        query = new AV.Query('Tag');
        query.limit(100);
        query.select(['text']);
        query.find().then(function(results) {
            let items = [];
            for (let tag of results) {
                items.push({
                    'title': tag.get('text')
                });
            }
            _this.setState({
                tags: items
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
                <NavMenu search source={ this.state.tags } />
              </Headroom>
              <Container>
                <Tags items={ this.state.tags.slice(0, 10) } />
                <Card.Group items={ this.state.items } />
              </Container>
            </div>
            );
    }
}

export default Square;
