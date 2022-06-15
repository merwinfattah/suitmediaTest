import { React, useState } from 'react';
import '../style.css';
import ModalLogin from './ModalLogin';


const Navbar  = () => {
    const [open, setOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    return(
                    <nav>
                        <h3>Forum Anak IT</h3>
                        <input type='text' placeholder='Search'/>
                        <ul>
                            <li><a href="#Categories" onClick={() => {setOpen(!open)}}>Categories</a></li>
                            {open && 
                                (<div className="dropdown">
                                    <ul>
                                        <li>Linux</li>
                                        <li>Windows</li>
                                        <li>MAC OS</li>
                                        <li>Android</li>
                                        <li>iOS</li>
                                    </ul>
                                </div>)
                            }
                            <li><a href="#Login" onClick={() => {setOpenLogin(true);}}>Login</a></li>
                            {openLogin && <ModalLogin setOpenModal={setOpenLogin} />}
                            <li><a href="#Register">Register</a></li>
                        </ul>
                    </nav>
    )
}



export default Navbar;