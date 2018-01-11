import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ListShow extends React.Component {
    componentDidMount() {
        this.props.fetchList(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.id !== nextProps.match.params.id) {
            return this.props.fetchList(nextProps.match.params.id);
        }
    }

    render () {
      const curList = this.props.list;
      return (
          <div>
              <h1>{curList.title}</h1>
              <div className="incomplete">
                  <label>tasks</label>
              </div>
              <div className="completed">
                  <label>complete</label>
              </div>
          </div>
        );
    }
}

export default withRouter(ListShow);
