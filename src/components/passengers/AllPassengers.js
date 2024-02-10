import axios from "axios";
import { useEffect, useState } from "react";
import PassengerOverview from "./PassengerOverview";

export default function AllPassengers(props)
{
    const [passengers,setPassengers] = useState([]);

    useEffect(
        ()=>
        {
            axios.get("/passengers").then(
                (responce)=>
                {
                    setPassengers(responce.data);
                }
            );
        },
        []
    );

    return(
        <>
            <div className="col-9">
                <div className="row gy-5">
                    {
                        passengers.map(p=><PassengerOverview key={p.id} {...p}/>)
                    }
                </div>
            </div>
        </>
    )

}