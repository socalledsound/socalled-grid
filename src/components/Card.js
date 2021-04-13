import React, { Component } from 'react'
import ItemDescription from './ItemDescription';
import '../global.css';

const styles = {
  card : {
    backgroundColor: '#222',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0rem',
    margin : '1rem',
  },

  itemDiv : {
   
      backgroundColor: '#222',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    expandedCard : {    
      cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
      backgroundColor: '#6c6c6c',
      gridColumn: 'span 2',
      gridRow: 'span 2',
      margin : '2rem',
    },

  imageContainer : {
    width : '200px',
    height: '200px'
  },
  image : {
    width: '100%',
    height : '100%',
  },
  imageExpanded : {
    width : '120%',
    height : '120%',
    // marginTop : '-200px',
    padding : '0',
  },
  
}
class Card extends Component {
    state = { expanded: false, scrollTo : 0 };
    randomNumber = Math.floor(Math.random() * 5) + 1;
  
    toggleCard = (e) => {
        const {expanded} = this.state;
        // e.preventDefault();
        // e.stopPropagation();
        // console.log(expanded);
        // if(!expanded){
          const rect = this.elem.getBoundingClientRect();
          console.log(rect);
           const numBoxes = (Math.floor(window.innerWidth/rect.width));
          console.log(numBoxes);
          const isLast = rect.x > ((numBoxes * rect.width) - rect.width * 1.5) ? true : false;
          console.log(isLast);
          isLast ? window.scrollTo({ top : this.elem.getBoundingClientRect().top + window.scrollY + (rect.height * 2)}) : window.scrollTo({top : this.elem.getBoundingClientRect().top + window.scrollY});
          console.log(e.clientY);
          this.setState({ expanded: !expanded });
          //const addScroll = e.clientX > (window.innerWidth * 0.75) ? 700 : 0;
          //console.log(addScroll);
          //e.clientY > 400 ? e.clientY > 600 ? window.scrollTo({top: `${e.clientY * 2.0 + addScroll}`, behavior: 'smooth'}) : window.scrollTo({top: `${e.clientY * 1.5 + addScroll}`, behavior: 'smooth'}) : window.scrollTo({top: e.clientY - 100 + addScroll, behavior: 'smooth'});
          
        //}
        
      
    }  


    render() {
      const { project } = this.props;
      const { scrollTo } = this.state;
      console.log(scrollTo);
      return (
        <div
          className={`card card--${this.randomNumber} ${
            this.state.expanded ? "card--expanded" : ""
          }`}
         // style={ this.state.expanded ? styles.card.expandedCard : styles.card}
          
         
        >
          <div style={styles.itemDiv} onClick={(e) => this.toggleCard(e)} ref={el => (this.elem = el)}>
            {/* <div className="card__avatar" />
            <div className="card__title" />
            <div className="card__description" /> */}
            
            <img style={this.state.expanded ? styles.imageExpanded : styles.image} src={project.imageURL} alt="project.name"/>
            {this.state.expanded ?  
                  <ItemDescription project={project}/>
                  :
                  null
            }
          </div>
        </div>
      );
    }
  }

  export default Card