import './about me.css'
// import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import ArticleIcon from '@material-ui/icons/FileCopy';

const AboutMe = () =>{
    const navigate = useNavigate();

    const handleClick = async () => {
        let path = "/main/add"
        navigate(path)
    }

    const handlePageChangeGitHub = () => {
        window.open('https://github.com/eshannaik');
    }

    const handlePageChangeLinkedin = () => {
        window.open('https://www.linkedin.com/in/eshan-naik-567573197/');
    }

    const handlePageChangePortfolio = () => {
        window.open('https://eshan-naik.netlify.app/')
    }

    return(
        <div>
            <div className="welcome">
                <div>
                    <div className="stuff">
                        <h1><center>About Me</center></h1>
                        <br></br>
                        <br></br>
                        
                        <div className = "main">
                            <div className="header">
                                <div className="intro">
                                    <h2>Hello,</h2>
                                    <h1><b>My name is <span style={{color:"blue"}}>Eshan Naik</span>,</b></h1>
                                    <p>
                                        I am a fourth year Computer Science Engineering student.
                                        This webpage was made to help me understand the concepts on the MERN stack. 
                                    </p>
                                    <p>
                                        If you want to use this project or you want to contact me please follow any of the below given links
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="Contact_Me">
                            <h1><center>Contact Me</center></h1>
                                <p>
                                    <center>
                                        <IconButton>
                                            Email : eshannaik96@gmail.com
                                        </IconButton>
                                        <div>
                                        <IconButton>
                                                GitHub : 
                                                <GitHubIcon onClick={handlePageChangeGitHub} fontSize="large" style={{color:"black"}} />
                                        </IconButton>
                                        <IconButton>
                                                LinkedIn :
                                                <LinkedInIcon onClick={handlePageChangeLinkedin} fontSize="large" style={{color:"black"}} />
                                        </IconButton>
                                        <IconButton>
                                                Portfolio :
                                                <ArticleIcon onClick={handlePageChangePortfolio} fontSize="large" style={{color:"black"}} />
                                        </IconButton>
                                        </div>
                                    </center>
                                </p>
                        </div>

                        <br></br>
                        <br></br>

                        <center>
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleClick}
                            id="button"
                            >
                                Go Back
                            </Button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe