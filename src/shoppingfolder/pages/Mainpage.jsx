import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import {Gents} from '../data'
import { Ladies } from '../data'
import { useState } from 'react'
import Womencollections from '../components/Womencollections'

function Mainpage() {
    const [gentsfashion]=useState(Gents)
    const [womensfashion]=useState(Ladies)
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsfashion={gentsfashion} />
        <Womencollections womensfashion={womensfashion}/>
        <Footer/>
    </div>
  )
}

export default Mainpage