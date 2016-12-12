import React, { Component, PropTypes } from 'react';
import { Container } from 'semantic-ui-react';
import PostHeader from './Post.Header';

class PostContent extends Component {
    static defaultProps = {
        like: false
    }

    static propsType = {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        like: PropTypes.bool,
        description: PropTypes.string,
        checklist: PropTypes.array.isRequired
    }

    render() {
        var _checklist = [];

        const {description, checklist} = this.props;

        checklist.forEach((cha, index) => {
            var chaItem = <CheckItem key={ index } id={ index } label={ cha.header } />;
            _checklist.push(chaItem);
        });

        return (<Container id='print'>
                  <PostHeader {...this.props}/>
                  <div className="post-intro">
                    <p>
                      { description }
                    </p>
                  </div>
                  <div className="checkbox-list">
                    { _checklist }
                  </div>
                </Container>);
    }
}

export default PostContent;
