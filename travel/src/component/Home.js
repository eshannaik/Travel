import {Link} from 'react-router-dom'
import './Home.css'
// import Particles from 'react-tsparticles';
import { Button } from '@material-ui/core';

const Home = () =>{
    return(
        <div>
            <div className="scale-in-center" id="welcome">
                <div>
                    <h1 className="head">Travel Log</h1>
                </div>
                <br></br>

                <p><Link to="/main/signin">
                    <Button type="submit" fullWidth variant="contained" color="primary">
                        Click to get started
                    </Button>
                </Link></p>
            </div>
        </div>
    )
}

export default Home