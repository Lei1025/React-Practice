import React, { Component } from "react";
import { stat } from "fs";
//import classes from "*.module.css";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    //imageUrl: 'https://picsum.photos/200'
    //tags: ["tag1", "tag2", "tag3"]
  };

  /*
  style = {
    fontSize: 10,
    fontWeight:'bold'
  };
*/
  renderTags(){
    if(this.state.tags.length === 0) return <p>There are no tags!</p>;
    return <ul>{this.state.tags.map(tag => (<li key={tag}>{tag}</li>))}</ul>
  }

  handleIncrement = () =>{
    //console.log('Increment Clicked', this);
    this.setState({ value : this.state.value + 1});
  }

  render() {
    //console.log("props", this.props);

    return (
      //只能有一个根节点，可以把所有 element 放到一个 div 里，也可以用React.Fragment包含起来，<React.Fragment>不会被Render 到html里
      <div>
        {/*this.renderTags()*/}

        {/*<img src={this.state.imageUrl}></img>      
        <span style={this.style} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <span style={{fontSize:∏10, fontWeight:'bold'}} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        */}
        
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increament</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>     
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
