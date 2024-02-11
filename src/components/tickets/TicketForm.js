import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TicketForm(props)
{
    let {p_id,l_id} = useParams();
    let navigate = useNavigate();
    const [tempTicket,setTempTicket] = useState(
        {
            level:"",
            base_price:"",
            passenger_id:p_id,
            line_id:l_id
        }
    )

    function sync(e)
    {
        setTempTicket({...tempTicket,[e.target.name]:e.target.value})
    }

    function clear()
    {
        setTempTicket( {
            level:"",
            base_price:"",
            passenger_id:p_id,
            line_id:l_id
        });
    }

    function insert()
    {
        axios.post("/tickets",tempTicket).then(
            ()=>
            {
                navigate("/passengerdetails/"+tempTicket.passenger_id)
            }
        )
    }

    return(
        <>
            <div className="d-flex justify-content-center text-center">
            <div class="card">
                <div class="card-body">
                    <div class="input-group mb-3 card-title">
                        <span class="input-group-text" >Class</span>
                        <input type="text" class="form-control"name="level" value={tempTicket.level} onChange={sync} />
                    </div>
                    <div class="input-group mb-3 card-title">
                        <span class="input-group-text" >Base Price</span>
                        <input type="number" class="form-control" name="base_price" value={tempTicket.base_price} onChange={sync} />
                    </div>
                    <div>
                        <button className="btn btn-danger me-4" onClick={clear}>CANCEL</button>
                        <button className="btn btn-success " onClick={insert}>SAVE</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}