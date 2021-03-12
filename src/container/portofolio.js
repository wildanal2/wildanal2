import React from 'react';
import { NavLink, useRouteMatch, Switch, Route} from "react-router-dom";
import pic1 from './../assets/picture1.png';
import pic2 from './../assets/picture2.png';
import pic3 from './../assets/picture3.png';
import pic4 from './../assets/picture4.png';
import pic5 from './../assets/picture5.png';
import Card from "./../components/cardPortofolio";

const DataProject = [
    {
        category: "web",
        named: "Nassert-Beet",
        subNamed: "Web for Nassert beet Indonesia",
        banner: pic1
    },
    {
        category: "web",
        named: "Web Vr",
        subNamed: "",
        banner: pic2
    },
    {
        category: "web",
        named: "PDO APP",
        subNamed: "",
        banner: pic3
    },
    {
        category: "mobile",
        named: "Kimia Reaction",
        subNamed: "",
        banner: pic4
    },
    {
        category: "mobile",
        named: "Leap Motion",
        subNamed: "",
        banner: pic5
    }
];
 

export default function Portofolio (){  
    let {url,path} = useRouteMatch();
    const active = "bg-yellow-300 rounded-lg";
    
    return(
        <>
        <div className="grid justify-items-center w-full h-56 text-center relative">
            <div className="absolute items-center text-2xl mt-8 text-yellow-300 font-normal tracking-widest ">My work</div>
            <div className="absolute items-center text-8xl -mt-3 -ml-8 text-white font-bold tracking-tight leading-loose opacity-10" style={{textShadow: '-1px -1px 0 #313131, 1px -1px 0 #313130,-1px 1px 0 #313131, 1px 1px 0 #313131' }}>portofolio</div>
            <span className="z-10 flex flex-col justify-center flex-1 text-6xl font-bold tracking-tight leading-loose">portofolio</span>
        </div>
        
        <div className="flex justify-center my-5">
            <NavLink exact={true} to={`${url}`} activeClassName={active}>
                <BtnCategory named="All"/></NavLink>
            <NavLink to={`${url}/web`} activeClassName={active}>
                <BtnCategory named="Web"/></NavLink>
            <NavLink to={`${url}/mobile`} activeClassName={active}>
                <BtnCategory named="Mobile"/></NavLink>
            <NavLink to={`${url}/desktop`} activeClassName={active}>
                <BtnCategory named="Desktop"/></NavLink>
        </div>
        <div className="h-full bg-gray-100 p-5 mt-3 rounded-lg"> 
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
                <Switch>
                    <Route exact path={path} render={ ()=> <Project category=""/> } />
                    <Route path={`${path}/web`} render={ ()=> <Project category="web"/> } />
                    <Route path={`${path}/mobile`} render={ ()=> <Project category="mobile"/> } />
                    <Route path={`${path}/desktop`} render={ ()=> <Project category="desktop"/> } />
                </Switch> 
            </div>
        </div>
        </>
    ) 
} 


const Project = (props)=> {
    let dataFiltered = (props.category? DataProject.filter(data => data.category === props.category) : DataProject);
    return(
        <>
        {
            dataFiltered.map(function(data) {
                return (<Card image={data.banner} named={data.named} subname={data.subNamed}/>)
            })
        }
        </>
    )
}
 
class BtnCategory extends React.Component{
    render(){
        return(
            <>
                <div className="py-1.5 px-5 mx-3 rounded-lg text-gray-700 transition transition duration-500 ease-in-out hover:bg-yellow-300 hover:text-white">
                    {this.props.named}
                </div>
            </>
        )
    }
}