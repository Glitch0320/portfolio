import Navigation from './Navigation'
import jonesy from '../assets/images/jonesy.PNG'

// A single `Header` component that appears on multiple pages

const Header = ({ resume, setResume }) => {
    return (
        <header className="row text-center"
            style={
                {
                    marginTop: '2.5rem',
                    color: 'deepskyblue',
                    backgroundColor: 'indigo'
                }
            }>
            <h1 className='display-3'>Jon Ziemann</h1>
            <img className='mx-auto d-block img-fluid' style={{
                maxWidth: '50%',
                height: 'auto',
                borderRadius:'50%'
            }} src={jonesy} alt='Smiling person in a blue jacket with a backpack and headphones' />
            <h2 className='display-3'>Full Stack Software Engineer</h2>
            <Navigation resume={resume} setResume={setResume} />
        </header>
    )
}

export default Header