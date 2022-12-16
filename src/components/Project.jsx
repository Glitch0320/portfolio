import { AiFillHtml5, AiOutlineGithub } from 'react-icons/ai'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { DiCss3, DiGit } from 'react-icons/di'
import { SiJavascript, SiMongodb, SiBlender, SiApollographql } from 'react-icons/si'
import { FiLink } from 'react-icons/fi'

const Project = ({ title, img, alt, summary, techStack, github, deploy }) => {
    return (
        <article className="col-10 rounded mx-auto card mt-4 mb-4 bg-secondary text-light"
        style={{
            border: 'solid .25rem #2cff0f'
        }}
        >
            {/* <!-- Title --> */}
            <h3 className="card-title display-6 mt-2">{title}</h3>
            <figure>
                {/* <!-- Screenshot --> */}
                <img src={img} className="img-fluid border border-4 border-dark rounded mt-2 mb-2" alt={alt} />
                {/* <!-- Caption --> */}
                <figcaption className="card-text">{alt}</figcaption>
            </figure>
            <summary className="card-text list-unstyled">
                {summary}
            </summary>
            <details className="card-text">
                <h5 className='d-block'>Made With:</h5>
                {
                    techStack.map((t, i) => {
                        let icon
                        switch (t) {
                            case 'html':
                                icon = <AiFillHtml5
                                title='HTML5'
                                style={{
                                    height: '2rem',
                                    width: '2rem',
                                    margin: '.25rem',
                                    color: '#dd4b25'
                                }} key={i} />
                                break
                            case 'css':
                                icon = <DiCss3
                                title='CSS3'
                                style={{
                                    height: '2rem',
                                    width: '2rem',
                                    margin: '.25rem',
                                    color: '#254bdd'
                                }} key={i} />
                                break
                            case 'js':
                                icon = <SiJavascript
                                title='JavaScript'
                                style={{
                                    height: '2rem',
                                    width: '2rem',
                                    margin: '.25rem',
                                    color: '#eed53b'
                                }} key={i} />
                                break
                            case 'node':
                                icon = <FaNodeJs
                                title='Node'
                                style={{
                                    height: '2rem',
                                    width: '2rem',
                                    margin: '.25rem',
                                    color: '#509941'
                                }} key={i} />
                                break
                            case 'react':
                                icon = <FaReact 
                                title='React'
                                style={{
                                    height: '2rem',
                                    width: '2rem',
                                    margin: '.25rem',
                                    color: '#5ed3f3'
                                }} key={i} />
                                break
                            case 'mongo':
                                icon = <SiMongodb 
                                title='MongoDB'
                                style={{
                                    height: '2rem',
                                    width: '2rem',
                                    margin: '.25rem',
                                    color: '#00e661'
                                }} key={i} />
                                break
                                case 'blender':
                                    icon = <SiBlender
                                    title='Blender'
                                    style={{
                                        height: '2rem',
                                        width: '2rem',
                                        margin: '.25rem',
                                        color: '#e37200' 
                                    }} key={i} />
                                break
                                case 'git':
                                    icon = <DiGit
                                    title='Git'
                                    style={{
                                        height: '2.5rem',
                                        width: '2.5rem',
                                        margin: '.25rem',
                                        color: 'black' 
                                    }} key={i} />
                                break
                                case 'apollo':
                                    icon = <SiApollographql
                                    title='Apollo GraphQl'
                                    style={{
                                        height: '2rem',
                                        width: '2rem',
                                        margin: '.25rem',
                                        color: '#00e661' 
                                    }} key={i} />
                                break
                            default:
                                icon = <AiOutlineGithub
                                title='Github'
                                style={{
                                    height: '2rem',
                                    width: '2rem',
                                    margin: '.25rem',
                                    color: 'black'
                                }} key={i} />
                                break
                        }
                        return icon
                    })}
            </details>
            {/* External Links */}
            <nav className="m-3 p-2 h2">
                {github && <a href={github} className="card-link p-2"><AiOutlineGithub /></a>}
                {deploy && <a href={deploy} className="card-link p-2"><FiLink /></a>}
            </nav>
        </article >
    )
}

export default Project