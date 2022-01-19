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
        title: "Tell us a little bit more about you",
        cta1: 'New user',
        cta2: 'Returning user',
        btns: ['back', 'next'],
        flds_lbls: ['Name', 'Age', 'Your answer'],
        flds_holder: ['Your full names', 'Your age', 'Write your answer'],
        q: "Who referred you?"
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
                        <div className="header">
                            <div className="grd_line1 ">
                                <h1 className="slide_in_blurred_top">{Data.title}</h1>
                            </div>
                        </div>
                        <div className="cont">
                            <div className="flds">
                                <TextField flds_lbls={Data.flds_lbls[0]} flds_holder={Data.flds_holder[0]} />
                            </div>
                            <div className="flds">
                                <TextField flds_lbls={Data.flds_lbls[1]} flds_holder={Data.flds_holder[1]} />
                            </div>
                            <div className="qsts">
                                <h3>{Data.q}</h3>
                                <TextField flds_holder={Data.flds_holder[2]} />
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
export default Ss1_1;