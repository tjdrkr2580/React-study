import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import {FaMicroblog} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://velog.io/@tjdrkr2580" target="_blank" rel="noreferrer"><FaMicroblog/></a>
        <a href="https://github.com/tjdrkr2580" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
        <a href="https://www.instagram.com/only04_" target="_blank" rel="noreferrer"><GrInstagram /></a>
    </div>
  )
}

export default HeaderSocials