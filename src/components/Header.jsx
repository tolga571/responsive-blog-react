import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {

  const [isNavShow, setIsNavShow] = useState(window.innerWidth > 1024 ? true : false)

  const closeNavHandler = () => {
    if (window.innerWidth < 1024) {
      setIsNavShow(false)
    } else {
      setIsNavShow(true)
    }
  }

  return (
    <nav>
      <div className='container nav-container'>
        <Link className='nav-logo'>
          <h3>Fire S<span>tac</span>K</h3>
        </Link>

        {isNavShow &&
          <ul className='nav-menu'>
            <li><Link to={'/profile/id'} onClick={closeNavHandler}>Beg Joker</Link></li>
            <li><Link to={'/create'} onClick={closeNavHandler}>Create Joker</Link></li>
            <li><Link to={'/authors'} onClick={closeNavHandler}>Authors</Link></li>
            <li><Link to={'/logout'} onClick={closeNavHandler}>Logout</Link></li>
          </ul>
        }


        <button className='nav-toggle-button btn' onClick={() => setIsNavShow(!isNavShow)}>
          {
            isNavShow ?  <AiOutlineClose /> : <FaBars />
          }

        </button>
      </div>
    </nav>
  )
}

export default Header