import { homeData } from "../data/data";
import image from "../assets/image.png"
type Props = {
    header: string,
    data: homeData
    // handleAdd: (selectedItem: CartItem) => void
}
const Card: React.FC<Props> = ({ header, data }) => {
    if (header === "Personal Details") {
        return (
            <div className="card m-5 p-2" >
                <div className="card-header bg-primary"><h4>{header}</h4></div>
                <div className="card-body bg-light row">
                    <div className="col-5">
                        <div className="nav-link active"><img className="img-thumbnail" width='500px' src={image} alt="IMG" /></div>
                    </div>
                    <div className="col-5 pt-5">
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
            </div>
        )
    }
    if (header === "Who am I?") {
        return (<div className="col-3 card m-5 p-2" >
            <div className="card-header">{header}</div>
            <div className="card-body bg-light">
                <h6><em>{data ? data.description : "No-data"}</em></h6>
            </div>
        </div>

        )
    }
    if (header === "skills") {
        return (<div className="col-3 card m-5 p-2" >
            <div className="card-header">{header}</div>
            <div className="card-body bg-light">
                <ul>
                    {data && data.skills ? data.skills.map((skill, index) => (
                        <li key={index}>
                            <em>{skill.name}</em>
                        </li>
                    )) : <div>No Data</div>
                    }
                </ul>
            </div>
        </div >
        )

    }
    if (header === "languages") {
        return (<div className="col-3 card m-5 p-2" >
            <div className="card-header">{header}</div>
            <div className="card-body bg-light">
                <div className="table table-stripped">
                    <p>
                        <p>
                            <span>Speak</span>
                            <span>Language</span>
                            <span>Read</span>
                            <span>Write</span>
                        </p>
                    </p>
                    <div>
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
                    </div>
                </div>
            </div>
        </div>
        )
    }
    return null
}

export default Card