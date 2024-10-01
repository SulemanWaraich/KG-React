import React from 'react'
import Personel from './Personel'
import Address from './Address'
import Preferences from './Preferences'
import Header from './Header'
import Footer from './Footer'

function Form() {
  return (
    <form>
      <Header></Header>
      <Personel></Personel>
      {/* <Address></Address>
      <Preferences></Preferences> */}
      <Footer></Footer>
    </form>
  )
}

export default Form