import React,{Component} from 'react';

class cardPortofolio extends Component{
    render(){
        return(
            <>
                <div className="group relative">
                    <img src={this.props.image} className="rounded shadow-lg" alt=""/>
                    <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition duration-400 ease-in-out justify-evenly"> 
                        <div className="hover:scale-110 text-white opacity-0 transform traslate-duration-350 translate-y-3 group-hover:opacity-100 transition duration-500 ease-in-out">
                            <a href="/#">
                                <div className="text-center text-xl">{this.props.named}</div>
                                <div className="text-md">{this.props.subname}</div>
                            </a> 
                        </div> 
                    </div>
                </div> 
            </>
        )
    }
}

export default cardPortofolio;