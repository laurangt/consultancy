import React, {useState, useCallback, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    const fullNav = <>
      <div className='lg:text-xl'>
        <NavLink to="/" className='pl-10'>Home</NavLink>
        <Link to="/#contact" className='pl-10'>Contact</Link>
      </div>
    </>

    const toggleNav = <>
      <div className="lg:text-xl text-right">
        <button onClick={handleOpen}>{open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}</button>
        {open ? (
          <ul className="divide-y">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <Link to="/#Contact">Coaching</Link>
            </li>
          </ul>
        ) : null}
      </div>
    </>

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const isBreakpoint = useMediaQuery(768)

return (
    <nav style={{backgroundColor: window.location.pathname === '/' ? 'transparent' : '#162E3B'}} className='flex items-center py-5 px-10 xl:px-40' >
       <div>{isBreakpoint ? toggleNav : fullNav}</div>
    </nav>
  )
}

export default Navbar
