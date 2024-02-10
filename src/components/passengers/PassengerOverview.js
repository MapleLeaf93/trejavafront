export default function PassengerOverview(props)
{
    return(
        <>
            <div className="col-4 d-flex justify-content-center text-center">
                <div class="card" style={{"width":"18rem"}}>
                    <div class="card-body">
                        <h3 class="card-title">{props.name} {props.surname}</h3>
                        <h4 class="card-subtitle mb-2 text-muted">Age: {props.age}</h4>
                    </div>
                </div>
            </div>
        </>
    );
}