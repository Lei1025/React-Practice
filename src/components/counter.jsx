import React, { Component } from "react";
import { stat } from "fs";

class Counter extends Component {
  state = {
    count: 0
    //imageUrl: 'https://picsum.photos/200'
  };

  /*
  style = {
    fontSize: 10,
    fontWeight:'bold'
  };
*/

  render() {
    return (
      //只能有一个根节点，可以把所有 element 放到一个 div 里，也可以用React.Fragment包含起来，<React.Fragment>不会被Render 到html里
      <React.Fragment>
        {/*<img src={this.state.imageUrl}></img>      
        <span style={this.style} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <span style={{fontSize: 10, fontWeight:'bold'}} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        */}
        <span className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increament</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
