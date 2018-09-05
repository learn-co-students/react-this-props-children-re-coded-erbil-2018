// Code Goes Here
import React from 'react'
import Panel from './Panel'; 
import MovieBrowser from './MovieBrowser'; 


export default class Panel extends React.Component {
    render() {
      return (
        <div>
        <VideoPlayer>
         <VideoHeader>
           <h1 className="video-title">The Simpsons</h1>
         </VideoHeader>
         <VideoControls />
      </VideoPlayer>

    <Panel 
      title="Browse for movies" 
        body={
          <div>
            <div>Movie stuff...</div>
            <div>Movie stuff...</div>
            <div>Movie stuff...</div>
            <div>Movie stuff...</div>
          </div>
        }>
      </Panel>

      <MovieBrowser>
        <Movie title="Mad Max: Fury Road" />
        <Movie title="Harry Potter & The Goblet Of Fire" />
      </MovieBrowser>
      </div>
      );
    }
  }
