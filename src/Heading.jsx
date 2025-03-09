const Heading = () => {

    const handleHamburgerClick = () => {
        const nav2 = document.getElementById('nav2');
        nav2.style.display = 'block'
    };

    const handleXClick = () => {
        const nav2 = document.getElementById('nav2');
        nav2.style.display = 'none'
    };

    return(
        <header>
            <h1></h1>
            <nav id="nav1">
                <ul>
                    <li><a href="#coreContent">HOME</a></li>
                    <li><a href="#activeContent">AKTIF</a></li>
                    <li><a href="#archieveContent">ARSIP</a></li>
                </ul>
            </nav>
            <button id="hamburgerButton" onClick={handleHamburgerClick}>≡</button>
            <nav id="nav2">
                <ul>
                    <li id='qaz' onClick={handleXClick}>
                        <button id='qaz1' aria-label="tombolX">X</button>
                    </li>
                    <li><a href="#coreContent">HOME</a></li>
                    <li><a href="#activeContent">AKTIF</a></li>
                    <li><a href="#archieveContent">ARSIP</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Heading;