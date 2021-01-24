import { useEffect, useState } from "react";
import { Outlet } from "react-router"
import { educationType } from "../data/data";

export const Education = () => {
    const [eduData, setEdudata] = useState([] as educationType[])

    const getEducationalDetails = () => {
        fetch(`education.json`)
            .then((respose) => {
                console.log(respose)
                return respose.json()
            })
            .then((data) => {
                console.log(data)
                setEdudata(data)
            })
    }
    useEffect(() => {
        getEducationalDetails()
    }, [])

    return <>
        <div className='row pl-2'>
            <div className="card-body bg-light">
                {eduData ? eduData.map((edu, index) => (
                    <div key={index} className="col-11 card m-5 p-2 text-left" >
                        <div className="card-header bg-primary"><h4>{edu.course}</h4></div>
                        <div className="card-body bg-light">
                            <ul className="list-group list-group-flush .text-dark">
                                <li className="list-group-item"><h3 className="card-title">
                                    {edu.university}</h3></li>
                                <li className="list-group-item">{edu.yearofstudy}</li>
                                <li className="list-group-item">{edu.percentage}</li>

                            </ul>
                        </div>
                    </div>
                )) : null}
            </div>
        </div>


        <Outlet /> </>
}