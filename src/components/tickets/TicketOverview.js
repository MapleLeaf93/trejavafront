import { useState } from "react";

export default function TicketOverview(props)
{
    if(!props.isUpdating)
        return(
            <>
            <div className="col-4 mb-3 d-flex flex-wrap" style={{minWidth:"190px"}}>
                <div class="card" style={{"width":"auto"}}>
                <h6 class="card-title text-center mt-3"> Destinazione: {props.t.destination_station}</h6>
                    <div className="card-body d-flex">
                        <div className="col-6 me-2">
                            <h6 class="card-subtitle mb-1 fw-normal">Orario partenza:</h6>
                            <br/>
                            <h6 class="card-subtitle mb-2 fw-normal">Stazione:</h6>
                            <h6 class="card-subtitle mb-2 fw-normal">Prezzo:</h6>
                        </div>
                        <div class="col-6 text-end border-start border-dark border-opacity-50 pe-1">
                            <h6 class="card-subtitle mb-2 fw-light">{props.t.departure_time}</h6>
                            <br/>
                            <h6 class="card-subtitle mb-2 fw-light">{props.t.departure_station}</h6>
                            <h6 class="card-subtitle mb-2 fw-light">{props.t.effectivePrice} &euro;</h6>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
}