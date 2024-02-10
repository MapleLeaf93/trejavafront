import { Link } from "react-router-dom";

const Navbar = () =>
{
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-primary text-light p-2 mb-5">
                
                <a class="navbar-brand text-light" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
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