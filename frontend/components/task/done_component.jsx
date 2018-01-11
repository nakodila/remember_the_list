import React from 'react';

const DoneTask = (props) => {

  const update = (field) => {

    return (e) => {
      // this.setState({[field]: !this.state.done });
      const task = Object.assign({}, props.task);
      task.done = !task.done;
      props.updateTask(task)
    };
  };

  return (
    <div>
        <input type="checkbox"
        onChange={update('done')}
        checked={props.task.done}
        />
    </div>
  );
}

export default DoneTask;
