import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile', name: 'Profile' }
      ];      
    return (
        <nav className="p-6 bg-pink-300">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <RxCross1 /> : <IoMdMenu />
                }
            </div>
            <ul className={`md:flex  md:bg-pink-300 bg-purple-500 p-6 rounded-xl absolute md:static duration-1000 ${open ? 'top-12' : '-top-60'}`}>
                {
                    routes.map(route => <Link  key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;