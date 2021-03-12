import React,{ Component } from "react";
import Icon from './icons'

class btnSocialBW extends Component { 
    render(){ 
      return(
        <>
            <a href={this.props.linked}>
                <Icon icon={this.props.icon}/>
            </a>
        </>
      )
    }
  }

export default btnSocialBW;