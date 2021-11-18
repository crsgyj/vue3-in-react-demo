import './App.css';
import React from 'react';
import { watch } from 'vue';
import { sysStore } from './store';
import CountPanel from './CountPanel'

class App extends React.Component {
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

  addCount() {
    sysStore.count++;
  }

  render() {
    return (
      <div className="App">
        <div>
          <p>son:</p>
          <CountPanel></CountPanel>
        </div>
        <div>
          <p>father:</p>
          <span style={{ marginRight: 20}}>{sysStore.count}</span>
          <button onClick={() => this.addCount()}>+1</button>
        </div>
      </div>
    );
  }
}

export default App;
