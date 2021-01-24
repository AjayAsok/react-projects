import { useEffect, useState } from "react";
import { empType } from "../data/data";




export const Employment = () => {

    const [empDetails, setEmpDetails] = useState([] as empType[])

    const getEmploymentDetails = () => {
        fetch(`employmentDetails.json`)
            .then((respose) => {
                console.log(respose)
                return respose.json()
            })
            .then((data) => {
                console.log(data)
                setEmpDetails(data)
            })
    }
    useEffect(() => {
        getEmploymentDetails()
    }, [])

    return (
        <>
            <div className='row pl-2'>
                <div className="card-body bg-light">
                    {empDetails ? empDetails.map((employment, index) => (
                        <div key={index} className="col-11 card m-5 p-2 text-left" >
                            <div className="card-header bg-primary"><h4>{employment.designation}</h4></div>
                            <div className="card-body bg-light">
                                <ul className="list-group list-group-flush .text-dark">
                                    <li className="list-group-item"><h3 className="card-title">
                                        {employment.organisation}</h3></li>
                                    <li className="list-group-item">{employment.location}</li>
                                    <li className="list-group-item">{employment.yearRange}</li>
                                    <li className="list-group-item">{employment.empType}</li>
                                </ul>
                                <ul className="list-group list-group-flush .text-dark">
                                    {employment.technologies ? employment.technologies.map((technology, index) => (
                                        <li className="list-group-item">{technology}</li>
                                    )) : null}
                                </ul>
                                <ul className="list-group list-group-flush .text-dark">
                                    {employment.descriptions ? employment.descriptions.map((description, index) => (
                                        <li className="list-group-item">{description}</li>
                                    )) : null}
                                </ul>
                            </div>
                        </div>
                    )) : null}
                </div>
            </div>
        </>)

}