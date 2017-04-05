import React from 'react';
import { Link, withRouter } from 'react-router';

const Welcome = ({ currentUser, router, signin, signout }) => {

    const guestSignIn = () => {
      signin(
        {user:{ email: 'guest@guest.com', password: 'guestpass'}}
      ).then(() => {
        router.push('/profiles');
      });
    };

    const _redirectToMain = () => {
      router.push('/');
    };


  return(
  <div className='main'>
     <header className='main-header group'>
       <h1 className='main-logo' onClick={_redirectToMain}/>
       <div className='main-signin group'>
         <Link to='/signin' className='link-signin'>Sign In</Link>
       </div>
     </header>

     <section className='main-description group'>
       <p className='main-catchphrase'>See what's next.</p>
       <p className='main-motto'>Watch anywhere. Cancel anytime.</p>
       <div className='main-signup group'>
         <Link to='/signup'
           className='main-signup-link'>Join Free For a Month
         </Link>
       </div>
       <button className='main-guest-signin' onClick={guestSignIn}>Sign in as guest</button>
     </section>
   </div>
  );
};


export default withRouter(Welcome);
