import React from 'react';
import Card from './Card';
class Grid extends React.Component {
    componentDidMount() {
      // will automatically clean itself up when dom node is removed
    //   animateCSSGrid.wrapGrid(this.grid, { easing : 'backOut', stagger: 10, duration: 400 });
    }
  
    render() {
      let classes = "grid";
      Object.keys(this.props.settings)
        .filter(k => this.props.settings[k])
        .forEach(k => (classes += " " + k));
      return (
        <div className={classes} ref={el => (this.grid = el)}>
          {[...Array(10).keys()].map(i => <Card key={i} />)}
        </div>
      );
    }
  }
 
export default Grid;