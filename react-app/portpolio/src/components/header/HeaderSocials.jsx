import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import {FaMicroblog} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://velog.io/@tjdrkr2580" target="_blank"><FaMicroblog/></a>
        <a href="https://github.com/tjdrkr2580" target="_blank"><FaGithubSquare/></a>
        <a href="https://instargram.com/only04_" target="_blank"><GrInstagram /></a>
    </div>
  )
}

export default HeaderSocials