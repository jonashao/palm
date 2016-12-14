import React, {PropTypes} from 'react';
import Radium from 'radium';
import {Icon} from 'semantic-ui-react';

const styles = {
    leftM: {
        marginLeft: '.5rem'
    },

    rightM: {
        marginRight: '.5rem'
    },

    bothM: {
        marginLeft: '.5rem',
        marginRight: '.5rem'
    }
};

const iPrint = <Icon link name='print' onClick={window.print}/>;
const iFetch = <Icon link name='hand lizard'/>;
const iLike = <Icon link name='heart'/>
const iDisLike = <Icon link name='empty heart'/>

let ifLike = (isLike) => (isLike
    ? iLike
    : iDisLike);

const PostHeader = ({title, author, date, like}) => (
    <div className="post-information">
        <h1>{title}</h1>
        <div className="secondaryText">
            <span style={styles.rightM}>{author}</span>
            ·
            <span style={styles.leftM}>{date}</span>
            <span className='printExcept'>
                <span style={styles.leftM}>{ifLike(like)}</span>
                <span style={styles.leftM}>{iPrint}</span>
                <span style={styles.leftM}>{iFetch}</span>
            </span>
        </div>
    </div>
);

PostHeader.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    like: PropTypes.bool
}

export default Radium(PostHeader);
