/*
SudoCode:Thinking from the perspective of a rendered component

I want to be created from a form
I want to not yet be apart of a DB
I want to have an author under the hood stored as an attribute in myself
I want to utilize emojis and icons
I want to display an image
I want to have a title
I want to be liked and disliked(envied)
I want to allow people to comment on me
I want to allow people to edit/delete comments
I want to have a 'time-stamp' showing elapsed time from when I was created
I want to be sorted by votes, keywords, and latest

I want to be well styled with custom CSS classes

*/





import React, { Component } from 'react';

export class Post extends Component {

  render() {

    return (
      <div className="cred-post">
        <h1>I'm a post component!</h1>
      </div>
    );
  }
}