import React from "react"
import SelectOp from '../components/select_op'
import LogOut from '../components/btns/log_out'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import { ReactComponent as Lady01 } from '../assets/images/hero/female/lady_01.svg'
import { ReactComponent as Lady02 } from '../assets/images/hero/female/lady_02.svg'
import { ReactComponent as Lady03 } from '../assets/images/hero/female/lady_03.svg'
import { useNavigate } from "react-router-dom"

const Ss1 = () => {
    let song = new Audio(my_song);

    let Data = {
        title: "Let's start by learning a litle bit more about you!",
        subtitle: 'Select an avatar the describes your personality',
        cta1: 'New user',
        cta2: 'Returning user',
        btns: ['back', 'next']
    }

    return (
        <div ></div>
    )
}
export default Ss1;