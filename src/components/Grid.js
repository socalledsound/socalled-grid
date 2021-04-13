import React from 'react';
import { wrapGrid } from 'animate-css-grid'
import Card from './Card';
import { projects } from '../assets/projects';
class Grid extends React.Component {
    componentDidMount() {
      // will automatically clean itself up when dom node is removed
    //   animateCSSGrid.wrapGrid(this.grid, { easing : 'backOut', stagger: 10, duration: 400 });
      wrapGrid(this.grid, { easing : 'backOut', stagger: 10, duration: 400 })
    }
  
    render() {
      let classes = "grid";
      Object.keys(this.props.settings)
        .filter(k => this.props.settings[k])
        .forEach(k => (classes += " " + k));
      return (
        <div className={classes} ref={el => (this.grid = el)}>
          {/* {[...Array(10).keys()].map(i => <Card key={i} />)} */}
          { projects.map( project => <Card key={project.id} project={project}/>)}
        </div>
      );
    }
  }
 
export default Grid;