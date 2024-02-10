import { Link } from "react-router-dom";

const Navbar = () =>
{
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-expand-sm bg-primary text-light p-2 mb-5">
                <div>
                <div class="navbar-nav">
                    <Link class="navbar-brand" to="/" >Passengers</Link>                    
                    <a class="nav-item nav-link" href="#">Features</a>
                    <a class="nav-item nav-link" href="#">Pricing</a>
                </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;