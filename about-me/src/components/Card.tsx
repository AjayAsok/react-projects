import { data } from "../data/data";
type Props = {
    header: string,
    data: data
    // handleAdd: (selectedItem: CartItem) => void
}
const Card: React.FC<Props> = ({ header, data }) => {
    if (header === "Personal Details") {
        return (
            <div className="col-5 card m-5 p-2" >
                <div className="card-header bg-primary"><h4>{header}</h4></div>
                <div className="card-body bg-light">
                    {data ?
                        <>
                            <ul className="list-group list-group-flush .text-dark">
                                <li className="list-group-item"><h3 className="card-title">{data.firstName + " " + data.surName}</h3></li>
                                <li className="list-group-item">{data.mainDesignation}</li>
                                <li className="list-group-item">{data.currentPosition}</li>
                                <li className="list-group-item">{data.location}</li>
                            </ul>
                        </> :
                        <p>No data loaded...</p>
                    }
                </div>
            </div>
        )
    }
    if (header === "Who am I?") {
        console.log("here")
        return (<div className="col-5 card m-5 p-2" >
            <div className="card-header">{header}</div>
            <div className="card-body bg-light">
                <h6><em>{data ? data.description : "No-data"}</em></h6>
            </div>
        </div>

        )
    }
    if (header === "skills") {
        return (<div className="col-5 card m-5 p-2" >
            <div className="card-header">{header}</div>
            <div className="card-body bg-light">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ height: "100%", width: "55%" }}><em>Java</em></div>
                </div>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ height: "100%", width: "55%" }}><em>Java</em></div>
                </div>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ height: "100%", width: "55%" }}><em>Java</em></div>
                </div>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ height: "100%", width: "55%" }}><em>Java</em></div>
                </div>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ height: "100%", width: "55%" }}><em>Java</em></div>
                </div>
            </div>
        </div >)
    }
    return null
}

export default Card