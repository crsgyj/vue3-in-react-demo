import React from 'react';
import { watch } from 'vue';
import { sysStore } from './store';


const style = {
  width: '100px',
  lineHeight: '100px',
  display: 'inline-block',
  margin: 20,
  fontSize: 20,
  boxSizing: 'border-box',
  background: 'black',
  color: 'white',
  cursor: 'pointer'
}

class CountPanel extends React.Component {
  stopWatch = null
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.stopWatch = watch(() => sysStore.count, (v) => {
      this.setState({});
    });
  }
  componentWillUnmount() {
    this.stopWatch && this.stopWatch()
  }

  resetCount() {
    sysStore.count = 1;
  }

  render() {
    return (
      <div className="count-panel" style={style} onClick={() => this.resetCount()}>{ sysStore.count }</div>
    );
  }
}

export default CountPanel;
