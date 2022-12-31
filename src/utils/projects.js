import skatepath from '../assets/images/skate-path.PNG'
import monzo from '../assets/images/monzo.png'
import geopath from '../assets/images/geopath.png'
import communitykitchen from '../assets/images/communitykitchen.png'

export const projects = [
    {
        title: 'Skate Path',
        img: skatepath,
        alt: "Skate Path drawing a line on a map representing a user's moving location.",
        summary: "The goal of this project is an app that tracks a user's location and draws their path on a map.",
        // HTML/CSS/JS/Github/Node/React/Mongo
        techStack: ['html', 'css', 'js', 'github', 'git', 'node'],
        github: 'https://github.com/Glitch0320/skatespot',
        deploy: 'https://glitch0320.github.io/skatespot'
    },
    {
        title: 'Monzo',
        img: monzo,
        alt: "Monzo displaying a user's balance and current transactions.",
        summary: "Monzo is a peer to peer payment app that allows users to add each other as connections and send or request money from each other.",
        // HTML/CSS/JS/Github/Node/React/Mongo
        techStack: ['html', 'css', 'js', 'react', 'mongo', 'node', 'github', 'git'],
        github: ' https://github.com/tarekmn/react-p2p-payment-network',
        deploy: 'https://monzo-p2p.herokuapp.com'
    },
    { 
        title: 'Geo Path',
        img: geopath,
        alt: "Geo Path drawing a user's line on a map and showing speed, distance, and time.",
        summary: "Geo Path is an app that tracks your location and draws it as a path on a map while showing speed, distance, and time. Logged in users can save their statistics.",
        // HTML/CSS/JS/Github/Node/React/Mongo
        techStack: ['html', 'css', 'js', 'react', 'mongo', 'node', 'github', 'git'],
        github: ' https://github.com/glitch0320/geopath',
        deploy: 'https://geopathxyz.herokuapp.com'
    },
    { 
        title: 'Community Kitchen',
        img: communitykitchen,
        alt: "A list of posts for selling food items.",
        summary: "Community Kitchen is an app that simply connects local food sellers to local food buyers.",
        // HTML/CSS/JS/Github/Node/React/Mongo
        techStack: ['html', 'css', 'js', 'react', 'mongo', 'node', 'github', 'git'],
        github: ' https://github.com/glitch0320/communitykitchen',
        deploy: 'https://communitykitchen.herokuapp.com'
    }
]