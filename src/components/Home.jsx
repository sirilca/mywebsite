import { useState } from 'react';
import React from 'react';
import './Home.css';
import { DiCode } from "react-icons/di";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCopyright, BiLogoInstagram, BiLogoGmail, BiLogoLinkedinSquare, BiLogoGithub, BiLogoMongodb, BiLogoReact, BiLogoNodejs, BiLogoJavascript, BiLogoCss3, BiLogoHtml5, BiLogoPython, BiLogoJava } from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'

function Home() {

    const nav = useNavigate()
    const [isopen, setIsopen] = useState('firstpart2')

    const openmenu = () => {
        setIsopen('openmenu')
    }
    const closemenu = () => {
        setIsopen('')
    }
    return (

        <div>


            <div className='home'>

                <div className='first'>

                    <div>
                        <img src={require('./Images/siril-high-resolution-logo-transparent.png')}></img>
                    </div>

                    <div className='hamburger' style={{ display: 'none' }} >
                        <span onClick={openmenu} >
                            <GiHamburgerMenu size={'5vw'} />
                        </span>

                    </div>

                    <div className={['firstpart2', isopen ? isopen : ''].join(' ')}>
                        <i class="fa-solid fa-xmark" style={{ display: 'none' }} onClick={closemenu}></i>
                        <span className='aboutme' onClick={()=>{nav('about')}} >About Me</span>
                        <span className='contactme' onClick={() => { nav('/contact') }} >Contact Me</span>
                    </div>

                </div>


                <div className='second'>
                    <div>
                        <h1>DESIGNER,BACKEND DEVELOPER & CODER</h1>
                    </div>

                    <div>
                        <h1>I design and code beautifully simple things, and I love what I do</h1>
                    </div>
                </div>


                <div className='third'>

                    <div>
                        <img src={require('./Images/IMG-20230505-WA0110-01-01.jpeg')}></img>
                        <div className='details'>
                            <p>Siril C Antony</p>
                            <p style={{ fontSize: '1.4vw' }}>Btech Graduate</p>
                        </div>
                    </div>

                    <div className='box'>
                        {/* nothing just ti make correct */}
                    </div>

                </div>


                <div className='fourth'>

                    <h1>Hi,I'm SIRIL. Nice to meet you.</h1>
                    <div>
                        <p>Looking for an entry-level position in the field of Information Technology, in a company whose valuesand goals are in conjunction with my own value and skill set. I wish to contribute to a dynamic team ofindividuals motivated to achieve the company’s goal while aiding my personal growth</p>
                    </div>

                </div>


                <div className='dummyfifth'>

                </div>

            </div>


            <div className='project'>

                <div className='skills'>

                    <div>

                        <div>
                            <img src={require('./Images/codeimage/ux.png')}></img>
                        </div>

                        <div>

                            <h1>Frontend</h1>
                        </div>

                        <div>
                            <p>I have a strong understanding of HTML, CSS, and JavaScript, and I am proficient in using popular frontend frameworks such as React</p>
                        </div>

                        <h4>Languages:</h4>

                        <ul>
                            <li><BiLogoCss3 color='blue' />CSS</li>
                            <li><BiLogoHtml5 color='orange' />HTML5</li>
                            <li><BiLogoJavascript color='#F0DB4F' />JAVASCRIPT</li>
                            <li><BiLogoReact color='#61DBFB' />REACT</li>
                        </ul>

                    </div>

                    <div>

                        <div>
                            <img src={require('./Images/codeimage//software.png')}></img>
                        </div>

                        <div>
                            <h1>Backend</h1>
                        </div>


                        <div>
                            <p>I am familiar with Python, Java, and Node.js, and I have experience building backend APIs using  Express.js.</p>
                        </div>

                        <h4>Languages:</h4>

                        <ul>
                            <li><BiLogoNodejs color='#3C873A' />NODE JS</li>
                            <li><BiLogoMongodb color=' #4DB33D' />MONGO DB</li>
                            <li><BiLogoJavascript color='#F0DB4F' />JAVASCRIPT</li>
                            <li><BiLogoNodejs color='#68A063' />EXPRESS JS</li>
                        </ul>

                    </div>

                    <div>

                        <div>
                            <img src={require('./Images/codeimage/code.png')}></img>
                        </div>

                        <div>
                            <h1>Coding</h1>
                        </div>


                        <div>
                            <p>I have a strong foundation in coding, and I am proficient in using Git for version control and unit testing.</p>
                        </div>

                        <h4>Languages:</h4>

                        <ul>
                            <li><BiLogoJava color='blue' />JAVA</li>
                            <li><BiLogoPython color='#646464' />PYTHON</li>
                            <li><DiCode />C PROGRAMMING</li>
                            <li><BiLogoJavascript color='#F0DB4F' />JAVASCRIPT</li>
                        </ul>

                    </div>




                </div>

            </div>

            <div className='works'>


                <div>
                    <h1>My Recent Works</h1>
                    <p>Here are a few past projects I've worked on.</p>
                </div>


                <div className='workimages'>

                    <div>
                        <img src={require('./Images/e-learning-development-company.jpg')}></img>
                        <div className='worktext'>
                            <p>Hand Gesture Controller</p>
                        </div>
                        <div className='worklink'>
                            <a>Press Here</a>
                        </div>
                    </div>

                    <div>
                        <img src={require('./Images/80570e05c0da43ae_800x800ar.jpg')}></img>
                        <div className='worktext'>
                            <p>E-Learning System</p>
                        </div>
                        <div className='worklink'>
                            <a>Press Here</a>

                        </div>
                    </div>

                </div>


                <div className='github'>

                    <div>
                        <a target='blank' href='https://github.com/sirilca'><BiLogoGithub className='giticon' size={'1.6vw'} /> &nbsp; See more on Github</a>
                    </div>

                </div>

            </div>


            <div className='code'>

                <div>

                </div>

                {/* <div>

        </div>

        <div>

        </div> */}


            </div>




            <div className='footer'>

                <div>
                    <img className='socialdp' src={require('./Images/siril-high-resolution-logo-transparent.png')}></img>
                    <span>Living, learning, & leveling up one day at a time.</span>

                    <div className='social'>
                        <a target='blank' href='https://www.instagram.com/s__i__r__i__l/'><BiLogoInstagram className='socialicons' /></a>
                        <a target='blank' href='https://www.linkedin.com/in/siril-c-antony-b2b5b1175/'><BiLogoLinkedinSquare className='socialicons' /></a>
                        <a target='blank' href='https://github.com/sirilca'><BiLogoGithub className='socialicons' /></a>
                        <a target='blank' href='mailto:sirilcantony@gmail.com'><BiLogoGmail className='socialicons' /> </a>
                    </div>

                    <h3>Handcrafted by me <BiCopyright />twentytwentythree</h3>
                </div>

            </div>



        </div>

    );
}

export default Home;
