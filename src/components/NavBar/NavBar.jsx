import { useState } from "react";
import Link from "../Link/Link";
import { MdMenuOpen } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


const NavBar = () => {
    const[open, setOpen] = useState(false)

    const routes = [
        { path: "/", name: "Home", id: 1 },
        { path: "/about", name: "About", id: 2 },
        { path: "/services", name: "Services", id: 3 },
        { path: "/contact", name: "Contact", id: 4 },
        { path: "/blog/:id", name: "Blog Post", id: 5 },
    ];

    return (
        <nav className="p-2">
            <div onClick={() => setOpen(!open)} className="md:hidden lg:hidden text-3xl">
                {
                    open === true ?
                    <IoMdClose />
                    : <MdMenuOpen />
                }
            </div>
            <ul className={`md:flex lg:flex absolute duration-700 md:static lg:static ${open ? `top-10`: `-top-40`} bg-slate-400 md:bg-transparent lg:bg-transparent text-black rounded-xl p-1`}>
                {
                    routes.map(route =>
                    <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;