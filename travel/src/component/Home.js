// import Link from '@material-ui/core/Link';
import './Home.css'
import Button from '@material-ui/core/Button';
// import Particles from 'react-tsparticles';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Home (){
    const classes = useStyles();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let path = "/main/add"
        navigate(path)
      }

    return(
        <div>
            <div className="welcome">
                <div style={{color:"white"}}>
                    <h1>Travel Log</h1>
                </div>

                <p>
                    <Button 
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                    onClick={handleSubmit} 
                    href = "/main/signin">
                        {'Click to get started'}
                    </Button>
                </p>
            </div>
        </div>
    )
}

export default Home