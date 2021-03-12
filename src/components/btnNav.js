import React,{ Component } from "react";
import Icon from './icons'

class btnNav extends Component { 
    render(){ 
      return(
        <>
          <div className="flex items-center py-2 px-8 text-gray-600 hover:bg-gray-100"> 
            <Icon icon={this.props.icon}/>
            <span className="mx-4 font-medium">{this.props.name}</span>
          </div>
        </>
      )
    }
  }

export default btnNav;