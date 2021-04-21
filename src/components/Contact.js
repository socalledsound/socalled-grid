import React, { useState } from 'react';

const Contact = () => {

    const [hover, toggleHover] = useState(false);

    return ( 
        <div style={{padding: '2rem'}}>
            <a 
                href="mailto: socalledsound@gmail.com" 
                style={{color: `${hover? 'pink' : 'white'}`, textDecoration: 'none'}} 
                onMouseEnter={() => toggleHover(!hover)}
                onMouseLeave={() => toggleHover(!hover)}
                >send me an email</a>
        </div>
       
     );
}
 
export default Contact;
