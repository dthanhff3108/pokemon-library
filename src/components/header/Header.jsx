import './Header.scss'

function Header() {
    return ( 
        <div className='header'>
            <div className="header-search">
                <input type="text" />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="header-logo">
                <img src="/assets/img/pokemon-removebg.png" alt="" />
            </div>  
        </div>
     );
}

export default Header;