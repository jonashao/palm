import React, { Component } from 'react';
import Headroom from 'react-headroom';
import { Label, Icon, Container, Card } from 'semantic-ui-react';
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

const items = [
    {
        header: 'Project Report - April',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: 'ROI: 30%',
        href: "/i-love-you",
        fluid: true,
        extra: <div>
                 <Icon name='user' /> 4 Friends</div>
    }, {
        header: 'Project Report - May',
        description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
        href: "/i-love-you",
        fluid: true,
        meta: 'ROI: 34%'
    }, {
        header: 'Project Report - June',
        description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to b' +
            'eta test.',
        href: "/i-love-you",
        fluid: true,
        meta: 'ROI: 27%'
    }
]

const PostList = () => (<Card.Group items={ items } />)

class Square extends Component {
    render() {
        return (
            <div className="Square">
              <Headroom>
                <NavMenu search/>
              </Headroom>
              <Container>
                <Tags/>
                <PostList/>
              </Container>
              <div style={ {
 'height': '1200px'
 } } />
            </div>
            );
    }
}

export default Square;
