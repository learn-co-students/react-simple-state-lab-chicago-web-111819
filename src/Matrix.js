import React, { Component } from 'react';
import Cell from "./Cell"

export default class Matrix extends Component {

  static defaultProps = {
    values: Array(10).fill(Array(10).fill("#F00"))
  }

  genRow = (vals) => {
    return (vals.map((val, i) => <Cell value={val} key={i} />)) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return (this.props.values.map((rowVals, i) => <div className="row" key={i}>{this.genRow(rowVals)}</div>))
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}



// Matrix.defaultProps = {
//   values: Array(10).fill(Array(10).fill("#F00"))
// }

