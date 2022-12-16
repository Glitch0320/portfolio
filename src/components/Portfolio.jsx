import Project from './Project'
import { projects } from '../utils/projects'

import { AiOutlineCopyright } from 'react-icons/ai'

const Portfolio = () => {
    return (
        <section style={
            {
                backgroundColor: "black",
                paddingTop: '2.5rem',
                marginTop: '-2.5rem',
                textAlign: 'center'
            }
        }
            id='portfolio' className='row justify-around'>
            <h2
                style={{
                    backgroundColor: '#234099',
                }}
                className="text-light display-3">Portfolio</h2>
            {projects.map(p => <Project
                title={p.title}
                img={p.img}
                alt={p.alt}
                summary={p.summary}
                techStack={p.techStack}
                github={p.github}
                deploy={p.deploy}
                key={p.title}
            />)}

            <p style={{
                color: '#2cff0f',
                marginBottom: '3rem'
            }}>
                Copyright <AiOutlineCopyright /> 2022 Jon Ziemann
            </p>
        </section>
    )
}

export default Portfolio