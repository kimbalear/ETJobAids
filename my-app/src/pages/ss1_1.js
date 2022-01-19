import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/log_out'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import TextField from '../components/textField'
import { ReactComponent as Lady01 } from '../assets/images/hero/female/lady_01.svg'
import { useNavigate } from "react-router-dom"

const Ss1_1 = () => {
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate("/Init1");
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
                        <SelectOp />
                    </div>
                </div>
            </div>
            <div className="grd_cont">
                <div class="ss1_1">
                    <div class="grd_left">
                        <div className="slide_in_blurred_left">
                            <Lady01 />
                        </div>
                    </div>
                    <div class="grd_right">
                        <div className="grd_line1 ">
                            <h1 className="slide_in_blurred_top">{Data.title}</h1>
                        </div>
                        <div className="grd_line2">
                            <h2 className="tracking_in_expand">{Data.subtitle}</h2>
                        </div>
                        <TextField/>
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
export default Ss1_1;