import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItem from './SideNavItem';

const SideNavBar = props => {
  return (
    <div>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        navStyle={{
          background: '#242424',
          maxWidth: '220px'
        }}
      >
        <SideNavItem />
      </SideNav>
    </div>
  );
};

export default SideNavBar;
