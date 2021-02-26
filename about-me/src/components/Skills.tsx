import { useEffect, useState } from "react"
import { skills } from "../data/data";

export const Skills = () => {
    const [skillData, setskilldata] = useState({} as skills)

    const getSkillDetails = () => {
        fetch(`skills.json`)
            .then((respose) => {
                console.log(respose)
                return respose.json()
            })
            .then((data) => {
                console.log(data)
                setskilldata(data)
            })
    }
    useEffect(() => {
        getSkillDetails()
    }, [])

    return (<>
        <div className='row pl-2'>

            <div className="col-3 card m-5 p-2 text-left" >
                <div className="card-header bg-primary"><h4>Professional Skills</h4></div>
                <div className="card-body bg-light">
                    <ul className="list-group list-group-flush .text-dark">
                        {skillData && skillData.professional ? skillData.professional.map((proSkill, index) => (
                            <li key={index} className="list-group-item">{proSkill}</li>
                        )) : null}
                    </ul>
                </div>
            </div>
            <div className="col-4 card m-5 p-2 text-left" >
                <div className="card-header bg-primary"><h4>Technical Skills</h4></div>
                <div className="card-body bg-light">
                    <ul className="list-group list-group-flush .text-dark">
                        {skillData && skillData.technical ? skillData.technical.map((techSkill, index) => (
                            <li key={index} className="list-group-item">{techSkill}</li>
                        )) : null}
                    </ul>
                </div>
            </div>
            <div className="col-3 card m-5 p-2 text-left" >
                <div className="card-header bg-primary"><h4>Key Responsibilites</h4></div>
                <div className="card-body bg-light">
                    <ul className="list-group list-group-flush .text-dark">
                        {skillData && skillData.resposibilities ? skillData.resposibilities.map((resposibility, index) => (
                            <li key={index} className="list-group-item">{resposibility}</li>
                        )) : null}
                    </ul>
                </div>
            </div>

        </div>
    </>
    )
}