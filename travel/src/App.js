import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {useState, Suspense, lazy} from 'react';
import ProtectedRoute from './protectedRoutes';

const Home = lazy (() => import("./component/Home"))
const SignIn = lazy (() => import("./component/SignIn"))
const SignUp = lazy (() => import("./component/SignUp"))
const ForgotPassword = lazy (() => import("./component/forgot"))
const Header = lazy (() => import("./component/Header"))
const Sidebar = lazy (() => import("./component/sidebar"))
const AddLog = lazy (() => import("./component/add"))
const RemoveLog = lazy (() => import("./component/remove"))
const View = lazy (() => import("./component/View"))
const AboutMe = lazy (() => import("./component/about me"))



function App() {
  const [user,setLoginUser] = useState()
  const [uname,setUserName] = useState()
  // console.log(uname)
  // console.log(user === true)
  return (
    <div>
        <BrowserRouter>
          <Suspense fallback = { 
            <div><center><h1>Loading....</h1></center></div>
          }>
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
                  <SignIn setUserName={setUserName} setLoginUser={setLoginUser}  />
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

              <Route path="/main/forgot" element={
                  <div>
                    <Header />
                    <ForgotPassword />
                  </div>
                }
              />
            
              
              {/* <ProtectedRoute path="/main/add" element={
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
              /> */}
              <Route element = {<ProtectedRoute auth = {user}/>}>
                <Route path="/main/add" element={ 
                        <div>
                          <Header />
                          <div className='flexbox-container'>
                            <Sidebar />
                            <AddLog name = {uname} />
                          </div>
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
              </Route>

              <Route path="/aboutme" element={
                  <div>
                    {/* <Header /> */}
                    <AboutMe />
                  </div>
                }
                />

            </Routes>
          </Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;
