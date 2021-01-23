import { useEffect, useState } from "react"
import { Card } from "./Card";

export const Home = () => {
    const [data, setData] = useState(null);
    const getData = () => {
        fetch(`sampleData.json`)
            .then((response) => {
                console.log(response)
                return response.json();
            })
            .then((myData) => {
                console.log(myData)
                setData(myData)
            })

    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <div className='row pl-2'>
                {/* <div className="col-5 card m-5 p-2" >
                    <div className="card-header bg-primary"><h4>Personal Details</h4></div>
                    <div className="card-body bg-light">
                        {data ?
                            <>
                                <h3 className="card-title">{data.firstName + " " + data.surName}</h3>
                                <ul className="list-group list-group-flush .text-dark">
                                    <li className="list-group-item">{data.mainDesignation}</li>
                                    <li className="list-group-item">{data.currentPosition}</li>
                                    <li className="list-group-item">{data.location}</li>
                                </ul>
                            </> :
                            <p>No data loaded...</p>
                        }
                    </div>
                </div> */}
                <Card header="Personal Details" data={data} />
                <div className="col-5 card m-5 p-2" >
                    <div className="card-header">Who am I?</div>
                    <div className="card-body">
                        <h6><em>{data ? data.description : "No-data"}</em></h6>
                    </div>
                </div>
            </div>
        </>
    )
}