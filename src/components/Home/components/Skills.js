import React from 'react'

import SkillItem from './SkillItem';

//Images Imports
import HTML5 from '../../../assets/images/html.png'
import CSS3 from '../../../assets/images/css.png'
import JavaScript from '../../../assets/images/javascript.svg'
import Sass from '../../../assets/images/sass.png'
import ReactJS from '../../../assets/images/reactjs.png'
import AngularJS from '../../../assets/images/angularjs.png'
import CPP from '../../../assets/images/c++.png'
// import CSharp from '../../../assets/images/csharp.png'
import MySQL from '../../../assets/images/mysql.png'
import Firebase from '../../../assets/images/firebase.png'
import MongoDB from '../../../assets/images/mongodb.svg'
import PHP from '../../../assets/images/php.png'
import Java from '../../../assets/images/java.png'

import Bootstrap from '../../../assets/images/bootstrap-solid.svg'
import Eclipse from '../../../assets/images/eclipse_logo.png'
import Figma from '../../../assets/images/figma-logo.svg'
import Github from '../../../assets/images/github-logo.png'
import Git from '../../../assets/images/git-logo.png'
import IntellIJ from '../../../assets/images/intellij-logo.svg'
import JQuery from '../../../assets/images/jQuery-Logo.png'
import JQM from '../../../assets/images/jQuery_Mobile.png'
import Netbeans from '../../../assets/images/netbeans-logo.png'
import Postman from '../../../assets/images/postman_logo.png'
import Springboot from '../../../assets/images/springboot-logo.svg'
import VSCode from '../../../assets/images/vs-code-logo.svg'


const Skills = () => {
    return (
        <div className={"skills"}>
            <h1>Skills</h1>
            <div className="items-container">
                <SkillItem>
                    <img src={HTML5} alt="HTML Logo" />
                    <p>HTML 5</p>
                </SkillItem>
                <SkillItem>
                    <img src={CSS3} alt="HTML Logo" />
                    <p>CSS 3</p>
                </SkillItem>
                <SkillItem>
                    <img src={JavaScript} alt="HTML Logo" />
                    <p>JavaScript</p>
                </SkillItem>
                <SkillItem>
                    <img src={Sass} alt="HTML Logo" />
                    <p>Sass</p>
                </SkillItem>

                <SkillItem>
                    <img src={ReactJS} alt="HTML Logo" />
                    <p>ReactJS</p>
                </SkillItem>

                <SkillItem>
                    <img src={AngularJS} alt="HTML Logo" />
                    <p>AngularJS</p>
                </SkillItem>

                <SkillItem>
                    <img src={CPP} alt="HTML Logo" />
                    <p>C++</p>
                </SkillItem>

                {/* <SkillItem>
                    <img style={{
                        width: "90px"
                    }} src={CSharp} alt="HTML Logo"/>
                    <p>C#</p>
                </SkillItem> */}

                <SkillItem>
                    <img src={MySQL} alt="HTML Logo" />
                    <p>MySQL</p>
                </SkillItem>

                <SkillItem>
                    <img src={Firebase} alt="HTML Logo" />
                    <p>Firebase</p>
                </SkillItem>

                <SkillItem>
                    <img src={MongoDB} alt="HTML Logo" />
                    <p>MongoDB</p>
                </SkillItem>

                <SkillItem>
                    <img src={PHP} alt="HTML Logo" />
                    <p>PHP</p>
                </SkillItem>

                <SkillItem>
                    <img src={Java} alt="HTML Logo" />
                    <p>Java</p>
                </SkillItem>

                <SkillItem>
                    <img src={Bootstrap} alt="Bootstrap Logo" />
                    <p>Bootstrap</p>
                </SkillItem>

                <SkillItem>
                    <img src={Eclipse} alt="Eclipse Logo" />
                    <p>Eclipse IDE</p>
                </SkillItem>

                <SkillItem>
                    <img src={Figma} alt="Figma Logo" />
                    <p>Figma</p>
                </SkillItem>

                <SkillItem>
                    <img src={Github} alt="Github Logo" />
                    <p>GitHub</p>
                </SkillItem>

                <SkillItem>
                    <img src={Git} alt="Git Logo" />
                    <p>Git</p>
                </SkillItem>

                <SkillItem>
                    <img src={IntellIJ} alt="IntelliJ Logo" />
                    <p>IntelliJ</p>
                </SkillItem>

                <SkillItem>
                    <img src={JQuery} alt="jQuery Logo" />
                    <p>jQuery</p>
                </SkillItem>

                <SkillItem>
                    <img src={JQM} alt="jQuery Mobile Logo" />
                    <p>jQuery Mobile</p>
                </SkillItem>

                <SkillItem>
                    <img src={Netbeans} alt="Netbeans Logo" />
                    <p>NetBeans</p>
                </SkillItem>

                <SkillItem>
                    <img src={Postman} alt="Postman Logo" />
                    <p>Postman</p>
                </SkillItem>

                <SkillItem>
                    <img src={Springboot} alt="Springboot Logo" />
                    <p>Springboot Framework</p>
                </SkillItem>

                <SkillItem>
                    <img src={VSCode} alt="Visual Studio Code Logo" />
                    <p>VS Code</p>
                </SkillItem>
            </div>
        </div>
    )
}

export default Skills
