import { useEffect, useState } from "react"
import Card from "./Card";
import { homeData } from "../data/data";

export const Home = () => {
    const [data, setData] = useState({} as homeData);
    const headerList = ["Personal Details", "Who Am I?"]
    const getData = () => {
        fetch(`sampleData.json`)
            .then((response) => {
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
            <div className="row pl-2">
                <div className="card-body bg-light">
                    <div className="col-11 card m-5 p-2 text-center">
                        <div className="card-body bg-light">
                            <a href="https://www.linkedin.com/in/ajay-asok">
                                <img src="linkedin.svg" width="50" height="50" />
                            </a>
                            <a href="https://github.com/AjayAsok/">
                                <img src="github.svg" width="50" height="50" />
                            </a>
                            <a href="https://www.facebook.com/ajay.asok.92">
                                <img src="facebook.svg" width="50" height="50" />
                            </a>
                            <a href="https://www.instagram.com/a__ja__y/">
                                <img src="instagram.svg" width="50" height="50" />
                            </a>
                            <a href="https://join.skype.com/invite/kINSZY1vNEkg">
                                <img src="skype.svg" width="50" height="50" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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
                {/* {headerList.map((header) => {
                    console.log(header)
                    return <Card key={header} header={header} data={data} />
                })} */}
                <Card key="Personal Details" header="Personal Details" data={data} />
                <Card key="Who am I?" header="Who am I?" data={data} />
            </div>
            <div className='row pl-2'>
                <Card key="skills" header="skills" data={data} />
                <Card key="languages" header="languages" data={data} />
            </div>
        </>
    )
}