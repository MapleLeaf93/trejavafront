import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function SelectLine (props)
{

    let {id} = useParams();
    const [lines,setLines] = useState([]);

    useEffect(
        ()=>
        {
            axios.get("/allLines").then(
                (responce)=>
                {
                    setLines(responce.data);
                }
            );
        },
        []
    );

    return(
    <>
        <div className="row gy-5">
                        {
                            lines
                            .map(l=>(
                                <div className="col-4 d-flex justify-content-center text-center">
                                    <div class="card" style={{"width":"18rem"}}>
                                        <div class="card-body">
                                            <h5 class="card-title">TO: {l.destination_station}</h5>
                                            <h4 class="card-subtitle mb-2 text-muted">Departure from: {l.departure_station}</h4>
                                            <h4 class="card-subtitle mb-2 text-muted">At: {l.departure_time}</h4>
                                            <h4 class="card-subtitle mb-2 text-muted">Total distance: {l.lenght}</h4>
                                            <Link class="btn btn-primary me-4" to={"/ticketform/"+id+"/"+l.id}>PRENOTA</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
            </div>
    </>
    );
}