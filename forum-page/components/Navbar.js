import { React, useState } from 'react';


const Navbar  = () => {
    const [open, setOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);

    return(
        <>
        <nav>
            <ul>
                <li><a href="*">Forum Anak IT</a></li>
                <li><form><input type="text" placeholder="Search" /></form></li>
                <li><button onClick={setOpen(!open)}>Categories</button></li>
                {open && (
                    <div class="dropdown">
                        <ul>
                            <li>Linux</li>
                            <li>Windows</li>
                            <li>MAC OS</li>
                            <li>Android</li>
                            <li>iOS</li>
                        </ul>
                    </div>
                )}
                <li><button>Login</button></li>
                <li><button>Register</button></li>
            </ul>
        </nav>
        
        </>
    )
}



export default Navbar