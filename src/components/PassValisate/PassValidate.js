import { Input } from "antd";
import React, { useState } from "react";
import "./passValidate.scss"

const PassValidate = () => {

    const [strongPass , setStrongPass] = useState(null)
    const [startType , setStartType] = useState(false)

    const titleString = "checking passWord is strong or not"

    const chackingPassHandler = (value) => {
        if(value !== ""){
            setStartType(true)
        }else{
            setStartType(false)
        }

        var upperCasePattern = /[A-Z]/;
        var lowerCasePattern =/[a-z]/;
        var numberPattern = /[0-9]/;
        var charPattern = /[!@#$%^&*]/;

        if(upperCasePattern.test(value) && lowerCasePattern.test(value) && numberPattern.test(value) && charPattern.test(value) && value.length >=8){
            setStrongPass(true)
        }else{
            setStrongPass(false)
        }
    }

    return(
        <div className="passValidate" >
            <span className="passValidate__title" >{titleString}</span>
            <div className="passValidate__passContainer">
                <label>Enter your password :</label>
                <Input placeholder="Enter pass" onChange={(e) => chackingPassHandler(e.target.value)} />
                {startType &&
                    <p>{strongPass === true ? 
                        <span className="strong" >strong</span> 
                    : 
                        <span className="notStrong" >is not strong </span>}
                    </p>
                }
            </div>
        </div>
    )
}

export default PassValidate