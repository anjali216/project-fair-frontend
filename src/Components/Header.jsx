// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
   
   <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://img.freepik.com/premium-photo/blue-modern-technology-project-background-1_769134-99.jpg '
              height='40' width={'60px'} alt=''
              loading='lazy'
            />
            Project Fair
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}


export default Header