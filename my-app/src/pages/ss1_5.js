import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/log_out'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import { ReactComponent as NewUser } from '../assets/images/new_user.svg'
import { ReactComponent as ReturningUser } from '../assets/images/returning_user.svg'
import { useNavigate } from "react-router-dom"

const Ss1_5 = () => {
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate("/Init1");
    }

    let op_lngs ={
        lngs: ['English', 'Spanish', 'Portuguese', 'French', 'opt_lngs']
    }
    let op_rgns ={
        rgns: ['Region', 'Region', 'Region', 'Region..', 'opt_rgns']
    }
    let op_zns ={
        zone: ['zone', 'zone', 'zone', 'zone..', 'opt_zns']
    }
    let op_dts ={
        dstr: ['District', 'District', 'District', 'District..', 'op_dts']
    }
    let op_kbl ={
        kbl: ['kebele', 'kebele', 'kebele', 'kebele..', 'op_kbl']
    }

    let Data = {
        title: 'Kindly let us know if you are a new user or a returning user',
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
                <div className="ss1_5">
                    <div className="grd_line1">
                        <h1 className="slide_in_blurred_top">We would like to know your region</h1>
                    </div>
                    <div className="grd_line2">
                        <div><SelectOp ops={op_rgns.rgns}/></div>
                        <div><SelectOp ops={op_zns.zone}/></div>
                        <div><SelectOp ops={op_dts.dstr}/></div>
                        <div><SelectOp ops={op_kbl.kbl}/></div>
¡                    </div>
                    <div className="grd_line3">
                        <h2 className="tracking_in_expand">Select your session type</h2>
                    </div>
                    <div className="grd_line4">
                        <div id="individual" className="btn slide_in_blurred_left">Individual</div>
                        <div id="group" className="btn slide_in_blurred_right">Group</div>
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
export default Ss1_5;