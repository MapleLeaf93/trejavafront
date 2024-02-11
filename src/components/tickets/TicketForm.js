import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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
                        <span class="input-group-text">Class</span>
                        <input type="text" class="form-control"name="level" value={tempTicket.level} onChange={sync} />
                    </div>
                    <div class="input-group mb-1 card-title">
                        <span class="input-group-text" >Price</span>
                        <input type="number" class="form-control" name="base_price" value={tempTicket.effectivePrice} onChange={sync} />
                    </div>
                    <p className="text-secondary fs-6 mx-5">Discout applied = under 14=20% | Over 65=40%</p>
                    <div>
                    <Link class="btn btn-danger me-2" to={"/bookticket/"+tempTicket.passenger_id}>BACK</Link>
                        <button className="btn btn-warning me-2" onClick={clear}>CLEAR</button>
                        <button className="btn btn-success " onClick={insert}>SAVE</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}