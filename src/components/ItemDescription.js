import React, { useState } from 'react'


const styles = {
    container : {
        marginTop: '1.2rem',
    },
    title : {
        color: '#fafafa',
        width : '100%',
        marginTop: '1.2rem',
        textAlign : 'center',
        // .card__title {
        //   height: 1rem;
        //   width: 7rem;
        //   /* background-color: hsla(0, 0%, 0%, 0.6); */
        //   margin-bottom: 1rem;
        //   /* margin-top: -360px; */
        // }
      },
      link : {
        color: '#add8e6',
        width: '100px',
        height : '2rem',
        textDecoration : 'none',
      },
      hover : {
        width: '100px',
        height : '2rem',
        color: 'aqua',
      },
      description : {
          width : '20rem',
          color: '#aaa',
          fontSize : '0.8rem',
      }
}

const ItemDescription = ({project}) => {


    const [hover, toggleHover ] = useState(false)

    return ( 
        <div style={styles.container}>
            {/* <Link to={{ pathname: project.url }} target="_blank" >
                <h4 style={styles.title}>{project.title}</h4>
            </Link> */}
            {/* <a href={project.url} target="_blank" rel="noreferrer">{project.title}</a> */}
            <a 
                href={project.url} 
                style={hover ? styles.hover : styles.link}
                onMouseEnter={() => toggleHover(!hover)}
                onMouseLeave={() => toggleHover(!hover)}
                >
                    {project.title}
            </a>
            <p style={styles.description}>{project.description}</p>
        </div>
     );
}
 
export default ItemDescription;