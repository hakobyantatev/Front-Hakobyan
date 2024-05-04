import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import './Header.css'
import { useEffect, useState, useRef } from "react";
import PropTypes from 'prop-types'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


export default function Header({setPosts, originaPosts}) {
  const [search, setSearch] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [scrollPosition, setScrollPosition] = useState(0);
  const [seeHamburg, setSeeHamburg] = useState(false)
  const navRef = useRef(null); 

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleChange =(e) =>{
    setInputValue(e.target.value);
    const filter = originaPosts.filter(post =>
      post.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
      post.text.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setPosts(filter)
  }

  const handleHamburgerClick = (e) => {
    e.stopPropagation();
    setSeeHamburg(true);
  };

  const handleOutsideClick = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setSeeHamburg(false);
    }
  };

  return (
    <>
      <div className={`Header ${scrollPosition > 200 ? 'scroll-up' : ''}`}>
        <div className="logo">
          <div className="container">
            <RxHamburgerMenu className="hamburger" onClick={handleHamburgerClick}/>
            <img src="Logotype.png" alt="Logo" />
            {search ?
              <input type="search" value={inputValue} onBlur={() => setSearch(false)} onChange={handleChange}/>
              :
              <IoIosSearch className="search" onClick={() => setSearch(!search)}/>
            }
          </div>
        </div>
        <div ref={navRef} className={`nav ${seeHamburg ? 'see' : ''}`}>
          <div className="container">
            <ul className="first-ul">
              <div className="img">
                <img src="Logotype.png" alt="Logo" />
                <IoMdClose onClick={() => setSeeHamburg(false)}/>
              </div>
              <li><a href="#">Demos<IoIosArrowDown /></a></li>
              <li className="post"><a href="#">Post<IoIosArrowDown /></a>
                <ul className="post-first">
                  <li><a href="#">Post Header</a><IoIosArrowForward /></li>
                  <li><a href="#">Post Header</a><IoIosArrowForward /></li>
                  <li><a href="#">Post Header</a><IoIosArrowForward /></li>
                  <li><a href="#">Post Header</a><IoIosArrowForward /></li>
                </ul>
              </li>
              <li><a href="#">Features<IoIosArrowDown /></a></li>
              <li><a href="#">Categories<IoIosArrowDown /></a></li>
              <li><a href="#">Shop<IoIosArrowDown /></a></li>
              <li><a href="#">Buy Now</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  setPosts: PropTypes.func,
  originaPosts: PropTypes.array
}