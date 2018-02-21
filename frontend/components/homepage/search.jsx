import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import FontAwesome from 'react-fontawesome';
// import 'font-awesome/css/font-awesome.min.css';


export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.selectTask = this.selectTask.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    const matches = [];
    this.props.tasks.forEach(task => {
      let sub = task.body.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(task.body);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectTask(event) {
    let task = event.currentTarget.innerText;
    this.setState({inputVal: task});
  }

  render() {
    let results = this.matches().map((result, i) => {
      return (
        <li key={i} className="search_result" onClick={this.selectTask}>{result}</li>
      );
    });
    return(
      <div>
        <div className='search'>
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder="&#xf002;"/>
          <ul>
            <ReactCSSTransitionGroup
              transitionName='search'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {results}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
};
