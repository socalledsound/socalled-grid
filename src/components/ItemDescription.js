import React from 'react'


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
        textDecoration : 'none',
      },
      description : {
          width : '20rem',
          color: '#aaa',
          fontSize : '0.8rem',
      }
}

const ItemDescription = ({project}) => {
    return ( 
        <div style={styles.container}>
            {/* <Link to={{ pathname: project.url }} target="_blank" >
                <h4 style={styles.title}>{project.title}</h4>
            </Link> */}
            {/* <a href={project.url} target="_blank" rel="noreferrer">{project.title}</a> */}
            <a href={project.url} style={styles.link}>{project.title}</a>
            <p style={styles.description}>{project.description}</p>
        </div>
     );
}
 
export default ItemDescription;