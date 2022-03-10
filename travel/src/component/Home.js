import {Link} from 'react-router-dom'
import './Home.css'
import Particles from 'react-tsparticles';
import { Button } from '@material-ui/core';

const Home = () =>{
    return(
        <div>
            <div className="scale-in-center" id="welcome">
                <div>
                    <h1 className="head">Travel Log</h1>
                </div>
                <br></br>

                <p><Button type="submit" fullWidth variant="contained" color="primary">
                    <Link to="/main/signin">
                        Click to get started
                    </Link>
                </Button></p>
            </div>

            <Particles id="particles-js"
                params={{
                particles: {
                    number: {
                    value: 400,
                    density: {
                        enable: true,
                        value_area: 1000
                    }
                },
                color: {
                    value: '#fff'
                },
                opacity: {
                    value: 0.3,
                    anim: {
                        enable: true
                    }
                },
                size: {
                    value: 2,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    speed: 0.2
                },

                }}}
            />
        </div>
    )
}

export default Home