import React, {Component} from 'react';
import Headroom from 'react-headroom';
import NavMenu from './Nav';
import {
    Header,
    Icon,
    Container,
    Card,
    Grid,
    Search,
    List
} from 'semantic-ui-react'

import './css/Search.css';

class TagItem extends Component {
    render() {
        return (
            <List.Item>
                <List.Content floated='right'>
                    {this.props.counter}
                </List.Content>
                <List.Content>
                    <List.Header>{this.props.label}</List.Header>
                </List.Content>
            </List.Item>
        );
    }
}

const taglist = [ < TagItem key = "travel" counter = "51" label = "travel" />, < TagItem key = "shop" counter = "43" label = "shop" />, < TagItem key = "student" counter = "555" label = "student" />
]

const ListExampleFloated = () => (
    <List selection animated divided items={taglist} verticalAlign='middle'></List>
)

class TagFilter extends Component {
    render() {
        return (
            <div className="tag-filter">
                <Header>Tags</Header>
                <ListExampleFloated/>
            </div>
        );
    }
}

const items = [
    {
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
        href: "#/how-are-you",
        fluid: true,
        extra: <div>
                <Icon name='user'/>
                4 Friends</div>
    }, {
        header: 'Project Report - May',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
        href: "#/how-are-you",
        fluid: true,
        meta: 'ROI: 34%'
    }, {
        header: 'Project Report - June',
        description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to b' +
                'eta test.',
        href: "#/how-are-you",
        fluid: true,
        meta: 'ROI: 27%'
    }
]

const PostList = () => (<Card.Group items={items}/>)

class SearchPage extends Component {
    render() {
        return (
            <div className="Square">
                <Headroom>
                    <NavMenu/>
                </Headroom>
                <Container>
                    <div className="search-container">

                        <Grid centered>
                            <Grid.Column mobile={4} tablet={5} computer={3}>
                                <Header
                                    style={{
                                    marginTop: "1rem"
                                }}
                                    color="grey">Search</Header>

                            </Grid.Column>
                            <Grid.Column mobile={12} tablet={11} computer={8}>
                                <div className="search-box">
                                    <Search size="mini"/>
                                </div>
                            </Grid.Column>
                        </Grid>
                        <Grid centered>
                            <Grid.Column mobile={16} tablet={5} computer={3}>
                                <TagFilter/>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={11} computer={8}>
                                <PostList/>
                            </Grid.Column>
                        </Grid>
                    </div>

                </Container>
                <div style={{
                    'height': '1200px'
                }}/>
            </div>
        );
    }
}

export default SearchPage;
