import Link from '@material-ui/core/Link';
import './Home.css'
// import Particles from 'react-tsparticles';

const Home = () =>{
    return(
        <div>
            <div className="welcome" id="scale-in-center">
                <div style={{color:"white"}}>
                    <h1>Travel Log</h1>
                </div>
                <br></br>

                <p><Link variant="h4" color="secondary" href = "/main/signin">
                        {'Click to get started'}
                </Link></p>
            </div>
        </div>
    )
}

export default Home