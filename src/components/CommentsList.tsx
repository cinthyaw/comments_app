import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import '../css/styles.css';
import CommentElement from './CommentElement';
import { Comment } from '../typings/Comment';

const CommentsList = () => {

    let commentsArray: Comment[] = [];
    const [comments, setComments] = useState(commentsArray);
    const [inputVisible, setInputVisible] = useState(false);

    const addComment = (comment: string) => {
        const newComment: Comment = {
            content: comment,
            comments: []
        };
        setComments([...comments, newComment]);
        setInputVisible(false);
    }

    

    return <div>
            <ul>
                {comments.map((c: Comment) => <li>
                    <strong>{c.content}</strong>
                    {<CommentsList></CommentsList>}
                </li>)}
            </ul>
            {!inputVisible && <Button color="primary" onClick={() => { setInputVisible(!inputVisible) }}>Reply</Button>}
            {inputVisible && <CommentElement clickEvent={addComment}></CommentElement>}
        </div>;
}



export default CommentsList;

