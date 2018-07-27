import { PullToRefresh} from 'antd-mobile';
import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';

function genData() {
  const dataArr = [];
  for (let i = 0; i < 20; i++) {
    dataArr.push(i);
  }
  return dataArr;
}

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      height: document.documentElement.clientHeight,
      data: [],
    };
  }

  componentDidMount() {
    let a=findDOMNode(this.refs.ptr)
    const hei = this.state.height - a.offsetTop;
    setTimeout(() => this.setState({
      height: hei,
      data: genData(),
    }), 0);
  }

  render() {
    return (<div>
      <PullToRefresh
        damping={60}
        ref='ptr'
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
        direction='up'
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: true });
          setTimeout(() => {
            this.setState({ refreshing: false });
          }, 1000);
          this.setState((prevState) => {
            return {
              data: [...prevState.data, ...[21,22]]
            }
          })
          console.log(this.state.data)
        }}
      >
        {this.state.data.map(i => (
          <div key={i} style={{ textAlign: 'center', padding: 20 }}>
            {this.state.down ? 'pull down' : 'pull up'} {i}
          </div>
        ))}
      </PullToRefresh>
    </div>);
  }
}

export default Demo