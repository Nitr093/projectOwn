const Nav = (props) => {
    return (
        <>
            <nav>
                <div className="barraInicio">
                    <ul className="holder">
                        <li><a href="/" className="activo">Inicio <i className="fa-solid fa-house"></i></a></li>
                        <li><a href="/hardware">Hardware <i className="fa-solid fa-microchip"></i></a></li>
                        <li><a href="/software">Software <i className="fa-solid fa-window-restore"></i></a></li>
                        {/* <li><a href="#">Seguridad Informatica <i className="fa-solid fa-file-shield"></i></a></li> */}
                        <li><a href="/nosotros">Nosotros <i className="fa-solid fa-user"></i></a></li>
                    </ul>
                </div>
            </nav>
            <script src="https://kit.fontawesome.com/a77bfc87b2.js" crossorigin="anonymous"></script>
        </>
    )
};


export default Nav;