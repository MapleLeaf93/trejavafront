import { Link } from "react-router-dom";

const Navbar = () =>
{
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-expand-sm bg-primary text-light mb-5">
                <div>
                <div class="navbar-nav">
                    <img class="navbar-brand me-3" src="/logo.png" width={"150px"}></img>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li><Link class="nav-item nav-link text-light" to="/" >AllPassengers</Link></li>
                        <li><a class="nav-item nav-link text-light" href="#">Features</a></li>
                        <li><a class="nav-item nav-link text-light" href="#">Pricing</a></li>        
                    </ul>
                </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;