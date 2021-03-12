import React, { Component } from 'react';

class Resume extends Component{
    render(){
        return(
            <>
            <div className="grid justify-items-center w-full h-56 text-center relative">
                <div className="absolute items-center text-2xl mt-8 text-yellow-300 font-normal tracking-widest ">Work Experience</div>
                <div className="absolute items-center text-8xl -mt-3 -ml-8 text-white font-bold tracking-tight leading-loose opacity-10" style={{textShadow: '-1px -1px 0 #313131, 1px -1px 0 #313130,-1px 1px 0 #313131, 1px 1px 0 #313131' }}>Resume</div>
                <span className="z-10 flex flex-col justify-center flex-1 text-6xl font-bold tracking-tight leading-loose">Resume</span>
            </div> 

            <div className="bg-gray-50 pt-5 mt-3 rounded-lg">
                <div className="grid grid-cols-2 gap-0">
                    <div className=" text-center">
                        <h1 className="font-bold text-xl">Education</h1> 
                        <div className=" relative w-full m-8 pr-12"> 
                            <div className="border-r-2 border-gray-500 absolute h-full top-0 mt-8" style={{left: '15px'}}> 
                            </div> 
                            <ul className="list-none m-0 p-0 text-left">
                                <li className="mb-5 -mt-14 pb-4 rounded-lg">
                                    <div className="flex items-center mb-1"> 
                                        <svg className="-ml-1 p-1 h-10 w-10 bg-gray-500 rounded-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#FCD34D" d="M 298 511C 298 511 499 578 499 578C 499 578 703 511 703 511C 703 511 719 630 719 630C 721 649 711 666 697 672C 549 737 450 739 299 673C 285 667 275 647 278 632C 278 632 298 511 298 511M 498 278C 500 278 502 279 505 279C 505 279 850 382 850 382C 868 387 868 414 850 419C 850 419 508 524 508 524C 504 526 499 526 494 524C 494 524 248 449 248 449C 236 460 227 475 221 494C 216 511 214 529 213 547C 228 557 237 573 237 590C 237 606 229 621 216 631C 216 631 237 715 237 715C 237 715 137 715 137 715C 137 715 158 631 158 631C 145 621 137 606 137 590C 137 571 147 554 163 546C 164 525 167 502 174 480C 178 464 185 448 196 433C 196 433 150 419 150 419C 132 414 132 387 150 382C 150 382 491 279 491 279C 493 279 495 278 498 278C 498 278 498 278 498 278"/>
                                        </svg> 
                                        <div className="flex-1 ml-4 font-medium text-left"></div>
                                    </div>
                                    <div className="ml-12 text-left"> 
                                    </div>
                                </li>
                                <li className="mb-5 rounded-lg">
                                    <div className="flex items-center mb-1">
                                        <div className="bg-gray-500 rounded-full h-8 w-8"></div>
                                        <div className="flex-1 ml-4 font-medium text-left">2016 - 2020</div>
                                    </div>
                                    <div className="ml-12 text-left">
                                        Politeknik Negeri Malang<br/>D4 Teknik Informatika (IPK: 3.62)
                                    </div>
                                </li>
                                <li className="mb-5">
                                    <div className="flex items-center mb-1">
                                        <div className="bg-gray-500 rounded-full h-8 w-8"></div>
                                        <div className="flex-1 ml-4 font-medium">2013 - 2016</div>
                                    </div>
                                    <div className="ml-12">
                                        SMA Negeri 1 Jombang
                                    </div>
                                </li>
                                <li className="mb-5">
                                    <div className="flex items-center mb-1">
                                        <div className="bg-gray-500 rounded-full h-8 w-8"></div>
                                        <div className="flex-1 ml-4 font-medium">2010 - 2013</div>
                                    </div>
                                    <div className="ml-12">
                                        Mts Negeri 1 Peterongan Jombang
                                    </div>
                                </li>
                                <li className="mb-2">
                                <div className="flex items-center mb-1">
                                    <div className="bg-gray-500 rounded-full h-8 w-8"></div>
                                    <div className="flex-1 ml-4 font-medium">2004 - 2010</div>
                                </div>
                                <div className="ml-12">
                                    MI Al-Ihsan II Sawahan Jombang
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div> 
                    <div className="relative text-center border-l-2 border-white">
                        <h1 className="font-bold text-xl">Experience</h1>  
                        <div className="absolute bottom-0 left-0 w-full m-8 pr-12"> 
                            <div className="border-r-2 border-gray-500 absolute h-full top-0 mt-8" style={{left: '15px'}}> 
                            </div> 
                            <ul className="list-none m-0 p-0 text-left">
                                <li className="mb-5 -mt-14 pb-4 rounded-lg">
                                    <div className="flex items-center mb-1"> 
                                        <svg className="-ml-1 p-2 h-10 w-10 bg-gray-500 rounded-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#FCD34D" d=" M 558 169C 588 169 612 187 612 215C 612 215 612 292 612 292C 612 292 721 292 721 292C 721 292 721 830 721 830C 721 830 721 831 721 831C 721 831 280 831 280 831C 280 831 280 292 280 292C 280 292 388 292 388 292C 388 292 388 215 388 215C 388 187 413 169 443 169C 443 169 558 169 558 169M 427 292C 427 292 571 292 571 292C 571 292 571 213 571 213C 571 213 427 213 427 213C 427 213 427 292 427 292M 240 291C 240 291 240 830 240 830C 240 830 180 830 180 830C 140 830 100 800 100 748C 100 748 100 373 100 373C 100 327 139 291 180 291C 180 291 240 291 240 291M 820 291C 861 291 900 327 900 373C 900 373 900 748 900 748C 900 800 860 830 820 830C 820 830 760 830 760 830C 760 830 760 291 760 291C 760 291 820 291 820 291"/>
                                        </svg> 
                                        <div className="flex-1 ml-4 font-medium text-left"></div>
                                    </div>
                                    <div className="ml-12 text-left"> 
                                    </div>
                                </li>
                                <li className="mb-5 pb-4 rounded-lg">
                                    <div className="flex items-center mb-1">
                                        <div className="bg-gray-500 rounded-full h-8 w-8"></div>
                                        <div className="flex-1 ml-4 font-medium text-left">Apr 2019 - Agu 2019</div>
                                    </div>
                                    <div className="ml-12 text-left">
                                        PT. Surabaya Autocomp Indonesia departement Produksi
                                    </div>
                                </li>
                                <li className="mb-5">
                                    <div className="flex items-center mb-1">
                                        <div className="bg-gray-500 rounded-full h-8 w-8"></div>
                                        <div className="flex-1 ml-4 font-medium">Jan 2019 - Feb 2019</div>
                                    </div>
                                    <div className="ml-12">
                                        Dinas Komunikasi dan Informatika Kota Mojokerto
                                    </div>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div> 
                
            </div>
            </>
        )
    }
}

export default Resume;