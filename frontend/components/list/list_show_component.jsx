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
          <div className="item-view list-view-outer slide-in">
            <div className="item-view-inner">
              <h1 className="h1-L">{curList.title}</h1>
              <div className="edit-list-sum">
                <ListEditContainer />
                <div className="list-task-sum">
                  <div className="incomplete doneness">
                      <label>tasks</label>
                  </div>
                  <div className="complete doneness">
                      <label>complete</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(ListShow);
