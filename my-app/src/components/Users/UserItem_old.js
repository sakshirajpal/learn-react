// import React, {Component} from 'react';

// class UserItem extends Component{
//     constructor(){
//         super();
//         this.state = {
//             id: 'id',
//             login: 'mojombo',
//             avatar_url : 'https://avatars.githubusercontent.com/u/1?v=4',
//             html_url : 'https://github.com/mojombo'
//         }
//     }
//     render(){
//         return(
//             <div className="card text-center">
//                 <img src={this.state.avatar_url} className="round-img" style={{width:'60px'}}/>
//                 <h3>{this.state.login}</h3>
//                 <div>
//                     <a className="btn btn-dark btn-sm my-1" href={this.state.html_url}>More</a>
//                 </div>
//             </div>
//         )
//     }
// }

// export default UserItem;


import React, {Component} from 'react';

class UserItem extends Component{
    state = {
        id: 'id',
        login: 'mojombo',
        avatar_url : 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url : 'https://github.com/mojombo'
    }
    render(){
        const {avatar_url,login,html_url} = this.state
        return(
            <div className="card text-center">
                <img src={avatar_url} className="round-img" style={{width:'60px'}}/>
                <h3>{login}</h3>
                <div>
                    <a className="btn btn-dark btn-sm my-1" href={html_url}>More</a>
                </div>
            </div>
        )
    }
}

export default UserItem;