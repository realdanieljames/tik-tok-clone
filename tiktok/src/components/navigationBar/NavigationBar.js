import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/AddBox';
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';

import './NavigationBar.css'

function NavigationBar({}) {

let constraints = {
    audio: true,
    video: { width: 640, height: 480 }
  }
    
// const openCamera = navigator.mediaDevices.getUserMedia(constraints)
// .then(function(stream) {

//   /* use the stream */
// })
// .catch(function(err) {
//   /* handle the error */
// });

const openCamera =(event)=>{
    console.log(event.target)
}
console.log(openCamera)

    return (
    <div className="navigation__bar"> 
        <div className="icons">


            <div className="home__icon">
                <HomeIcon fontSize="large" />
                    <p>Home</p>

            </div>

            <div className="search__icon">
                <SearchIcon fontSize="large"/>
                    <p>Discover</p>
            </div>
            
            <div className="add__icon" onClick={openCamera}>
                <AddIcon fontSize="large"/>        
                
            </div>

            <div className="chat__icon">    
                <ChatIcon fontSize="large"/>
                    <p>Messages</p>
            </div>    

            <div className="profile__icon">           
                <PersonIcon fontSize="large"/>
                    <p>Me</p>
            </div>
        </div>

    </div>
    )
}

export default NavigationBar