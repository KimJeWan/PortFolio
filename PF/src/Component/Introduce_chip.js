import React from "react";
import { Chip } from "@mui/material";
import '../Style/common.css'

const Introduce_chip = () => {

    const Chipclick = (value) => {
        window.open(`https://www.google.com/search?q=${value}`)
    }


    return(
        <>
            <h3 className="testzz">knowledges</h3><br/>
            <Chip label='c' color="primary" onClick={()=>console.log('아오')} className='test11'></Chip>&nbsp;&nbsp;
            <Chip label='java' color="primary" onClick={()=>Chipclick('java')}></Chip>&nbsp;&nbsp;
            <Chip label='html5' color="primary" onClick={()=>Chipclick('html5')}></Chip>&nbsp;&nbsp;
            <Chip label='css3' color="primary" onClick={()=>Chipclick('css3')}></Chip>&nbsp;&nbsp;
            <Chip label='javascript' color="primary" onClick={()=>Chipclick('javascript')}></Chip>&nbsp;&nbsp;
            <Chip label='react' color="primary" onClick={()=>Chipclick('react')}></Chip><br/><br/>

            <Chip label='github' color="primary" onClick={()=>Chipclick('github')}></Chip>&nbsp;&nbsp;
            <Chip label='mySQL' color="primary" onClick={()=>Chipclick('mySQL')}></Chip>&nbsp;&nbsp;
            <Chip label='ionic' color="primary" onClick={()=>Chipclick('ionic')}></Chip>&nbsp;&nbsp;
            <Chip label='Linux' color="primary" onClick={()=>Chipclick('Linux')}></Chip>&nbsp;&nbsp;
            <Chip label='VScode' color="primary" onClick={()=>Chipclick('VScode')}></Chip>&nbsp;&nbsp;
            <Chip label='API' color="primary" onClick={()=>Chipclick('API')}></Chip><br/><br/>

            <Chip label='react-native' color="primary" onClick={()=>Chipclick('react-native')}></Chip>&nbsp;&nbsp;
            <Chip label='DataBase' color="primary" onClick={()=>Chipclick('DataBase')}></Chip>&nbsp;&nbsp;
            <Chip label='DataManing' color="primary" onClick={()=>Chipclick('DataManing')}></Chip>&nbsp;&nbsp;
            <Chip label='npm' color="primary" onClick={()=>Chipclick('npm')}></Chip><br/><br/>

            <Chip label='typescript' color="primary" onClick={()=>Chipclick('typescript')}></Chip>&nbsp;&nbsp;

            {/* <Chip label='ionic' color="primary" ></Chip> */ }
            {/* onclick 적용시 margin이 적용 안되는듯 함 따로 알아볼 필요 있음 */}
        </>
    )
}

export default Introduce_chip;