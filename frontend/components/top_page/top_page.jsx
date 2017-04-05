import React from 'react';
import SearchContainer from '../search/search_bar_container';
import { Link, withRouter } from 'react-router';

const TopPage = ({signout, router, alwaysOpen, profile, series, genres}) => {

const _signOut = () => {
   signout().then(() => router.push('/'))
 };

 const _redirectToBrowse = () => {
   router.push('/browse');
 };



return(
<header className= "top-page-main">
  <nav className = "">
    <h1 className = "top-page-logo" onClick={_redirectToBrowse}/>
    <h2 className = "nav-browse group">Browse
      <ul>
        <li className ="navbrowse-dropdown-item">
        <button className ="navbrowse-home" onClick={_redirectToBrowse}>Home</button>
        </li>
      </ul>
    </h2>
    <SearchContainer router={ router } alwaysOpen={ alwaysOpen } />
    <h2 className='browse-user group'>{profile.name}
        <ul className='profile-dropdown'>
          <li className='profile-dropdown-item'>
            <button className='profile-sign-out'
              onClick = {_signOut}>Sign out of ChukaFlix</button>
          </li>
        </ul>
    </h2>
  </nav>
</header>
 )
}

export default withRouter(TopPage);
