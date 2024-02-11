import { useState } from "react";

export default function TicketOverview(props)
{
    if(!props.isUpdating)
        return(
            <>
            <div className="col-4 m-1">
                <div class="card" style={{"width":"250px"}}>
                <h6 class="card-title text-center mt-3"> Destinazione: {props.t.destination_station}</h6>
                    <div className="card-body d-flex">
                    
                        <div className="col-6 ">
                            <h6 class="card-subtitle mb-2 fw-normal">Orario partenza:</h6>
                            <h6 class="card-subtitle mb-2 fw-normal">Stazione:</h6>
                            <h6 class="card-subtitle mb-2 fw-normal">Prezzo BASE:</h6>
                        </div>
                        <div class="col-6 text-end border-start border-dark border-opacity-50">
                            <h6 class="card-subtitle mb-2 fw-light">{props.t.departure_time}</h6>
                            <h6 class="card-subtitle mb-2 fw-light">{props.t.departure_station}</h6>
                            <h6 class="card-subtitle mb-2 fw-light">{props.t.base_price} &euro;</h6>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
}