import React, { Component } from 'react';

class Profile extends Component{
    render(){
        return(
            <>
                <div className="flex mt-10">
                    <img className="w-64 shadow p-2 bg-white rounded flex-none" src="https://www.anime-planet.com/images/characters/naruto-uzumaki-87.jpg" alt="" />
                    <div className="flex-grow  h-30 mx-8 relative ">
                        <h1 className="text-2xl font-sans font-bold mt-16">Hai, saya Wildan Almubarok</h1>
                        <h1 className="text-2xl font-sans mt-1">Web Developer</h1>
                        <h2 className="mt-1 max-w-xl">I am a graduate of S1 Information Technology with a cumlaude predicate, namely a GPA of 3.78. Currently interested in focusing on data science with a good mathematical background for several years with several Olympic awards and using predictive modeling to solve several problems in the company</h2>
                        <a href="/#" className="px-4 py-1 absolute bottom-0 left-0 bg-gray-700 rounded text-gray-50 transition duration-300 hover:bg-gray-900 hover:text-gray-200">Download CV</a>
                    </div>
                    </div>
                    <div className="mt-8 ml-3">
                    <h1 className="font-bold text-xl my-2">Personal Info</h1> 
                    <table className="table-auto border-none w-full"> 
                        <tbody className="font-normal text-gray-700">
                        <tr>
                            <td>Nama</td>
                            <td>:</td>
                            <td className="pl-3">Wildan Almubarok</td>
                        </tr>
                        <tr>
                            <td>Umur</td>
                            <td>:</td>
                            <td className="pl-3">23 Tahun</td>
                        </tr>
                        <tr>
                            <td>TTL</td>
                            <td>:</td>
                            <td className="pl-3">Jombang, 05 Oktober 1997</td>
                        </tr>
                        <tr>
                            <td>Hp</td>
                            <td>:</td>
                            <td className="pl-3">+62 813 3349 5201</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td className="pl-3">wildanal2@gmail.com</td>
                        </tr>
                        <tr>
                            <td className="align-baseline">Alamat</td>
                            <td className="align-baseline">:</td>
                            <td className="pl-3 ">Dsn Sawahan, Desa Sambirejo, Kec. Jogoroto,<br/>Kab Jombang, Jawa Timur 61485</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="flex flex-row justify-left mt-8">
                        <a href="/mail#">
                        <svg className="w-7 h-7 mx-2 -mt-0.5 shadow text-red-600 bg-white rounded p-0.5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ariaHidden="true" focusable="false"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" fill="#DF574B"/></svg>
                        </a> 
                        <a href="/fb#"> 
                        <svg className="w-6 h-6 mx-2 shadow" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#385596" d="M 75 0C 75 0 75 0 75 0C 33 0 0 33 0 75C 0 75 0 925 0 925C 0 967 33 1000 75 1000C 75 1000 925 1000 925 1000C 967 1000 1000 967 1000 925C 1000 925 1000 75 1000 75C 1000 33 967 0 925 0C 925 0 75 0 75 0M 690 1000C 690 1000 534 1000 534 1000C 534 1000 534 613 534 613C 534 613 404 613 404 613C 404 613 404 462 404 462C 404 462 534 462 534 462C 534 462 534 350 534 350C 534 221 613 151 729 151C 784 151 831 155 845 157C 845 157 845 292 845 292C 845 292 765 292 765 292C 702 292 690 322 690 365C 690 365 690 462 690 462C 690 462 840 462 840 462C 840 462 820 613 820 613C 820 613 690 613 690 613C 690 613 690 1000 690 1000"/></svg>
                        </a>
                        <a href="/tw#">
                        <svg className="w-6 h-6 mx-2 shadow" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path fill="#1C9CEA" d="M 75 0C 75 0 75 0 75 0C 33 0 0 33 0 75C 0 75 0 925 0 925C 0 967 33 1000 75 1000C 75 1000 925 1000 925 1000C 967 1000 1000 967 1000 925C 1000 925 1000 75 1000 75C 1000 33 967 0 925 0C 925 0 75 0 75 0M 342 828C 252 828 163 802 88 754C 175 764 265 739 333 685C 266 685 203 640 181 577C 188 566 232 579 253 568C 178 554 119 482 121 406C 140 412 170 426 196 424C 124 379 100 276 144 204C 227 306 354 371 485 376C 474 330 484 278 513 240C 564 169 672 152 741 204C 774 247 827 205 865 189C 873 206 830 262 799 277C 829 274 859 266 888 254C 886 271 839 317 811 337C 816 452 777 568 705 658C 619 768 480 830 342 828"/></svg>
                        </a>
                        <a href="/git#">
                        <svg className="w-6 h-6 mx-2 shadow" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#313131" d="M 75 0C 75 0 75 0 75 0C 33 0 0 33 0 75C 0 75 0 925 0 925C 0 967 33 1000 75 1000C 75 1000 925 1000 925 1000C 967 1000 1000 967 1000 925C 1000 925 1000 75 1000 75C 1000 33 967 0 925 0C 925 0 75 0 75 0M 375 1000C 375 950 376 899 376 857C 250 880 218 826 208 798C 202 784 178 740 156 728C 139 718 114 695 156 695C 195 694 223 731 233 746C 278 821 349 800 378 787C 383 755 396 733 410 720C 299 708 183 665 183 473C 183 419 202 374 234 339C 229 327 211 275 239 207C 239 207 281 194 376 258C 416 247 459 241 501 241C 544 241 586 247 626 258C 722 193 764 207 764 207C 791 275 774 327 769 339C 801 374 820 418 820 473C 820 665 703 708 592 720C 610 736 626 766 626 813C 626 866 625 950 625 1000"/></svg>
                        </a>
                        <a href="/in#">
                        <svg className="w-6 h-6 mx-2 shadow" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#0076B3" d="M 75 0C 75 0 75 0 75 0C 33 0 0 33 0 75C 0 75 0 925 0 925C 0 967 33 1000 75 1000C 75 1000 925 1000 925 1000C 967 1000 1000 967 1000 925C 1000 925 1000 75 1000 75C 1000 33 967 0 925 0C 925 0 75 0 75 0M 336 332C 336 332 336 789 336 789C 336 789 211 789 211 789C 211 789 211 332 211 332C 211 332 336 332 336 332M 346 206C 346 206 346 206 346 206C 346 247 313 280 273 280C 233 280 201 247 201 206C 201 166 233 133 273 133C 313 133 346 166 346 206M 834 508C 834 508 834 789 834 789C 834 789 709 789 709 789C 709 789 709 556 709 556C 709 416 543 427 543 556C 543 556 543 789 543 789C 543 789 419 789 419 789C 419 789 419 332 419 332C 419 332 543 332 543 332C 543 332 543 406 543 406C 601 298 834 290 834 508"/>
                        </svg>
                        </a> 
                    </div>
                </div>
            </>
        )
    }
}

export default Profile;