import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/log_out'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import { ReactComponent as Lady01 } from '../assets/images/hero/female/lady_01.svg'
import { ReactComponent as Lady02 } from '../assets/images/hero/female/lady_02.svg'
import { ReactComponent as Lady03 } from '../assets/images/hero/female/lady_03.svg'
import { useNavigate } from "react-router-dom"

const Ss1 = () => {
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate("/Init1");
    }

    let op_lngs = {
        lngs: ['English', 'Spanish', 'Portuguese', 'French', 'opt_lngs']
    }

    let Data = {
        title: "Let's start by learning a litle bit more about you!",
        subtitle: 'Select an avatar the describes your personality',
        cta1: 'New user',
        cta2: 'Returning user',
        btns: ['back', 'next']
    }

    return (
        <div className="lyts">
            <div className="grd_top_nav">
                <div className="grd_left_top">
                    <LogOut />
                </div>
                <div className="grd_right_top">
                    <div className="select_lang slide_in_blurred_right" tabindex="1">
                        <SelectOp ops={op_lngs.lngs} />
                    </div>
                </div>
            </div>
            <div className="grd_cont">
                <div className="ss2">
                    
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <BtnNavBack text_btn={Data.btns[0]} />
                    </div>
                    <div className="grd_btm_center">
                        <div id="audio" className="audioplayer"></div>
                    </div>
                    <div className="grd_btm_right">
                        <BtnNavNext text_btn={Data.btns[1]} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss1;