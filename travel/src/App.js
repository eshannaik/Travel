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
import ForgotPassword from './component/forgot';
// import UpdateLog from './component/update';
import {useState} from 'react';

function App() {
  const [user,setLoginUser] = useState()
  const [uname,setUserName] = useState()
  // console.log(uname)
  // console.log(user === true)
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
                  {/* <Header /> */}
                  <SignIn setUserName={setUserName} setLoginUser={setLoginUser}  />
                </div>
              }
              />

              <Route path="/main/signup" element={
                <div>
                  {/* <Header /> */}
                  <SignUp />
                </div>
              }
              />

              <Route path="/main/forgot" element={
                  <div>
                    {/* <Header /> */}
                    <ForgotPassword />
                  </div>
                }
              />
              
              <Route path="/main/add" element={
                  user === true ?
                    <div>
                      <Header />
                      <div className='flexbox-container'>
                        <Sidebar />
                        <AddLog name = {uname} />
                      </div>
                    </div>
                    :
                    <div>
                      <SignIn setLoginUser={setLoginUser} />
                    </div>
              } 
              />

              <Route path="/main/remove" element={
                <div>
                  <Header />
                  <div className='flexbox-container'>
                    <Sidebar/>
                    <RemoveLog name = {uname}/>
                  </div>
                </div>
              } 
              />

              <Route path="/main/view" element={
                <div>
                  <Header />
                  <div className='flexbox-container'>
                    <Sidebar/>
                    <View name = {uname}/>
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
