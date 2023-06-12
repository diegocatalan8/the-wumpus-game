import { useState, useRef } from 'react';

const useBoard = () => {

    const useButton11 = useRef();
    const useButton12 = useRef();
    const useButton13 = useRef();
    const useButton14 = useRef();
    const useButton15 = useRef();
    const useButton16 = useRef();
    const useButton17 = useRef();
    const useButton18 = useRef();

    const useButton21 = useRef();
    const useButton22 = useRef();
    const useButton23 = useRef();
    const useButton24 = useRef();
    const useButton25 = useRef();
    const useButton26 = useRef();
    const useButton27 = useRef();
    const useButton28 = useRef();

    const useButton31 = useRef();
    const useButton32 = useRef();
    const useButton33 = useRef();
    const useButton34 = useRef();
    const useButton35 = useRef();
    const useButton36 = useRef();
    const useButton37 = useRef();
    const useButton38 = useRef();

    const useButton41 = useRef();
    const useButton42 = useRef();
    const useButton43 = useRef();
    const useButton44 = useRef();
    const useButton45 = useRef();
    const useButton46 = useRef();
    const useButton47 = useRef();
    const useButton48 = useRef();

    const useButton51 = useRef();
    const useButton52 = useRef();
    const useButton53 = useRef();
    const useButton54 = useRef();
    const useButton55 = useRef();
    const useButton56 = useRef();
    const useButton57 = useRef();
    const useButton58 = useRef();

    const useButton61 = useRef();
    const useButton62 = useRef();
    const useButton63 = useRef();
    const useButton64 = useRef();
    const useButton65 = useRef();
    const useButton66 = useRef();
    const useButton67 = useRef();
    const useButton68 = useRef();

    const useButton71 = useRef();
    const useButton72 = useRef();
    const useButton73 = useRef();
    const useButton74 = useRef();
    const useButton75 = useRef();
    const useButton76 = useRef();
    const useButton77 = useRef();
    const useButton78 = useRef();

    const useButton81 = useRef();
    const useButton82 = useRef();
    const useButton83 = useRef();
    const useButton84 = useRef();
    const useButton85 = useRef();
    const useButton86 = useRef();
    const useButton87 = useRef();
    const useButton88 = useRef();



    const [button11, setButton11] = useState(true);
    const [button12, setButton12] = useState(false);
    const [button13, setButton13] = useState(false);
    const [button14, setButton14] = useState(false);
    const [button15, setButton15] = useState(false);
    const [button16, setButton16] = useState(false);
    const [button17, setButton17] = useState(false);
    const [button18, setButton18] = useState(false);

    const [button21, setButton21] = useState(false);
    const [button22, setButton22] = useState(false);
    const [button23, setButton23] = useState(false);
    const [button24, setButton24] = useState(false);
    const [button25, setButton25] = useState(false);
    const [button26, setButton26] = useState(false);
    const [button27, setButton27] = useState(false);
    const [button28, setButton28] = useState(false);

    const [button31, setButton31] = useState(false);
    const [button32, setButton32] = useState(false);
    const [button33, setButton33] = useState(false);
    const [button34, setButton34] = useState(false);
    const [button35, setButton35] = useState(false);
    const [button36, setButton36] = useState(false);
    const [button37, setButton37] = useState(false);
    const [button38, setButton38] = useState(false);

    const [button41, setButton41] = useState(false);
    const [button42, setButton42] = useState(false);
    const [button43, setButton43] = useState(false);
    const [button44, setButton44] = useState(false);
    const [button45, setButton45] = useState(false);
    const [button46, setButton46] = useState(false);
    const [button47, setButton47] = useState(false);
    const [button48, setButton48] = useState(false);

    const [button51, setButton51] = useState(false);
    const [button52, setButton52] = useState(false);
    const [button53, setButton53] = useState(false);
    const [button54, setButton54] = useState(false);
    const [button55, setButton55] = useState(false);
    const [button56, setButton56] = useState(false);
    const [button57, setButton57] = useState(false);
    const [button58, setButton58] = useState(false);

    const [button61, setButton61] = useState(false);
    const [button62, setButton62] = useState(false);
    const [button63, setButton63] = useState(false);
    const [button64, setButton64] = useState(false);
    const [button65, setButton65] = useState(false);
    const [button66, setButton66] = useState(false);
    const [button67, setButton67] = useState(false);
    const [button68, setButton68] = useState(false);

    const [button71, setButton71] = useState(false);
    const [button72, setButton72] = useState(false);
    const [button73, setButton73] = useState(false);
    const [button74, setButton74] = useState(false);
    const [button75, setButton75] = useState(false);
    const [button76, setButton76] = useState(false);
    const [button77, setButton77] = useState(false);
    const [button78, setButton78] = useState(false);

    const [button81, setButton81] = useState(false);
    const [button82, setButton82] = useState(false);
    const [button83, setButton83] = useState(false);
    const [button84, setButton84] = useState(false);
    const [button85, setButton85] = useState(false);
    const [button86, setButton86] = useState(false);
    const [button87, setButton87] = useState(false);
    const [button88, setButton88] = useState(false);




    
    const onKeyDownButton11 = (e) =>{
        
            if(e.key === 'ArrowRight'){
                e.preventDefault();
                if(useButton12.current){
                    useButton12.current.focus();
                    setButton11(false);
                    setButton12(true);
                }
            }

            if(e.key === 'ArrowUp'){
                e.preventDefault();
                if(useButton21.current){
                    useButton21.current.focus();
                    setButton11(false);
                    setButton21(true);
                }
            }
    }

    const onKeyDownButton12 = (e) =>{
        
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton13.current){
                useButton13.current.focus();
                setButton12(false);
                setButton13(true);
            }
            setTimeout(()=>{
                if(useButton12.current){
                    useButton12.current.focus();
                    setButton12(true);
                    setButton13(true);
                } 
            }, 250)
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton11.current){
                useButton11.current.focus();
                setButton12(false);
                setButton11(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton22.current){
                useButton22.current.focus();
                setButton12(false);
                setButton22(true);
            }
        }
    }

    const onKeyDownButton13 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton14.current){
                useButton14.current.focus();
                setButton13(true);
                setButton14(true);
            }
            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton12.current){
                useButton12.current.focus();
                setButton13(true);
                setButton12(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton23.current){
                useButton23.current.focus();
                setButton13(true);
                setButton23(true);
            }
        }
    }

    //onKeyDownButton14 es un hoyo

    const onKeyDownButton15 = (e) =>{
        
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton16.current){
                useButton16.current.focus();
                setButton15(true);
                setButton16(true);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton14.current){
                useButton14.current.focus();
                setButton14(true);
                setButton15(true);
            }

            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton25.current){
                useButton25.current.focus();
                setButton15(true);
                setButton25(true);
            }
        }
    }

    const onKeyDownButton16 = (e) =>{
        
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton17.current){
                useButton17.current.focus();
                setButton16(false);
                setButton17(true);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton15.current){
                useButton15.current.focus();
                setButton15(true);
                setButton16(false);
            }
            setTimeout(()=>{
                if(useButton16.current){
                    useButton16.current.focus();
                    setButton15(true);
                    setButton16(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton26.current){
                useButton26.current.focus();
                setButton16(false);
                setButton26(true);
            }
        }
    }

    const onKeyDownButton17 = (e) =>{
        
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton18.current){
                useButton18.current.focus();
                setButton17(false);
                setButton18(true);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton16.current){
                useButton16.current.focus();
                setButton16(true);
                setButton17(false);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton27.current){
                useButton27.current.focus();
                setButton17(false);
                setButton27(true);
            }
        }
    }

    const onKeyDownButton18 = (e) =>{
        
        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton17.current){
                useButton17.current.focus();
                setButton17(true);
                setButton18(false);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton28.current){
                useButton28.current.focus();
                setButton18(false);
                setButton28(true);
            }
            setTimeout(()=>{
                if(useButton18.current){
                    useButton18.current.focus();
                    setButton18(true);
                    setButton28(true);
                }
            }, 250)
        }
    }
