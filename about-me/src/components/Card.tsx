import { homeData } from "../data/data";
type Props = {
    header: string,
    data: homeData
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
        return (<div className="col-5 card m-5 p-2" >
            <div className="card-header">{header}</div>
            <div className="card-body bg-light">
                <h6><em>{data ? data.description : "No-data"}</em></h6>
            </div>
        </div>

        )
    }
    if (header === "skills") {
        console.log(data.skills)
        return (<div className="col-5 card m-5 p-2" >
            <div className="card-header">{header}</div>
            <div className="card-body bg-light">
                {data && data.skills ? data.skills.map((skill, index) => (
                    <div className="progress" key={index}>
                        <div className="progress-bar" role="progressbar" style={{ height: "100%", width: skill.percent }}><em>{skill.name}</em></div>
                    </div>
                )) : <div>No Data</div>
                }
            </div>
        </div >
        )

    }
    if (header === "languages") {
        return (<div className="col-5 card m-5 p-2" >
            <div className="card-header">{header}</div>
            <div className="card-body bg-light">
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th scope="col">Language</th>
                            <th scope="col">Speak</th>
                            <th scope="col">Read</th>
                            <th scope="col">Write</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.languages ? data.languages.map((lang, index) => (
                            <tr key={lang.name}>
                                <th scope="row">{lang.name}</th>
                                <td className="text-primary">{lang.speak ? <p className="glyphicon glyphicon-ok-circle"></p> : <p className="glyphicon glyphicon-remove-circle"></p>}</td>
                                <td className="text-primary">{lang.read ? <p className="glyphicon glyphicon-ok-circle"></p> : <p className="glyphicon glyphicon-remove-circle"></p>}</td>
                                <td className="text-primary">{lang.write ? <p className="glyphicon glyphicon-ok-circle"></p> : <p className="glyphicon glyphicon-remove-circle"></p>}</td>
                            </tr>
                        ))
                            : <tr>
                                <th>No Data found
                            </th>
                            </tr>}
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
    return null
}

export default Card