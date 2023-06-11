import React from 'react'
import Cell from '../../Cell/container'
import useBoard from './useBoard'



export default function Board() {

  const {
    button11,
    button12,
    button13,
    button14,
    button15,
    button16,
    button17,
    button18,

    button21,
    button22,
    button23,
    button24,
    button25,
    button26,
    button27,
    button28,

    button31,
    button32,
    button33,
    button34,
    button35,
    button36,
    button37,
    button38,

    button41,
    button42,
    button43,
    button44,
    button45,
    button46,
    button47,
    button48,

    button51,
    button52,
    button53,
    button54,
    button55,
    button56,
    button57,
    button58,

    button61,
    button62,
    button63,
    button64,
    button65,
    button66,
    button67,
    button68,

    button71,
    button72,
    button73,
    button74,
    button75,
    button76,
    button77,
    button78,

    button81,
    button82,
    button83,
    button84,
    button85,
    button86,
    button87,
    button88,
    

    useButton11,
    useButton12,
    useButton13,
    useButton14,
    useButton15,
    useButton16,
    useButton17,
    useButton18,

    useButton21,
    useButton22,
    useButton23,
    useButton24,
    useButton25,
    useButton26,
    useButton27,
    useButton28,

    useButton31,
    useButton32,
    useButton33,
    useButton34,
    useButton35,
    useButton36,
    useButton37,
    useButton38,

    useButton41,
    useButton42,
    useButton43,
    useButton44,
    useButton45,
    useButton46,
    useButton47,
    useButton48,

    useButton51,
    useButton52,
    useButton53,
    useButton54,
    useButton55,
    useButton56,
    useButton57,
    useButton58,

    useButton61,
    useButton62,
    useButton63,
    useButton64,
    useButton65,
    useButton66,
    useButton67,
    useButton68,

    useButton71,
    useButton72,
    useButton73,
    useButton74,
    useButton75,
    useButton76,
    useButton77,
    useButton78,

    useButton81,
    useButton82,
    useButton83,
    useButton84,
    useButton85,
    useButton86,
    useButton87,
    useButton88,

    onKeyDownButton11,
    onKeyDownButton12,
    onKeyDownButton13,
    onKeyDownButton15,
    onKeyDownButton16,
    onKeyDownButton17,
    onKeyDownButton18,



    onKeyDownButton21,
    onKeyDownButton22,
    onKeyDownButton23,
    onKeyDownButton24,
    onKeyDownButton25,
    onKeyDownButton26,
    onKeyDownButton27,
    onKeyDownButton28,

    onKeyDownButton31,
    onKeyDownButton32,
    onKeyDownButton33,
    onKeyDownButton34,
    onKeyDownButton35,
    onKeyDownButton36,
    onKeyDownButton37,

    onKeyDownButton42,
    onKeyDownButton43,
    onKeyDownButton44,
    onKeyDownButton45,
    onKeyDownButton46,
    onKeyDownButton47,
    onKeyDownButton48,

    onKeyDownButton51,
    onKeyDownButton52,
    onKeyDownButton53,
    onKeyDownButton54,
    onKeyDownButton55,
    onKeyDownButton57,
    onKeyDownButton58,

    onKeyDownButton61,
    onKeyDownButton62,
    onKeyDownButton63,
    onKeyDownButton64,
    onKeyDownButton65,
    onKeyDownButton66,
    onKeyDownButton67,
    onKeyDownButton68,

    onKeyDownButton71,
    onKeyDownButton72,
    onKeyDownButton73,
    onKeyDownButton74,
    onKeyDownButton75,
    onKeyDownButton76,
    onKeyDownButton78,

    onKeyDownButton81,
    onKeyDownButton82,
    onKeyDownButton83,
    onKeyDownButton85,
    onKeyDownButton86,
    onKeyDownButton87,
    onKeyDownButton88,

}= useBoard();

  return (
    <div style={{height:'480px', width:'480px', border:'1px solid black', display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
        
        <button ref={useButton81} onKeyDown={onKeyDownButton81} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button81} /></button>
        <button ref={useButton82} onKeyDown={onKeyDownButton82} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button82} /></button>
        <button ref={useButton83} onKeyDown={onKeyDownButton83} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Edor' isVisible={button83} /></button>
        <button ref={useButton84} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Wumpus' isVisible={button84} /></button>
        <button ref={useButton85} onKeyDown={onKeyDownButton85} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Edor' isVisible={button85} /></button>
        <button ref={useButton86} onKeyDown={onKeyDownButton86} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button86} /></button>
        <button ref={useButton87} onKeyDown={onKeyDownButton87} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button87} /></button>
        <button ref={useButton88} onKeyDown={onKeyDownButton88} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button88} /> </button>
        
        <button ref={useButton71} onKeyDown={onKeyDownButton71} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button71} /></button>
        <button ref={useButton72} onKeyDown={onKeyDownButton72} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button72} /></button>
        <button ref={useButton73} onKeyDown={onKeyDownButton73} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button73} /></button>
        <button ref={useButton74} onKeyDown={onKeyDownButton74} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Edor' isVisible={button74} /></button>
        <button ref={useButton75} onKeyDown={onKeyDownButton75} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button75} /></button>
        <button ref={useButton76} onKeyDown={onKeyDownButton76} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button76} /></button>
        <button ref={useButton77} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Tesoro' isVisible={button77} /></button>
        <button ref={useButton78} onKeyDown={onKeyDownButton78} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button78} /></button>

        <button ref={useButton61} onKeyDown={onKeyDownButton61} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button61} /></button>
        <button ref={useButton62} onKeyDown={onKeyDownButton62} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button62} /></button>
        <button ref={useButton63} onKeyDown={onKeyDownButton63} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button63} /></button>
        <button ref={useButton64} onKeyDown={onKeyDownButton64} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button64} /></button>
        <button ref={useButton65} onKeyDown={onKeyDownButton65} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button65} /></button>
        <button ref={useButton66} onKeyDown={onKeyDownButton66} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Viento' isVisible={button66} /></button>
        <button ref={useButton67} onKeyDown={onKeyDownButton67} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button67} /></button>
        <button ref={useButton68} onKeyDown={onKeyDownButton68} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button68} /></button>
      
        <button ref={useButton51} onKeyDown={onKeyDownButton51} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Edor' isVisible={button51} /></button>
        <button ref={useButton52} onKeyDown={onKeyDownButton52} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button52} /></button>
        <button ref={useButton53} onKeyDown={onKeyDownButton53} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button53} /></button>
        <button ref={useButton54} onKeyDown={onKeyDownButton54} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button54} /></button>
        <button ref={useButton55} onKeyDown={onKeyDownButton55} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Viento' isVisible={button55} /></button>
        <button ref={useButton56} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Hoyo' isVisible={button56} /></button>
        <button ref={useButton57} onKeyDown={onKeyDownButton57} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Viento' isVisible={button57} /></button>
        <button ref={useButton58} onKeyDown={onKeyDownButton58} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button58} /></button>

        <button ref={useButton41} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Wumpus' isVisible={button41} /></button>
        <button ref={useButton42} onKeyDown={onKeyDownButton42} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Edor' isVisible={button42} /></button>
        <button ref={useButton43} onKeyDown={onKeyDownButton43} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button43} /></button>
        <button ref={useButton44} onKeyDown={onKeyDownButton44} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button44} /></button>
        <button ref={useButton45} onKeyDown={onKeyDownButton45} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button45} /></button>
        <button ref={useButton46} onKeyDown={onKeyDownButton46} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Viento' isVisible={button46} /></button>
        <button ref={useButton47} onKeyDown={onKeyDownButton47} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button47} /></button>
        <button ref={useButton48} onKeyDown={onKeyDownButton48} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Edor' isVisible={button48} /></button>
        
        <button ref={useButton31} onKeyDown={onKeyDownButton31} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Edor' isVisible={button31} /></button>
        <button ref={useButton32} onKeyDown={onKeyDownButton32} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button32} /></button>
        <button ref={useButton33} onKeyDown={onKeyDownButton33} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button33} /></button>
        <button ref={useButton34} onKeyDown={onKeyDownButton34} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button34} /></button>
        <button ref={useButton35} onKeyDown={onKeyDownButton35} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button35} /></button>
        <button ref={useButton36} onKeyDown={onKeyDownButton36} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button36} /></button>
        <button ref={useButton37} onKeyDown={onKeyDownButton37} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Edor' isVisible={button37} /></button>
        <button ref={useButton38} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Wumpus' isVisible={button38} /></button>

        <button ref={useButton21} onKeyDown={onKeyDownButton21} style={{height:'60px', width:'60px', border:'1px solid black'}}><Cell element='Agente' isVisible={button21} /></button>
        <button ref={useButton22} onKeyDown={onKeyDownButton22} style={{height:'60px', width:'60px', border:'1px solid black'}}><Cell element='Agente' isVisible={button22} /></button>
        <button ref={useButton23} onKeyDown={onKeyDownButton23} style={{height:'60px', width:'60px', border:'1px solid black'}}><Cell element='Agente' isVisible={button23} /></button>
        <button ref={useButton24} onKeyDown={onKeyDownButton24} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Viento' isVisible={button24} /></button>
        <button ref={useButton25} onKeyDown={onKeyDownButton25} style={{height:'60px', width:'60px', border:'1px solid black'}}><Cell element='Agente' isVisible={button25} /></button>
        <button ref={useButton26} onKeyDown={onKeyDownButton26} style={{height:'60px', width:'60px', border:'1px solid black'}}><Cell element='Agente' isVisible={button26} /></button>
        <button ref={useButton27} onKeyDown={onKeyDownButton27} style={{height:'60px', width:'60px', border:'1px solid black'}}><Cell element='Agente' isVisible={button27} /></button>
        <button ref={useButton28} onKeyDown={onKeyDownButton28} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Edor' isVisible={button28} /></button>
       
        <button ref={useButton11} autoFocus={true}  onKeyDown={onKeyDownButton11} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button11} /></button>
        <button ref={useButton12} onKeyDown={onKeyDownButton12} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Agente' isVisible={button12} /></button>
        <button ref={useButton13} onKeyDown={onKeyDownButton13} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Viento' isVisible={button13} /></button>
        <button ref={useButton14} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Hoyo' isVisible={button14} /></button>
        <button ref={useButton15} onKeyDown={onKeyDownButton15} style={{height:'60px', width:'60px', border:'1px solid black'}}> <Cell element='Viento' isVisible={button15} /></button>
        <button ref={useButton16} onKeyDown={onKeyDownButton16} style={{height:'60px', width:'60px', border:'1px solid black'}}><Cell element='Agente' isVisible={button16} /></button>
        <button ref={useButton17} onKeyDown={onKeyDownButton17} style={{height:'60px', width:'60px', border:'1px solid black'}}><Cell element='Agente' isVisible={button17} /></button>
        <button ref={useButton18} onKeyDown={onKeyDownButton18} style={{height:'60px', width:'60px', border:'1px solid black'}}><Cell element='Agente' isVisible={button18} /></button>
    

    </div>
  )
}
