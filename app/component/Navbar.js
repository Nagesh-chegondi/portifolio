import React from 'react'

function Navbar() {
  return (
    <div className='ml-[400px]'>
      <nav>
        <li className='flex gap-[30px]'>
            <ul>about</ul>
            <ul>skills</ul>
            <ul>project</ul>
            <ul>contact</ul>
        </li>
      </nav>
    </div>
  )
}

export default Navbar
