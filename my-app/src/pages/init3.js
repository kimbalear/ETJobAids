import React from "react"
import SelectOp from '../components/select_op'
import LogOut from '../components/btns/log_out'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import { ReactComponent as NewUser } from '../assets/images/new_user.svg'
import { ReactComponent as ReturningUser } from '../assets/images/returning_user.svg'
import { useNavigate } from "react-router-dom"

const Init2 = () => {
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate("/Init1");
    }

    let Data = {
        title: 'Kindly let us know if you are a new user or a returning user',
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
                <div className="int3">
                    <div className="grd_line1 ">
                        <h1 className="slide_in_blurred_top">{Data.title}</h1>
                    </div>
                    <div className="grd_line2">
                        <div>
                            <div>
                                <div className="slide_in_blurred_left">
                                    <NewUser />
                                </div>
                                <div className="tracking_in_expand">
                                    <h2>{Data.cta1}</h2>
                                </div>
                            </div>
                            <div>
                                <div className="slide_in_blurred_right">
                                    <ReturningUser />
                                </div>
                                <div className="tracking_in_expand">
                                    <h2>{Data.cta2}</h2>
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