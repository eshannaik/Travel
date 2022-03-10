import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sidebar from './component/sidebar';
import AddLog from './component/add';
import RemoveLog from './component/remove';
import Header from './component/Header';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import View from './component/View';
import AboutMe from './component/about me';
import Home from './component/Home';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
                <div>
                  <Home />
                </div>
              }
            />
          </Routes>

            <Routes>
              <Route path="/main/signin" element={
                <div>
                  <Header />
                  <SignIn />
                </div>
              }
              />

              <Route path="/main/signup" element={
                <div>
                  <Header />
                  <SignUp />
                </div>
              }
              />
              
              <Route path="/main/add" element={
                <div>
                  <Header />
                  <div className='flexbox-container'>
                    <Sidebar/>
                    <AddLog />
                  </div>
                </div>
              } 
              />

              <Route path="/main/remove" element={
                <div>
                  <Header />
                  <div className='flexbox-container'>
                    
                    <Sidebar/>
                    <RemoveLog />
                  </div>
                </div>
              } 
              />

              <Route path="/main/view" element={
                <div>
                  <Header />
                  <div className='flexbox-container'>
                    <Sidebar/>
                    <View />
                  </div>
                </div>
              } 
              />

              <Route path="/aboutme" element={
                <div>
                  {/* <Header /> */}
                  <AboutMe />
                </div>
              }
              />

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
