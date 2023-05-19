import React from "react";
import ResumeStyles from './CSS_Modules/Resume.module.css';

export const Resume = () => {

    return (
        <section className={ResumeStyles.resumeContainer} id="resumeSection">
        <h2 className={ResumeStyles.aboutTitle}>My <span className={ResumeStyles.name2}>Resume</span></h2>
        <h2 className={ResumeStyles.downloadTxt}>For the full resume, click below to download</h2>
        <a className={ResumeStyles.downloadResume} href="./pdf/Clifton Beale's Resume (Dice).pdf" target="_blank" rel="noopener noreferrer" download>Download Resume</a>
        <div className={ResumeStyles.topResume}>
            <article className={ResumeStyles.education}>
                <h3 className={ResumeStyles.resumeH3}>Education</h3>
                <section className={ResumeStyles.eduSection}>
                    <h4 className={ResumeStyles.eduTitle}>CodeCademy Online</h4>
                    <p>I completed and earned a certificate for front-end path work from Codecademy's online courses. Within these courses, 
                        I was taught the basics of HTML and CSS, as well as touching into some basic functionality with Javascript.
                    </p>
                </section>
                <section className={ResumeStyles.eduSection}>
                    <h4 className={ResumeStyles.eduTitle}>Google IT Support Professional Certificate</h4>
                    <p>Eight-month IT support program, developed by Google, that covers troubleshooting,
                        customer service, networking, operating systems, system administration, and security, and
                        includes hands-on labs
                    </p>
                </section>
                <section className={ResumeStyles.eduSection}>
                    <h4 className={ResumeStyles.eduTitle}>Coursera Online - META Front-End Web Developer</h4>
                    <p>Completed and earned certificates through Coursera over several months, taking deeper dives into the fundamentals of Javascript and basics of Object Oriented Programming.
                        I also gained experience during this course developing with React, a popular JavaScript framework.
                    </p>
                </section>
                <section className={ResumeStyles.eduSection}>
                    <h4 className={ResumeStyles.eduTitle}>JavaScript Web Path 2023 Bootcamp</h4>
                    <p>A program offered by #VetsWhoCode, I am currently in the process of working through issues designed to eventually have a fully functional professional portfolio display.
                        Within this program, I am utilizing HTML, CSS, and Vanilla JavaScript to really build on the fundamentals of programming with JavaScript.
                    </p>
                </section>
            </article>
            <article className={ResumeStyles.experience}>
                <h3 className={ResumeStyles.resumeH3}>Experience</h3>
                <section className={ResumeStyles.eduSection}>
                    <h4 className={ResumeStyles.eduTitle}>United States Air Force- Madison, WI— Integrated Avionics Technician (SrA)</h4>
                    <span>March, 2018 - January, 2022</span>
                    <h4 className={ResumeStyles.keyHighlights}>Key Highlights</h4>
                    <ul className={ResumeStyles.highlightsList}>
                        <li>Ran electrical diagnostics on F-16 jets to troubleshoot and make appropriate repairs to
                            systems like pneumatic pressure, flight controls, radar threat warning, communication, and
                            navigation.
                        </li>
                        <li>
                            Supervised and educated new recruits on basic and advanced aircraft maintenance
                            protocols and procedures.
                        </li>
                        <li>
                            Routinely performed safe, on-the-spot, maintenance in stressful, time-sensitive, situations
                            in order to ensure mission readiness
                        </li>
                    </ul>
                </section>
            </article>
        </div>
        <div className={ResumeStyles.bottomResume}>
            <article>
                <h3 className={ResumeStyles.resumeH3}>Skills</h3>
                <section className={ResumeStyles.eduSection}>
                    <ul className={ResumeStyles.skills}>
                        <li>CSS/HTML/Javascript</li>
                        <li>React Framework</li>
                        <li>Object Oriented Programming</li>
                        <li>Problem Solving</li>
                        <li>NextJS Framework</li>
                        <li>Version Control</li>
                        <li>Continuous Integration/Continuous delivery</li>
                        <li>Figma</li>
                        <li>UI/UX Design</li>
                        <li>Basic Computer Architecture</li>
                        <li>Ability to work individually or with a team</li>
                        <li>Dedicated</li>
                    </ul>
                </section>
            </article>
            <article>
    
            </article>
        </div>    
    </section>
    )
}