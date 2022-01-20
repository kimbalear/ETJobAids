import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/log_out'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import { ReactComponent as Male01 } from '../assets/images/hero/male/male_01.svg'
import { ReactComponent as Male02 } from '../assets/images/hero/male/male_02.svg'
import { ReactComponent as Male03 } from '../assets/images/hero/male/male_03.svg'
import { ReactComponent as MaleHide } from '../assets/images/hero/male/male_hide.svg'
import { useNavigate } from "react-router-dom"

const Ss1_2 = () => {
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate("/Init1");
    }

    let op_lngs ={
        lngs: ['English', 'Spanish', 'Portuguese', 'French', 'opt_lngs']
    }

    let Data = {
        title: "What about your husband?",
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
                <div className="ss1_2">
                    <div className="grd_line1 ">
                        <h1 className="slide_in_blurred_top">{Data.title}</h1>
                    </div>
                    <div className="grd_line2">
                        <div>
                            <div>
                                <div className="slide_in_blurred_left">
                                    <Male01 />
                                </div>
                            </div>
                            <div>
                                <div className="slide_in_blurred_bottom">
                                    <Male02 />
                                </div>
                            </div>
                            <div>
                                <div className="slide_in_blurred_right">
                                    <Male03 />
                                </div>
                            </div>
                            <div>
                                <div className="slide_in_blurred_right">
                                    <MaleHide/>
                                </div>
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
export default Ss1_2;