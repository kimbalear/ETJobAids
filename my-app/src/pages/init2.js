import React from "react"
import SelectOp from '../components/select_op'
import LogOut from '../components/btns/log_out'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import { ReactComponent as ByMySelft } from '../assets/images/By_myself.svg'
import { ReactComponent as WithMyHusband } from '../assets/images/With_my_husband.svg'
import { useNavigate, Link } from "react-router-dom"

const Init2 = () => {
    const navigate = useNavigate();
    let Data = {
        title: 'Are you here by yourself?',
        subtitle: 'If you are married, are you here with your husband?',
        btns: ['back', 'next']
    }

    return (
        <div className="lyt_one">
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
                <div className="int2">
                    <div className="grd_line1 ">
                        <h1 className="slide_in_blurred_top">{Data.title}</h1>
                    </div>
                    <div className="grd_line2">
                        <h2 className="tracking_in_expand">{Data.subtitle}</h2>
                    </div>
                    <div className="grd_line3">
                        <div className="slide_in_blurred_left">
                            <ByMySelft />
                        </div>
                        <div className="slide_in_blurred_right">
                            <WithMyHusband />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <BtnNavBack text_btn={Data.btns[0]} onClick={() => navigate('/')} />
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <BtnNavNext text_btn={Data.btns[1]} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Init2;