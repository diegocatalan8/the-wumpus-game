import React from 'react'
import Wumpus from '../components/wumpus/Wumpus'
import Agente from '../components/agente/Agente'
import Tesoro from '../components/tesoro/Tesoro'
import Hoyo from '../components/hoyo/Hoyo';
import Viento from '../components/viento/Viento';
import Edor from '../components/edor/Edor';

export default function Cell({element, isVisible}) {
 let componentToRender = null;
 if(element === 'Tesoro' && isVisible){
  componentToRender = <Tesoro/>
 }
 else if(element === 'Wumpus' && isVisible){
  componentToRender = <Wumpus/>
 }
 else if(element === 'Agente' && isVisible){
  componentToRender = <Agente/>
 }
 else if(element === 'Hoyo' && isVisible){
  componentToRender = <Hoyo/>
 }
 else if(element === 'Viento' && isVisible){
  componentToRender = <Viento/>
 }
 else if(element === 'Edor' && isVisible){
  componentToRender = <Edor/>
 }

  return (
    <div style={{width:'100%', height:'100%'}}>
        {componentToRender}
    </div>
  )
}
