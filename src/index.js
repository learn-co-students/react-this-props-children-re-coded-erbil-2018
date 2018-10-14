// Code Goes Here
import React from 'react';
class Panel extends React.Component {
    render() {
      return (
        <div className="panel">
          <div className="panel-header">{this.props.title}</div>
          <div className="panel-body">{this.props.children}</div>
        </div>
      );
    }
}
class MovieBrowser extends React.Component {
    render() {
      const currentPlayingTitle = 'Mad Max: Fury Road';
      const childrenWithExtraProp = React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          isPlaying: child.props.title === currentPlayingTitle
        });
      });
   
      return (
        <div className="movie-browser">
          {childrenWithExtraProp}
        </div>      
      );
    }
}

export default Panel;