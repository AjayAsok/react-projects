export const Card = (props) => {
    return (
        <div className="col-5 card m-5 p-2" >
            <div className="card-header bg-primary"><h4>{props.header}</h4></div>
            <div className="card-body bg-light">
                {props.data ?
                    <>
                        <ul className="list-group list-group-flush .text-dark">
                            <li className="list-group-item"><h3 className="card-title">{props.data.firstName + " " + props.data.surName}</h3></li>
                            <li className="list-group-item">{props.data.mainDesignation}</li>
                            <li className="list-group-item">{props.data.currentPosition}</li>
                            <li className="list-group-item">{props.data.location}</li>
                        </ul>
                    </> :
                    <p>No data loaded...</p>
                }
            </div>
        </div>
    )
}