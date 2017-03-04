import React from 'react';
import { Link, withRouter } from 'react-router';

const Welcome = () => {



  return(
  <div className='main'>
     <header className='main-header group'>
       <h1 className='main-logo'/>
       <div className='main-signin group'>
         <Link className='link-signin'>Sign In</Link>
       </div>
     </header>

     <section className='main-description group'>
       <p className='main-catchphrase'>See what's next.</p>
       <p className='main-motto'>Watch anywhere. Cancel anytime.</p>
       <div className='main-signup group'>
         <Link
           className='main-signup-link'>Join Free For a Month
         </Link>
       </div>
       <button className='main-guest-signin'>Sign in as guest</button>
     </section>
   </div>
  );
};


export default Welcome;
