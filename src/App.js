import './App.css';
import React,{} from 'react';
import { BrowserRouter as Router, Switch,NavLink, Route} from "react-router-dom";
import Profile from './container/profile';
import Portofolio from './container/portofolio';
import Resume from './container/Resume'; 
import BtnNav from './components/btnNav';
import BtnSocialBW from './components/btnSocialBW';


function App() {
  const active = "bg-gray-100 border-r-4 border-r-5 border-gray-500";

  return ( 
    <Router> 
      <div className="flex h-screen overflow-y-hidden antialiased">
        <aside className="fixed inset-y-0 flex flex-col  w-64 overflow-hidden sm:static bg-white border-r shadow-lg">
          <nav className="flex flex-col  h-full px-2 py-4 "> 
            <div className="flex flex-col items-left justify-center flex-1 space-y-4 -mt-5"> 
              <NavLink exact={true} to="/" activeClassName={active}>
                <BtnNav name="Profil" icon="ico-profile"/>
              </NavLink>
              <NavLink to="/resume" activeClassName={active}>
                <BtnNav name="Resume" icon="ico-resume"/>
              </NavLink> 
              <NavLink to="/portofolio" activeClassName={active}>
                <BtnNav name="Portofolio" icon="ico-portofolio"/>
              </NavLink> 
              <NavLink to="/kontak" activeClassName={active}>
                <BtnNav name="Kontak" icon="ico-kontak"/>
              </NavLink>  
            </div> 
            <div className="flex flex-row justify-center">
              <BtnSocialBW linked="/fbbku#" icon="ico-bw-fb"/>
              <BtnSocialBW linked="/twitt#" icon="ico-bw-twitter"/>
              <BtnSocialBW linked="/instagram#" icon="ico-bw-instagram"/>
              <BtnSocialBW linked="/linked#" icon="ico-bw-linkedin"/>
            </div>
          </nav> 
        </aside>
  
        <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">  
          <Switch>
            <Route exact path="/resume" component={Resume}/>
            <Route path="/portofolio" component={Portofolio} />
            <Route exact path="/" component={Profile} />
          </Switch> 
        </main> 
      </div>
    </Router>  
  );
}

export default App;
