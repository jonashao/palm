import React, {Component, PropTypes} from 'react';
import {Container,Checkbox} from 'semantic-ui-react';
import PostHeader from './Header';


const CheckItem = ({label}) => {
    return (
        <div className="cha-item">
            <Checkbox label={label}/>
        </div>
    );
}


class Content extends Component {

    static propsType = {
        content: PropTypes.shape({
            information: PropTypes.object.isRequired,
            checklist: PropTypes.array.isRequired
        }).isRequired
    }


    renderChecklist = (checklist) => {
        if (checklist) {
            return checklist.map((item, index) => {
                return <CheckItem key={ index } id={ index } label={ item.header }/>
            })
        }
    }

    render() {
        const {information,checklist} = this.props.content;

        return (
            <Container id='print'>
                <PostHeader  information={information}/>
                <div className="checkbox-list">
                    { this.renderChecklist(checklist) }
                </div>
            </Container>
        );
    }
}

export default Content;