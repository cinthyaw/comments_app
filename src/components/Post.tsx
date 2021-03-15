import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { compose, spacing, palette } from '@material-ui/system';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import '../css/styles.css';
import CommentsList from './CommentsList';

const Post = () => {
    return <Container>
        <h1>Post Title</h1>
        <p>This is the content of the post</p>
        <div>
            <CommentsList></CommentsList>
        </div>
    </Container>;
}



export default Post;

