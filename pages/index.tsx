import type { NextPage } from 'next'
import Header from '../src/components/Header'
import MenuButtons from '../src/components/Buttons/MenuButtons'
import Logo from '../src/components/Logo'
import Footer from '../src/components/Footer'
import AdditionalInformation from '../src/components/AdditionalInformation'
import React from 'react'

const Home: NextPage = () => {
  return (
    <div className="m-0 text-center text-medium-brown font-body">
      <Header />
      <MenuButtons />
      <Logo />
      <AdditionalInformation />
      <Footer />
    </div>
  )
}

export default Home