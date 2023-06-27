import './App.css';
import React, {useState} from 'react'
import planImg from './img/plan.png';
import Projet from './Projet';
import Vue1 from './img/Vue1.mp4'
import Vue2 from './img/Vue2.mp4'
import Vue3 from './img/Vue3.mp4'
import Vue4 from './img/Vue4.mp4'
import Vue5 from './img/Vue5.mp4'
import Vue6 from './img/Vue6.mp4'
import Vue7 from './img/Vue7.mp4'
import Vue8 from './img/Vue8.mp4'
import Vue9 from './img/Vue9.mp4'
import Vue10 from './img/Vue10.mp4'
import Vue11 from './img/Vue11.mp4'
import Vue12 from './img/Vue12.mp4'
import ImgVue1C from './img/Vue1.jpg';
import ImgVue1NB from './img/Vue1-nb.jpg';
import ImgVue2C from './img/Vue2.jpg';
import ImgVue2NB from './img/Vue2-nb.jpg';
import ImgVue3C from './img/Vue3.jpg';
import ImgVue3NB from './img/Vue3-nb.jpg';
import ImgVue4C from './img/Vue4.jpg';
import ImgVue4NB from './img/Vue4-nb.jpg';
import ImgVue5C from './img/Vue5.jpg';
import ImgVue5NB from './img/Vue5-nb.jpg';
import ImgVue6C from './img/Vue6.jpg';
import ImgVue6NB from './img/Vue6-nb.jpg';
import ImgVue7C from './img/Vue7.jpg';
import ImgVue7NB from './img/Vue7-nb.jpg';
import ImgVue8C from './img/Vue8.jpg';
import ImgVue8NB from './img/Vue8-nb.jpg';
import ImgVue9C from './img/Vue9.jpg';
import ImgVue9NB from './img/Vue9-nb.jpg';
import ImgVue10C from './img/Vue10.jpg';
import ImgVue10NB from './img/Vue10-nb.jpg';
import ImgVue11C from './img/Vue11.jpg';
import ImgVue11NB from './img/Vue11-nb.jpg';
import ImgVue12C from './img/Vue12.jpg';
import ImgVue12NB from './img/Vue12-nb.jpg';
import Pers from './Pers';
import Anim from './Anim';


function App() {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState(false);
  const [turn, setTurn] = useState(true);
  
setTimeout(() => {
  setTurn(false)
}, "8000")
console.log(turn)
  const projets = [{
    id:'1',
    name:'Arrivée sur site',
    top:'12%',
    left:'55%',
    image:[ImgVue1C,ImgVue1NB],
    video:Vue1

  }, 
  {
    id:'2',
    name:'Entrée dans la branche active',
    top:'32%',
    left:'55%',
    video:Vue2,
    image:[ImgVue2C,ImgVue2NB]
  }, 
  {
    id:'3',
    name:"Hall d'accueil et espaces de soins",
    top:'40%',
    left:'55%',
    video:Vue3,
    image:[ImgVue3C,ImgVue3NB]
  }, 
  {
    id:'4',
    name:'Entrée de la faille Est',
    top:'48%',
    left:'55%',
    video:Vue4,
    image:[ImgVue4C,ImgVue4NB],
  },
  {
    id:'5',
    name:"De l'espace de repas et le hall depuis le salon",
    top:'64%',
    left:'57%',
    video:Vue5,
    image:[ImgVue5C,ImgVue5NB],
  },
  {
    id:'6',
    name:"Vue de cosmopolis depuis le sentier Sud",
    top:'81%',
    left:'55%',
    video:Vue6,
    image:[ImgVue6C,ImgVue6NB],
  },
  {
    id:'7',
    name:"Vue sur l'espace de célébration central",
    top:'33%',
    left:'44%',
    video:Vue7,
    image:[ImgVue7C,ImgVue7NB],
  },
  {
    id:'8',
    name:"Point neutralisé et entrée dans la branche passive",
    top:'25%',
    left:'38%',
    video:Vue8,
    image:[ImgVue8C,ImgVue8NB],
  },
  {
    id:'9',
    name:"Distribution des unités de repos",
    top:'38%',
    left:'38%',
    video:Vue9,
    image:[ImgVue9C,ImgVue9NB],
  },
  {
    id:'10',
    name:"Entrée de la faille Ouest",
    top:'48%',
    left:'36%',
    video:Vue10,
    image:[ImgVue10C,ImgVue10NB],
  },
  {
    id:'11',
    name:"Point neutralisé de la faille Ouest",
    top:'48%',
    left:'41%',
    video:Vue11,
    image:[ImgVue11C,ImgVue11NB],
  },
  {
    id:'12',
    name:"Temple d'introspection",
    top:'48%',
    left:'46%',
    video:Vue12,
    image:[ImgVue12C,ImgVue12NB],
  },

];


  return (
    <div  className="global-container">
      <div className={turn ? 'show' : 'hide'}>
      <Anim />
      </div>
      

        <div className="header">
          <h1>Cosmopolis</h1>
          <h2>Genèse d'un érémitisme 3.0</h2>
          <div className="container-info">
          <div className="sub-info">
          <p>Marie-Amélie André</p>
          <div style={{display:'flex',gap:'10px'}}>
          <p>PFE</p>
          <p>D.E.Instrumenter 2023</p>
          </div>
          
          </div>
          </div>
          
          <p style={{textAlign:'center',width:'350px', marginLeft:'20px'}}>Sous la direction de Églantine Bigot-Doll, Mathieu Lebarzic & Can Onaner</p>
          {/* <h2 className="pattern">les mémoires de nos voyages itinérants dans l'existence laissent des traces de notre passage sur Terre, organisme palimpseste de nos existences nomades.</h2> */}
        </div>
        <div className="carte">
          <img src={planImg} className="carte1" alt='img'/>
        {projets.map((projet)=>(
          <div>
          <div  onClick={() => setSource(projet)&setOpen(!open)} className='point' style={ { top:`${projet.top}`, left:`${projet.left}`} }>
          </div>
         
          </div>
        ))}
         <Projet source={source} open={open} setOpen={setOpen} setSource={setSource}/>
       </div>
      <div className="container-pers">
          {projets.map((projet)=>(
            <div className='div-pers'>
            <Pers data={projet}/>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
