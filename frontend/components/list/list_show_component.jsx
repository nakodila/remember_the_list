import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ListEditContainer from './edit_list_form_container';


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
          <div className="item-view">
            <div className="item-view-inner">
              <h1>{curList.title}</h1>
              <ListEditContainer />
              <div className="incomplete">
                  <label>tasks</label>
              </div>
              <div className="completed">
                  <label>complete</label>
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(ListShow);
