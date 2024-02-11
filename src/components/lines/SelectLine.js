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
                                <div className="col-4 d-flex justify-content-center text-center flex-wrap "style={{"minWidth":"180px"}}>
                                    <div class="card" style={{"width":"auto", "minWidth":"200px"}}>
                                    <h5 class="card-title text-center mt-3"><b>Destination:</b> {l.destination_station}</h5>
                                        <div class="card-body d-flex">
                                                <div className="col-6 ">
                                                    <h6 class="card-subtitle mb-2 fw-normal">Departure from:</h6>
                                                    <h6 class="card-subtitle mb-2 fw-normal">At Time:</h6>
                                                    <br/>
                                                    <h6 class="card-subtitle mb-4 fw-normal">Total distance:</h6>
                                                    <h6 class="card-subtitle mb-2 fw-normal">Expected Arrival:</h6>
                                                    <br/>
                                                    <h6 class="card-subtitle fw-normal">Expected duration:</h6>
                                                </div>
                                                <div className="col-6 text-end border-start border-dark border-opacity-50">
                                                    <h6 class="card-subtitle mb-2 fw-light">{l.departure_station}</h6>
                                                    <h6 class="card-subtitle mb-3 fw-light">{l.departure_time}</h6>
                                                    <h6 class="card-subtitle mb-2 fw-light">{l.lenght} km</h6>
                                                    <h6 class="card-subtitle mb-4 fw-light">{l.arrivalTime}</h6>
                                                    <h6 class="card-subtitle fw-light">{l.duration}</h6>
                                                </div>
                                        </div>
                                        <Link class="btn btn-primary" to={"/ticketform/"+id+"/"+l.id}>PRENOTA</Link>
                                    </div>
                                </div>
                            ))
                        }
            </div>
    </>
    );
}