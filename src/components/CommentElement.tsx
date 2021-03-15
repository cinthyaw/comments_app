import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import '../css/styles.css';
import UserCommentsCard from './usersComments';
import { Comment } from '../typings/Comment';
import { TextareaAutosize, TextField } from '@material-ui/core';


const CommentElement = ({ clickEvent }: any) => {

    const [comment, setComment] = useState('');


    const onClick = () => {
        clickEvent(comment);
        setComment('');
    }

    return (<div>
        <TextField className="full-width" multiline rows="1" variant="outlined" value={comment} onChange={(elem) => setComment(elem.target.value)} />
        <Button color="primary" onClick={onClick}>Submit</Button>
    </div>);
}



export default CommentElement;

