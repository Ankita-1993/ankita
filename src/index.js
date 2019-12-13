
import React from 'react';
import ReactDOM from 'react-dom';
function OnButton(props) {
    return(
        <button onClick={props.onClick}>
            On
        </button>
    );
}
function OffButton(props) {
    return(
        <button onClick={props.onClick}>
            Off
        </button>
    );
}

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
      
    }
  
    handleClick() {
      this.setState(state =>({
          isToggleOn: !state.isToggleOn
      }));
    }
    render() {
        const isToggleOn = this.state.isToggleOn;
        let button;
        if(isToggleOn) {
            button = <OnButton onClick={this.handleClick}/>
        } else {
            button = <OffButton onClick={event=> window.location.href = '/nextpage'}/>
        }
        return (
            <div>
              <h1>{isToggleOn}</h1>
              {button}
            </div>
        );
    }
}
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );
    
  
