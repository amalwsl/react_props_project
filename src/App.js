import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from './image.jpg'
import ProfileComponent from './profile/ProfileComponent';
import HandleName from './profile/HandleName';


function App() {
  const fullName="Amal Wesleti"
  const bio="I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself and do interesting things that matter."
  const profession="Software Developer"

  return (
    <div className="App" style={{display:"flex",flexFlow:"column wrap",justifyContent:"center",alignContent:"center",marginTop:"2rem"}}>
     <ProfileComponent fullName={fullName} bio={bio} profession={profession} HandleName={HandleName} >
       <img src={Img} width="20%" alt="profile-pic" />
     </ProfileComponent>
     <br/>
     <HandleName fullName={fullName} />
     
     </div>
  );
}

export default App;
