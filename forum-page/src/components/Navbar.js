import { React, useState } from 'react';
import '../style.css';
import ModalLogin from './ModalLogin';


const Navbar  = () => {
    const [open, setOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    return(
            <header>
                    <h3>Forum Anak IT</h3>
                    <input type='text' placeholder='Search' className="search-query"/>
                    <nav>
                        <ul>
                            <li><button onClick={() => {setOpen(!open)}}>Categories</button></li>
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
                            <li><button  onClick={() => {setOpenLogin(true);}}>Login</button></li>
                            {openLogin && <ModalLogin setOpenModal={setOpenLogin} />}
                            <li><button>Register</button></li>
                        </ul>
                    </nav>
            </header>
    )
}



export default Navbar;