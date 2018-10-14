// Code Goes Here
import React from "react";

export default class Panel extends React.Component
{
    render()
    {
        <div className="panel">
          <div className="panel-header">
          {this.props.title}
          </div>
          <div className="panel-body">
          {this.props.children}
          </div>
        </div>
    }
}

export default class MovieBrowser extends React.Component
{
    render()
    {
        const currentPlayTitle = "Mad max";
        const childWithExtraProp = 
        React.Children.map(this.props.children,child => {
            return React.cloneElement(child,{isPlaying:child.props.title === currentPlayTitle})
        })
        const childWithWrapperDiv =
        React.Children.map(this.props.children,child => {
            return (<div>{child}</div>)
        })
        return (
            <div className="movie-browser">
              {childWithExtraProp}
            </div>
        )
    }