//////////////////

    const onKeyDownButton21 = (e) =>{
        
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton22.current){
                useButton22.current.focus();
                setButton21(false);
                setButton22(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton31.current){
                useButton31.current.focus();
                setButton21(false);
                setButton31(true);
            }

            setTimeout(()=>{
                if(useButton21.current){
                    useButton21.current.focus();
                    setButton21(true);
                    setButton31(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton11.current){
                useButton11.current.focus();
                setButton21(false);
                setButton11(true);
            }
        }
    }

    const onKeyDownButton22 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton23.current){
                useButton23.current.focus();
                setButton22(false);
                setButton23(true);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton21.current){
                useButton21.current.focus();
                setButton22(false);
                setButton21(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton32.current){
                useButton32.current.focus();
                setButton22(false);
                setButton32(true);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton12.current){
                useButton12.current.focus();
                setButton22(false);
                setButton12(true);
            }
        }
    }

    const onKeyDownButton23 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton24.current){
                useButton24.current.focus();
                setButton23(false);
                setButton24(true);
            }

            setTimeout(()=>{
                if(useButton23.current){
                    useButton23.current.focus();
                    setButton23(true);
                    setButton24(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton22.current){
                useButton22.current.focus();
                setButton23(false);
                setButton22(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton33.current){
                useButton33.current.focus();
                setButton23(false);
                setButton33(true);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton13.current){
                useButton13.current.focus();
                setButton23(false);
                setButton13(true);
            }

            setTimeout(()=>{
                if(useButton23.current){
                    useButton23.current.focus();
                    setButton23(true);
                    setButton13(true);
                }
            }, 250)
        }
    }

    const onKeyDownButton24 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();

            setTimeout(()=>{
                if(useButton25.current){
                    useButton25.current.focus();
                    setButton25(true);
                    setButton24(true);
                    setButton23(false);
                }
            }, 300)
            
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            setTimeout(()=>{
                if(useButton23.current){
                    useButton23.current.focus();
                    setButton24(true);
                    setButton23(true);
                    setButton25(false);
                }
            }, 300)
            
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton34.current){
                useButton34.current.focus();
                setButton24(true);
                setButton34(true);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton14.current){
                useButton14.current.focus();
                setButton24(true);
                setButton14(true);
            }

            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)
        }
    }

    const onKeyDownButton25 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton26.current){
                useButton26.current.focus();
                setButton26(true);
                setButton25(false);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton24.current){
                useButton24.current.focus();
                setButton25(false);
                setButton24(true);
            }
            setTimeout(()=>{
                if(useButton25.current){
                    useButton25.current.focus();
                    setButton25(true);
                    setButton24(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton35.current){
                useButton35.current.focus();
                setButton25(false);
                setButton35(true);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton15.current){
                useButton15.current.focus();
                setButton25(false);
                setButton15(true);
            }
            setTimeout(()=>{
                if(useButton25.current){
                    useButton25.current.focus();
                    setButton25(true);
                    setButton15(true);
                }
            }, 250)

        }
    }

    const onKeyDownButton26 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton27.current){
                useButton27.current.focus();
                setButton27(true);
                setButton26(false);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton25.current){
                useButton25.current.focus();
                setButton26(false);
                setButton25(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton36.current){
                useButton36.current.focus();
                setButton26(false);
                setButton36(true);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton16.current){
                useButton16.current.focus();
                setButton26(false);
                setButton16(true);
            }

        }
    }

    const onKeyDownButton27 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton28.current){
                useButton28.current.focus();
                setButton28(true);
                setButton27(false);
            }
            setTimeout(()=>{
                if(useButton27.current){
                    useButton27.current.focus();
                    setButton28(true);
                    setButton27(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton26.current){
                useButton26.current.focus();
                setButton27(false);
                setButton26(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton37.current){
                useButton37.current.focus();
                setButton27(false);
                setButton37(true);
            }
            setTimeout(()=>{
                if(useButton27.current){
                    useButton27.current.focus();
                    setButton27(true);
                    setButton37(true);
                }
            }, 250)
            
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton17.current){
                useButton17.current.focus();
                setButton27(false);
                setButton17(true);
            }

        }
    }

    const onKeyDownButton28 = (e) =>{
            
        

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton27.current){
                useButton27.current.focus();
                setButton28(true);
                setButton27(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton38.current){
                useButton38.current.focus();
                setButton28(true);
                setButton38(true);
            }
            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton18.current){
                useButton18.current.focus();
                setButton28(true);
                setButton18(true);
            }

        }
    }


    //////////
    const onKeyDownButton31 = (e) =>{
        
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton32.current){
                useButton32.current.focus();
                setButton31(true);
                setButton32(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton41.current){
                useButton41.current.focus();
                setButton41(true);
                setButton31(true);
            }

            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton21.current){
                useButton21.current.focus();
                setButton31(true);
                setButton21(true);
            }
        }
    }

    const onKeyDownButton32 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton33.current){
                useButton33.current.focus();
                setButton32(false);
                setButton33(true);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton31.current){
                useButton31.current.focus();
                setButton32(false);
                setButton31(true);
            }

            setTimeout(()=>{
                if(useButton32.current){
                    useButton32.current.focus();
                    setButton32(true);
                    setButton31(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton42.current){
                useButton42.current.focus();
                setButton32(false);
                setButton42(true);
            }

            setTimeout(()=>{
                if(useButton32.current){
                    useButton32.current.focus();
                    setButton32(true);
                    setButton42(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton22.current){
                useButton22.current.focus();
                setButton32(false);
                setButton22(true);
            }
        }
    }

    const onKeyDownButton33 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton34.current){
                useButton34.current.focus();
                setButton33(false);
                setButton34(true);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton32.current){
                useButton32.current.focus();
                setButton33(false);
                setButton32(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton43.current){
                useButton43.current.focus();
                setButton33(false);
                setButton43(true);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton23.current){
                useButton23.current.focus();
                setButton33(false);
                setButton23(true);
            }
        }
    }

    const onKeyDownButton34 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton35.current){
                useButton35.current.focus();
                setButton35(true);
                setButton34(false);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton33.current){
                useButton33.current.focus();
                setButton33(true);
                setButton34(false);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton44.current){
                useButton44.current.focus();
                setButton44(true);
                setButton34(false);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton24.current){
                useButton24.current.focus();
                setButton34(false);
                setButton24(true);
            }
            setTimeout(()=>{
                if(useButton34.current){
                    useButton34.current.focus();
                    setButton34(true);
                    setButton24(true);
                }
            }, 250)
        }
    }

    const onKeyDownButton35 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton36.current){
                useButton36.current.focus();
                setButton36(true);
                setButton35(false);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton34.current){
                useButton34.current.focus();
                setButton35(false);
                setButton34(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton45.current){
                useButton45.current.focus();
                setButton35(false);
                setButton45(true);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton25.current){
                useButton25.current.focus();
                setButton35(false);
                setButton25(true);
            }

        }
    }

    const onKeyDownButton36 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton37.current){
                useButton37.current.focus();
                setButton37(true);
                setButton36(false);
            }
            setTimeout(()=>{
                if(useButton36.current){
                    useButton36.current.focus();
                    setButton37(true);
                    setButton36(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton35.current){
                useButton35.current.focus();
                setButton36(false);
                setButton35(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton46.current){
                useButton46.current.focus();
                setButton36(false);
                setButton46(true);
            }
            setTimeout(()=>{
                if(useButton36.current){
                    useButton36.current.focus();
                    setButton36(true);
                    setButton46(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton26.current){
                useButton26.current.focus();
                setButton36(false);
                setButton26(true);
            }

        }
    }

    const onKeyDownButton37 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton38.current){
                useButton38.current.focus();
                setButton38(true);
                setButton37(true);
            }
            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton36.current){
                useButton36.current.focus();
                setButton37(true);
                setButton36(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            setTimeout(()=>{
                if(useButton47.current){
                    useButton47.current.focus();
                    setButton37(true);
                    setButton47(true);
                    setButton27(false);
                }
            }, 300)
           
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            setTimeout(() => {
                if(useButton27.current){
                    useButton27.current.focus();
                    setButton37(true);
                    setButton27(true);
                    setButton47(false);
                }
    
            }, 300);
            
        }
    }

    ///////
    const onKeyDownButton42 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton43.current){
                useButton43.current.focus();
                setButton42(true);
                setButton43(true);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton41.current){
                useButton41.current.focus();
                setButton42(true);
                setButton41(true);
            }
            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            setTimeout(()=>{
            if(useButton52.current){
                useButton52.current.focus();
                setButton42(true);
                setButton52(true);
                setButton32(false);
            }
        }, 300)
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            setTimeout(()=>{
            if(useButton32.current){
                useButton32.current.focus();
                setButton32(true);
                setButton42(true);
                setButton52(false);
            }
        }, 300)
        }
    }

    const onKeyDownButton43 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton44.current){
                useButton44.current.focus();
                setButton43(false);
                setButton44(true);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton42.current){
                useButton42.current.focus();
                setButton43(false);
                setButton42(true);
            }
            
            setTimeout(()=>{
                if(useButton43.current){
                    useButton43.current.focus();
                    setButton43(true);
                    setButton42(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton53.current){
                useButton53.current.focus();
                setButton43(false);
                setButton53(true);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton33.current){
                useButton33.current.focus();
                setButton43(false);
                setButton33(true);
            }
        }
    }
    
    const onKeyDownButton44 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton45.current){
                useButton45.current.focus();
                setButton45(true);
                setButton44(false);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton43.current){
                useButton43.current.focus();
                setButton43(true);
                setButton44(false);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton54.current){
                useButton54.current.focus();
                setButton54(true);
                setButton44(false);
                
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton34.current){
                useButton34.current.focus();
                setButton44(false);
                setButton34(true);
            }
        }
    }

    const onKeyDownButton45 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton46.current){
                useButton46.current.focus();
                setButton46(true);
                setButton45(false);
            }
            setTimeout(()=>{
                if(useButton45.current){
                    useButton45.current.focus();
                    setButton46(true);
                    setButton45(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton44.current){
                useButton44.current.focus();
                setButton45(false);
                setButton44(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton55.current){
                useButton55.current.focus();
                setButton45(false);
                setButton55(true);
            }
            setTimeout(()=>{
                if(useButton45.current){
                    useButton45.current.focus();
                    setButton45(true);
                    setButton55(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton35.current){
                useButton35.current.focus();
                setButton45(false);
                setButton35(true);
            }

        }
    }
    
    const onKeyDownButton46 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            setTimeout(() => {
                if(useButton47.current){
                    useButton47.current.focus();
                    setButton47(true);
                    setButton46(true);
                    setButton45(false);
                }
            }, 300);
           
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            setTimeout(() => {
                if(useButton45.current){
                    useButton45.current.focus();
                    setButton46(true);
                    setButton45(true);
                    setButton47(false)
                }
            }, 300);
            
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton56.current){
                useButton56.current.focus();
                setButton46(true);
                setButton56(true);
            }
            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton36.current){
                useButton36.current.focus();
                setButton36(true);
                setButton46(true);
            }

        }
    }
    
    const onKeyDownButton47 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton48.current){
                useButton48.current.focus();
                setButton48(true);
                setButton47(false);
            }
            setTimeout(()=>{
                if(useButton47.current){
                    useButton47.current.focus();
                    setButton48(true);
                    setButton47(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton46.current){
                useButton46.current.focus();
                setButton47(false);
                setButton46(true);
            }
            setTimeout(()=>{
                if(useButton47.current){
                    useButton47.current.focus();
                    setButton47(true);
                    setButton46(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton57.current){
                useButton57.current.focus();
                setButton47(false);
                setButton57(true);
            }
            setTimeout(()=>{
                if(useButton47.current){
                    useButton47.current.focus();
                    setButton47(true);
                    setButton57(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton37.current){
                useButton37.current.focus();
                setButton47(false);
                setButton37(true);
            }
            setTimeout(()=>{
                if(useButton47.current){
                    useButton47.current.focus();
                    setButton47(true);
                    setButton37(true);
                }
            }, 250)

        }
    }
    
    const onKeyDownButton48 = (e) =>{
            
        

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton47.current){
                useButton47.current.focus();
                setButton48(true);
                setButton47(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton58.current){
                useButton58.current.focus();
                setButton58(true);
                setButton48(true);
            }
           
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton38.current){
                useButton38.current.focus();
                setButton38(true);
                setButton48(true);
            }
            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)

        }
    }
    /////
    const onKeyDownButton51 = (e) =>{
        
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton52.current){
                useButton52.current.focus();
                setButton51(true);
                setButton52(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton61.current){
                useButton61.current.focus();
                setButton51(true);
                setButton61(true);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton41.current){
                useButton41.current.focus();
                setButton41(true);
                setButton51(true);
            }

            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)
        }
    }
    
    const onKeyDownButton52 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton53.current){
                useButton53.current.focus();
                setButton52(false);
                setButton53(true);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton51.current){
                useButton51.current.focus();
                setButton52(false);
                setButton51(true);
            }

            setTimeout(()=>{
                if(useButton52.current){
                    useButton52.current.focus();
                    setButton52(true);
                    setButton51(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton62.current){
                useButton62.current.focus();
                setButton52(false);
                setButton62(true);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton42.current){
                useButton42.current.focus();
                setButton52(false);
                setButton42(true);
            }

            setTimeout(()=>{
                if(useButton52.current){
                    useButton52.current.focus();
                    setButton52(true);
                    setButton42(true);
                }
            }, 250)
        }
    }

    const onKeyDownButton53 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton54.current){
                useButton54.current.focus();
                setButton53(false);
                setButton54(true);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton52.current){
                useButton52.current.focus();
                setButton53(false);
                setButton52(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton63.current){
                useButton63.current.focus();
                setButton53(false);
                setButton63(true);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton43.current){
                useButton43.current.focus();
                setButton53(false);
                setButton43(true);
            }
        }
    }

    const onKeyDownButton54 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton55.current){
                useButton55.current.focus();
                setButton55(true);
                setButton54(false);
            }
            setTimeout(()=>{
                if(useButton54.current){
                    useButton54.current.focus();
                    setButton55(true);
                    setButton54(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton53.current){
                useButton53.current.focus();
                setButton53(true);
                setButton54(false);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton64.current){
                useButton64.current.focus();
                setButton64(true);
                setButton54(false);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton44.current){
                useButton44.current.focus();
                setButton54(false);
                setButton44(true);
            }
        }
    }

    const onKeyDownButton55 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton56.current){
                useButton56.current.focus();
                setButton56(true);
                setButton55(true);
            }
            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton54.current){
                useButton54.current.focus();
                setButton55(true);
                setButton54(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            setTimeout(() => {
                if(useButton65.current){
                    useButton65.current.focus();
                    setButton55(true);
                    setButton65(true);
                    setButton45(false);
                }
            }, 300);
            
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            setTimeout(() => {
                if(useButton45.current){
                    useButton45.current.focus();
                    setButton55(true);
                    setButton45(true);
                    setButton65(false);
                }
    
            }, 300);
            
        }
    }
    
    const onKeyDownButton57 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton58.current){
                useButton58.current.focus();
                setButton58(true);
                setButton57(true);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton56.current){
                useButton56.current.focus();
                setButton57(true);
                setButton56(true);
            }
            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            setTimeout(() => {
                if(useButton67.current){
                    useButton67.current.focus();
                    setButton57(true);
                    setButton67(true);
                    setButton47(false);
                }
            }, 300);
            
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            setTimeout(() => {
                if(useButton47.current){
                    useButton47.current.focus();
                    setButton57(true);
                    setButton47(true);
                    setButton67(false);
                }
            }, 300);
        }
    }
    
    const onKeyDownButton58 = (e) =>{
            
        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton57.current){
                useButton57.current.focus();
                setButton58(false);
                setButton57(true);
            }
            setTimeout(()=>{
                if(useButton58.current){
                    useButton58.current.focus();
                    setButton58(true);
                    setButton57(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton68.current){
                useButton68.current.focus();
                setButton68(true);
                setButton58(false);
            }
           
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton48.current){
                useButton48.current.focus();
                setButton48(true);
                setButton58(false);
            }
            setTimeout(()=>{
                if(useButton58.current){
                    useButton58.current.focus();
                    setButton48(true);
                    setButton58(true);
                }
            }, 250)
            
        }
    }
