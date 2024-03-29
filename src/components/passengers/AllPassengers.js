import axios from "axios";
import { useEffect, useRef, useState } from "react";
import PassengerOverview from "./PassengerOverview";

export default function AllPassengers(props)
{
    const [passengers,setPassengers] = useState([]);
    
    const [flicker,setFlicker] = useState(false);


    const [mAge,setMin] = useState(13);
    const [MAge,setMax] = useState(66);
    const nomIn = useRef(null);
    const minIn = useRef(null);
    const maxIn = useRef(null);

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


    function deletePassenger(id)
    {
        axios.delete("/passengers/"+id).then(

            ()=>
            {
                let clone = [...passengers];
                let pos = clone.findIndex(p => p.id==id);
                clone.splice(pos,1);
                setPassengers(clone);
            }
        ).catch(

            ()=>
            {
                alert("Questo passeggero ha dei biglietti attivi, Non puoi eliminarlo");
            }

        )
    }

    function isShowable(p,nom,minAge,maxAge)
    {
        if(
            nom && 
            (
                !p.name.toLowerCase().includes(nom.toLowerCase()) &&
                !p.surname.toLowerCase().includes(nom.toLowerCase())
            )
        )
        return false;

        if(p.age<minAge || p.age>maxAge)
            return false;

        return true;
    }

    return(
        <>
        <div className="row gy-5 px-3">
                <div className="col-3 p-4" style={{minWidth:"180px"}}>
                    <div class="input-group mb-3 " >
                        <span class="input-group-text" id="basic-addon1">Search</span>
                        <input type="text" ref={nomIn} class="form-control" onChange={()=>setFlicker(!flicker)} />
                    </div>
                    <label for="customRange1" class="form-label">Età Min: {mAge}</label>
                    <input type="range" ref={minIn} min={13} max={66} defaultValue={13} class="form-range" onChange={(e) => setMin(e.target.value)}/>
                    <label for="customRange1" class="form-label">Età Max {MAge}</label>
                    <input type="range" ref={maxIn} min={13} max={66} defaultValue={66} class="form-range" onChange={(e) => setMax(e.target.value)}/>
                    <br/><br/>
                </div>
            <div className="col-9 pe-5">
                <div className="row gy-5">
                    {
                        passengers
                        .filter(p=> isShowable(p,nomIn.current.value,minIn.current.value,maxIn.current.value))
                        .map(p=><PassengerOverview key={p.id} {...p} deletePassenger={deletePassenger}/>)
                    }
                </div>
            </div>
            </div>
        </>
    )

}