import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


export default function PassengerOverview({id,name,surname,age,deletePassenger})
{
    return(
        <>
            <div className="col-3 d-flex justify-content-center text-center flex-wrap"style={{minWidth:"190px"}}>
                <div class="card">
                    <div class="card-body">
                        <button class="btn btn-outline-dark float-end" onClick={()=> deletePassenger(id)} ><FontAwesomeIcon icon={faTrash} /></button>
                        <br/><br/>
                        <h3 class="card-title">{name} {surname}</h3>
                        <h4 class="card-subtitle mb-2 text-muted">Age: {age}</h4>
                        <br/>
                        <Link class="btn btn-primary" to={"/passengerdetails/"+id}>DETAILS</Link>
                    </div>
                </div>
            </div>
        </>
    );
}