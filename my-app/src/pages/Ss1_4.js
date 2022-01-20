import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/log_out'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import Quantity from '../components/btns/quantity'
import { ReactComponent as Kid01 } from '../assets/images/hero/kids/kid_01.svg'
import { ReactComponent as Kid02 } from '../assets/images/hero/kids/kid_02.svg'
import { ReactComponent as Kid03 } from '../assets/images/hero/kids/kid_04.svg'
import { ReactComponent as Kid04 } from '../assets/images/hero/kids/kid_hide.svg'
import { useNavigate } from "react-router-dom"

const Ss1_4 = () => {
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate("/Init1");
    }

    let op_lngs ={
        lngs: ['English', 'Spanish', 'Portuguese', 'French', 'opt_lngs']
    }

    let Data = {
        title: "How many children do you have?",
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
                <div className="ss1_4">
                    <div className="grd_line1 ">
                        <h1 className="slide_in_blurred_top">{Data.title}</h1>
                    </div>
                    <div className="grd_line2">
                        <div>
                            <div>
                                <div className="slide_in_blurred_left">
                                    <Kid01 />
                                </div>
                                <Quantity/>
                            </div>
                            <div>
                                <div className="slide_in_blurred_bottom">
                                    <Kid02 />
                                </div>
                                <Quantity/>
                            </div>
                            <div>
                                <div className="slide_in_blurred_right">
                                    <Kid03 />
                                </div>
                                <Quantity/>
                            </div>
                            <div>
                                <div className="slide_in_blurred_right">
                                    <Kid04/>
                                </div>
                                <Quantity/>
                            </div>
                        </div>
                    </div>
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
export default Ss1_4;