/////////
    const onKeyDownButton61 = (e) =>{
        
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton62.current){
                useButton62.current.focus();
                setButton61(false);
                setButton62(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton71.current){
                useButton71.current.focus();
                setButton71(true);
                setButton61(false);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton51.current){
                useButton51.current.focus();
                setButton51(true);
                setButton61(false);
            }

            setTimeout(()=>{
                if(useButton61.current){
                    useButton61.current.focus();
                    setButton51(true);
                    setButton61(true);
                }
            }, 250)
        }
    }

    const onKeyDownButton62 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton63.current){
                useButton63.current.focus();
                setButton62(false);
                setButton63(true);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton61.current){
                useButton61.current.focus();
                setButton62(false);
                setButton61(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton72.current){
                useButton72.current.focus();
                setButton62(false);
                setButton72(true);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton52.current){
                useButton52.current.focus();
                setButton62(false);
                setButton52(true);
            }
        }
    }
    
     const onKeyDownButton63 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton64.current){
                useButton64.current.focus();
                setButton63(false);
                setButton64(true);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton62.current){
                useButton62.current.focus();
                setButton63(false);
                setButton62(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton73.current){
                useButton73.current.focus();
                setButton63(false);
                setButton73(true);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton53.current){
                useButton53.current.focus();
                setButton63(false);
                setButton53(true);
            }
        }
    }
     const onKeyDownButton64 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton65.current){
                useButton65.current.focus();
                setButton65(true);
                setButton64(false);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton63.current){
                useButton63.current.focus();
                setButton63(true);
                setButton64(false);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton74.current){
                useButton74.current.focus();
                setButton74(true);
                setButton64(false);
            }
            setTimeout(()=>{
                if(useButton64.current){
                    useButton64.current.focus();
                    setButton74(true);
                    setButton64(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton54.current){
                useButton54.current.focus();
                setButton64(false);
                setButton54(true);
            }
        }
    }
     /*setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)*/
     
     const onKeyDownButton65 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton66.current){
                useButton66.current.focus();
                setButton66(true);
                setButton65(false);
            }
            setTimeout(()=>{
                if(useButton65.current){
                    useButton65.current.focus();
                    setButton66(true);
                    setButton65(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton64.current){
                useButton64.current.focus();
                setButton65(false);
                setButton64(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton75.current){
                useButton75.current.focus();
                setButton65(false);
                setButton75(true);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton55.current){
                useButton55.current.focus();
                setButton65(false);
                setButton55(true);
            }
            setTimeout(()=>{
                if(useButton65.current){
                    useButton65.current.focus();
                    setButton65(true);
                    setButton55(true);
                }
            }, 250)

        }
    }
     const onKeyDownButton66 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            setTimeout(() => {
                if(useButton67.current){
                    useButton67.current.focus();
                    setButton67(true);
                    setButton66(true);
                    setButton65(false);
                }
            }, 300);
            
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            setTimeout(() => {
                if(useButton65.current){
                    useButton65.current.focus();
                    setButton66(true);
                    setButton65(true);
                    setButton67(false);
                }
            }, 300);
            
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton76.current){
                useButton76.current.focus();
                setButton66(true);
                setButton76(true);
            }
            
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton56.current){
                useButton56.current.focus();
                setButton56(true);
                setButton66(true);
            }
            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)

        }
    }
     const onKeyDownButton67 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton68.current){
                useButton68.current.focus();
                setButton68(true);
                setButton67(false);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton66.current){
                useButton66.current.focus();
                setButton67(false);
                setButton66(true);
            }

            setTimeout(() => {
                if(useButton67.current){
                    useButton67.current.focus();
                    setButton67(true);
                    setButton66(true);
                }
            }, 300);
            
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton77.current){
                useButton77.current.focus();
                setButton77(true);
                setButton67(false);
            }
            setTimeout(()=>{
                alert("Felicitaciones Has Ganado!!!");
                window.location.reload();
            
            }, 500)
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton57.current){
                useButton57.current.focus();
                setButton57(true);
                setButton67(false);
            }
            setTimeout(() => {
                if(useButton67.current){
                    useButton67.current.focus();
                    setButton57(true);
                    setButton67(true);
                }
            }, 300);

        }
    } //Aqui es donde se gana
     const onKeyDownButton68 = (e) =>{
            
        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton67.current){
                useButton67.current.focus();
                setButton68(false);
                setButton67(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton78.current){
                useButton78.current.focus();
                setButton78(true);
                setButton68(false);
            }
           
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton58.current){
                useButton58.current.focus();
                setButton58(true);
                setButton68(false);
            }
            
        }
    }

    /////
    const onKeyDownButton71 = (e) =>{
        
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton72.current){
                useButton72.current.focus();
                setButton71(false);
                setButton72(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton81.current){
                useButton81.current.focus();
                setButton81(true);
                setButton71(false);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton61.current){
                useButton61.current.focus();
                setButton61(true);
                setButton71(false);
            }
        }
    }

    const onKeyDownButton72 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton73.current){
                useButton73.current.focus();
                setButton72(false);
                setButton73(true);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton71.current){
                useButton71.current.focus();
                setButton72(false);
                setButton71(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton82.current){
                useButton82.current.focus();
                setButton72(false);
                setButton82(true);
            }
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton62.current){
                useButton62.current.focus();
                setButton72(false);
                setButton62(true);
            }
        }
    }

    const onKeyDownButton73 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton74.current){
                useButton74.current.focus();
                setButton73(false);
                setButton74(true);
            }
            setTimeout(()=>{
                if(useButton73.current){
                    useButton73.current.focus();
                    setButton73(true);
                    setButton74(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton72.current){
                useButton72.current.focus();
                setButton73(false);
                setButton72(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton83.current){
                useButton83.current.focus();
                setButton73(false);
                setButton83(true);
            }
            setTimeout(()=>{
                if(useButton73.current){
                    useButton73.current.focus();
                    setButton73(true);
                    setButton83(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton63.current){
                useButton63.current.focus();
                setButton73(false);
                setButton63(true);
            }
        }
    }
    const onKeyDownButton74 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            setTimeout(() => {
                if(useButton75.current){
                    useButton75.current.focus();
                    setButton75(true);
                    setButton74(true);
                    setButton73(false);
                }
            }, 300);
            
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            setTimeout(() => {
                if(useButton73.current){
                    useButton73.current.focus();
                    setButton73(true);
                    setButton74(true);
                    setButton75(false);
                }
            }, 300);
           
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton74.current){
                useButton74.current.focus();
                setButton74(true);
                setButton84(true);
            }
            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton64.current){
                useButton64.current.focus();
                setButton74(true);
                setButton64(true);
            }
        }
    }
    const onKeyDownButton75 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton76.current){
                useButton76.current.focus();
                setButton76(true);
                setButton75(false);
            }
            
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton74.current){
                useButton74.current.focus();
                setButton75(false);
                setButton74(true);
            }
            setTimeout(()=>{
                if(useButton75.current){
                    useButton75.current.focus();
                    setButton75(true);
                    setButton74(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton85.current){
                useButton85.current.focus();
                setButton75(false);
                setButton85(true);
            }
            setTimeout(()=>{
                if(useButton75.current){
                    useButton75.current.focus();
                    setButton75(true);
                    setButton85(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton65.current){
                useButton65.current.focus();
                setButton75(false);
                setButton65(true);
            }

        }
    }
    const onKeyDownButton76 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton77.current){
                useButton77.current.focus();
                setButton77(true);
                setButton76(false);
            }
            setTimeout(()=>{
                alert("Felicitaciones, Has Ganado!!!");
                window.location.reload();
            
            }, 500)

        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton75.current){
                useButton75.current.focus();
                setButton76(false);
                setButton75(true);
            }
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton86.current){
                useButton86.current.focus();
                setButton76(false);
                setButton86(true);
            }
            
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton66.current){
                useButton66.current.focus();
                setButton76(false);
                setButton66(true);
            }
            setTimeout(()=>{
                if(useButton76.current){
                    useButton76.current.focus();
                    setButton76(true);
                    setButton66(true);
                }
            }, 250)
           

        }
    }//Contiene el ganador
    
    const onKeyDownButton78 = (e) =>{
            
        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton77.current){
                useButton77.current.focus();
                setButton78(false);
                setButton77(true);
            }
            setTimeout(()=>{
                alert("Felicitaciones, Has Ganado!!!");
                window.location.reload();
            
            }, 500)
        }

        if(e.key === 'ArrowUp'){
            e.preventDefault();
            if(useButton88.current){
                useButton88.current.focus();
                setButton88(true);
                setButton78(false);
            }
           
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton68.current){
                useButton68.current.focus();
                setButton68(true);
                setButton78(false);
            }
            
        }
    }

    ///////////
    const onKeyDownButton81 = (e) =>{
        
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton82.current){
                useButton82.current.focus();
                setButton81(false);
                setButton82(true);
            }
        }


        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton71.current){
                useButton71.current.focus();
                setButton71(true);
                setButton81(false);
            }
        }
    }

    const onKeyDownButton82 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton83.current){
                useButton83.current.focus();
                setButton82(false);
                setButton83(true);
            }
            setTimeout(()=>{
                if(useButton82.current){
                    useButton82.current.focus();
                    setButton82(true);
                    setButton83(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton81.current){
                useButton81.current.focus();
                setButton82(false);
                setButton81(true);
            }
        }


        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton72.current){
                useButton72.current.focus();
                setButton82(false);
                setButton72(true);
            }
        }
    }

    const onKeyDownButton83 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton84.current){
                useButton84.current.focus();
                setButton83(true);
                setButton84(true);
            }
            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            
            }, 500)
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton82.current){
                useButton82.current.focus();
                setButton83(true);
                setButton82(true);
            }
        }

        

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton73.current){
                useButton73.current.focus();
                setButton73(true);
                setButton83(true);
            }
        }
    }

    const onKeyDownButton85 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton86.current){
                useButton86.current.focus();
                setButton85(true);
                setButton86(true);
            }
           
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton84.current){
                useButton84.current.focus();
                setButton85(true);
                setButton84(true);
            }
            setTimeout(()=>{
                alert("Game Over!!!");
                window.location.reload();
            }, 500)
        }

        

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton75.current){
                useButton75.current.focus();
                setButton75(true);
                setButton85(true);
            }
        }
    }

    const onKeyDownButton86 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton87.current){
                useButton87.current.focus();
                setButton87(true);
                setButton86(false);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton85.current){
                useButton85.current.focus();
                setButton86(false);
                setButton85(true);
            }
            setTimeout(()=>{
                if(useButton86.current){
                    useButton86.current.focus();
                    setButton86(true);
                    setButton85(true);
                }
            }, 250)
        }

        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton76.current){
                useButton76.current.focus();
                setButton86(false);
                setButton76(true);
            }
            
        }
    }

    const onKeyDownButton87 = (e) =>{
            
        if(e.key === 'ArrowRight'){
            e.preventDefault();
            if(useButton88.current){
                useButton88.current.focus();
                setButton88(true);
                setButton87(false);
            }
        }

        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton86.current){
                useButton86.current.focus();
                setButton86(true);
                setButton87(false);
            }
        }


        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton77.current){
                useButton77.current.focus();
                setButton87(false);
                setButton77(true);
            }

            setTimeout(()=>{
                alert("Felicitaciones, Has Ganado!!!");
                window.location.reload();
            
            }, 500)
           

        }
    }//Contiene el ganador

    const onKeyDownButton88 = (e) =>{
            
        if(e.key === 'ArrowLeft'){
            e.preventDefault();
            if(useButton87.current){
                useButton87.current.focus();
                setButton88(false);
                setButton87(true);
            }
        }

       
        if(e.key === 'ArrowDown'){
            e.preventDefault();
            if(useButton78.current){
                useButton78.current.focus();
                setButton78(true);
                setButton88(false);
            }
            
        }
    }


    return {
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


    }
}


export default useBoard;