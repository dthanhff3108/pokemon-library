import './Header.scss'

function Header() {
    return ( 
        <div className='header'>
            <div className="header-search">
                <input id="search" type="text" />
                <label htmlFor="search">Find a Pokemon</label>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="header-logo">
                <img src="/assets/img/pokemon-removebg.png" alt="" />
            </div>  
        </div>
     );
}

export default Header;