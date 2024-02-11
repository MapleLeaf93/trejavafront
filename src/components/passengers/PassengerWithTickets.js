import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TicketOverview from "../tickets/TicketOverview";

export default function PassengerWithTickets(props)
{
    let {id} = useParams();
    const [passenger,setPassenger] = useState({});

    useEffect(
        ()=>
        {
            axios.get("/passengers/"+id+"/tickets").then(
                (responce)=>
                {
                    setPassenger(responce.data);
                }
            )
        },
        []
    );

    return(
        <>
            <div className="row">
                <div className="col-4 p-4">
                    <div class="card sticky-top" style={{top:"100px"}}>
                        <div class="card-body">
                            <h5 class="card-title">{passenger.name} {passenger.surname}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Age: {passenger.age}</h6>
                        </div>
                    </div>
                    <br/>
                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-success justify-content-center" to={"/bookticket/"+id}>Add Ticket</Link>
                    </div>
                    
                </div>
                <div className="col-8 bg-light pt-4">
                   <div className="row">
                        {passenger.ticketBought!=null &&passenger.ticketBought.map(t=> <TicketOverview t={t} key={t.id}/>)}
                   </div>
                </div>
            </div>  
        </>
    ) 
}