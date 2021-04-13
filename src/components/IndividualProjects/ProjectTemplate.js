import React, {useState, useEffect} from 'react'

import './ProjectTemplate.scss';

import ProjectsData from '../../assets/docs/projects.json';

import BottomCushion from '../BottomCushion/BottomCushion';
import SkillItem from '../Home/components/SkillItem';

const ProjectTemplate = ({match}) => {

    const id = match.params.id;

    const [data,setData] = useState(null);
    // const [details, setDetails] = useState("");

    useEffect(()=>{
        ProjectsData.forEach((project)=>{
            if(project.id === id) setData(project);
        });
    },[id])

    return data && (
        <main className={"individual-project"}>
            <h1 className="heading" data-backdrop={data.heading}>{data.heading}</h1>
            {
                data.details.map((line,index) =>{
                    return <p key={index} className={"details"}>{line}<br/><br/></p>                
                })
            }

            <h3>Technologies Used:</h3>
            <div className="items-container">
                {
                    data.technologies.map((item,index)=>{
                        return <SkillItem key={index}>
                            <img src={require(`../../assets/images/${item}`).default} alt=""/>
                        </SkillItem>
                    })
                }
            </div>
            <BottomCushion/>
        </main>
    )
}

export default ProjectTemplate
