import React, {Component} from 'react';
import Headroom from 'react-headroom';
import {
    Menu,
    Image,
    Search,
    Label,
    Icon,
    Container,
    Card
} from 'semantic-ui-react'

import './css/Square.css';
import logo from './assets/images/logo.png';
import avatar from './assets/images/avatar.jpg';

class NavMenu extends Component {
    render() {
        return (
            <Menu size="huge" borderless>
                <Menu.Item header name='home'>
                    <Image ui size="mini" src={logo}/>
                    <span>Palm</span>
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Search size="mini"/>
                    </Menu.Item>

                    <Menu.Item>
                        <Image avatar shape='circular' src={avatar}/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

class Tags extends Component {
    render() {
        return (
            <Label.Group color='teal' className="tags">
                <Label as='a'>
                    Fun
                    <Icon name='close'/>
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

class Square extends Component {
    render() {
        return (
            <div className="Square">
                <Headroom>
                    <NavMenu/>
                </Headroom>

                <Container>
                    <Tags/>
                    <PostList/>
                </Container>
                <div style={{
                    'height': '1200px'
                }}/>
            </div>
        );
    }
}

export default Square;
