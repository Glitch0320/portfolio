import { AiFillHtml5 } from 'react-icons/ai'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { DiCss3, DiGit } from 'react-icons/di'
import { SiJavascript, SiMongodb, SiBlender, SiApollographql } from 'react-icons/si'
import { VscGithub } from 'react-icons/vsc'

const About = () => {

    const months = [31, 28, 31, 30,
        31, 30, 31, 31,
        30, 31, 30, 31]

    function isLeapYear(year) {
        let leap = false
        if (year % 4 === 0) {
            leap = true
        }
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                leap = true
            } else {
                leap = false
            }
        }
        return leap
    }
    function findDays(year, month, day) {
        //ie March 25, 2002 3, 25
        const now = new Date()
        const date = []
        date.push(now.getFullYear(), now.getMonth() + 1, now.getDate())

        let days = 0
        //add every day from jan 1 birthyear to dec 31 current year
        for (let i = year; i <= date[0]; i++) {
            isLeapYear(i) ? days += 366 : days += 365
        }

        //subtract days before birth
        isLeapYear(year) ? months[1] = 29 : months[1] = 28
        for (let i = 0; i < month; i++) {
            days -= months[i]
        }
        days += months[month - 1] - day

        //subtract days from now to end of year
        isLeapYear(date[0]) ? months[1] = 29 : months[1] = 28
        for (let i = date[1] - 1; i < 12; i++) {
            days -= months[i];
        }
        days += date[2];

        return days;
    }

    const today = findDays(2002, 3, 25)

    return (
        <div
            className='row'
            style={
                {
                    backgroundColor: 'black',
                    color: '#2cff0f',
                    textAlign: 'center',
                    padding: '5vh 0vh 7vh 0vh'
                }
            }>
            {/* Bio */}
            <section id='bio' style={{
                paddingTop: '8vh',
                marginTop: '-8vh',
            }}>
                <h2
                    style={{
                        backgroundColor: '#234099'
                    }}
                    className="text-light display-3">Who I am</h2>
                <article className="lead p-3">Hello, I am Jon Ziemann. I have been alive for <time>{today}</time> days, and counting. I have always been a creative person, and generally a part of the 'Exceeds Expectations' category. Problem solving is my bread and butter, and it should be considering my grandmother was very good at untying knots. As a bootcamp student, I have been untying the knots of server routing, database structures, and the usage of this data on the front end. As a Software Engineer, I want to untie all kinds of knots for all kinds of people.</article>
            </section>
            {/* Goals */}
            <section id='goals' style={{
                paddingTop: '5vh',
                marginTop: '-5vh'
            }}>
                <h2
                    style={{
                        backgroundColor: '#234099'
                    }}
                    className="text-light display-3 p-2 mt-3">Who I'm becoming</h2>
                <article className="lead p-3">
                    This year I took the first steps towards becoming a Full Stack Software Engineer by beginning my education through Harvard's Introduction to Computer Science{`(CS50x)`} and the University of Minnesota's 12 week full time coding bootcamp. CS50 programmed my brain to think like a computer, and the bootcamp allowed me to apply this mindset to web development. Although CS50 does have a large social network, I made close connections in the bootcamp through group projects and by teaching and learning from my peers.
                </article>
                <details>
                    <summary>Technical Skills</summary>
                    <div>
                        <AiFillHtml5 
                        title='HTML5'
                        style={{
                            height: '2rem',
                            width: '2rem',
                            margin: '2rem 0.5rem 0 0.5rem',
                            color: '#dd4b25'
                        }} />
                        <DiCss3 
                        title='CSS3'
                        style={{
                            height: '2rem',
                            width: '2rem',
                            margin: '2rem 0.5rem 0 0.5rem',
                            color: '#254bdd'
                        }} />
                        <SiJavascript 
                        title='JavaScript'
                        style={{
                            height: '2rem',
                            width: '2rem',
                            margin: '2rem 0.5rem 0 0.5rem',
                            color: '#eed53b'
                        }} />
                        <VscGithub 
                        title='Github'
                        style={{
                            height: '2rem',
                            width: '2rem',
                            padding: '.25rem',
                            margin: '2rem 0.5rem 0 0.5rem',
                            color: 'black',
                            backgroundColor: 'whitesmoke',
                            borderRadius: '0.5rem'
                        }} />
                        <DiGit 
                        title='Git'
                        style={{
                            height: '2rem',
                            width: '2rem',
                            margin: '2rem 0.5rem 0 0.5rem',
                            color: 'black',
                            backgroundColor: 'whitesmoke',
                            borderRadius: '0.5rem'
                        }} />
                        <FaNodeJs 
                        title='Node'
                        style={{
                            height: '2rem',
                            width: '2rem',
                            margin: '2rem 0.5rem 0 0.5rem',
                            color: '#509941'
                        }} />
                        <FaReact 
                        title='React'
                        style={{
                            height: '2rem',
                            width: '2rem',
                            margin: '2rem 0.5rem 0 0.5rem',
                            color: '#5ed3f3'
                        }} />
                        <SiApollographql 
                        title='Apollo GraphQl'
                        style={{
                            height: '2rem',
                            width: '2rem',
                            margin: '2rem 0.5rem 0 0.5rem',
                            color: '#7851a9'
                        }} />
                        <SiMongodb 
                        title=''
                        style={{
                            height: '2rem',
                            width: '2rem',
                            margin: '2rem 0.5rem 0 0.5rem',
                            color: '#00e661'
                        }} />
                        <SiBlender 
                        title=''
                        style={{
                            height: '2rem',
                            width: '2rem',
                            margin: '2rem 0.5rem 0 0.5rem',
                            color: '#e37200',
                        }} />
                    </div>
                </details>
            </section>
        </div >
    )
}

export default About