import React from "react";
import './navbarstyle.scss';



const MenuList = [
    {
        title : 'formValidate',
        link :'/'
    },
    {
        title : 'PassValidate',
        link :'/passValidate'
    },
    {
        title : 'cryptoSearch',
        link :'/cryptoSearch'
    },
]

const Navbar = () => {
    return(
       <nav className="navbar" >
            <ul>
                {MenuList.map(item => 
                    <li>
                        <a href={item.link}>{item.title}</a>
                    </li>
                )}
            </ul>
        </nav> 
    )
    
}


export default Navbar