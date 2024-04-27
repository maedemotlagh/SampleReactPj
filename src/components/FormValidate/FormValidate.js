import React, { useState } from "react";
import './formValidate.scss';
import { Button, Form, Input, Radio, message } from "antd";
import TextArea from "antd/es/input/TextArea";

const FormValidate = () => {

    const [formData , setFormData] = useState({})

    const onFill = (fieldName , value) => {
        setFormData({...formData , [fieldName] : value})
    }


    const onSubmit = () => {
        var regex = new RegExp('^(\\+98|0)?9\\d{9}$');
        if(!regex.test(formData.phone)){
            message.error('Mobile number format is not correct')
            return;
        }

        if(!formData.email.includes('@')){
            message.error('email format is not correct')
            return;
        }

        window.localStorage.setItem('MY_APP_INFO', JSON.stringify(formData))
        window.location.reload()

    }

    const resetHandler = () => {
        setFormData({})
    }

    const backHandler = () => {
        localStorage.clear();
        window.location.reload()
    }

    const formInfo = JSON.parse(localStorage.getItem('MY_APP_INFO'))

    return(
        <div className="form" >
            <span className="form__title" >Form Validation</span>
            {!formInfo ?
                
                <Form variant="filled" className="form__container" style={{maxWidth : 600}}>
                    
                    <Form.Item className="form__container__item" label="firstname" name="firstname" rules={[
                        {
                            required : true,
                        }
                    ]} 
                    >
                        <Input placeholder="Enter firstName" onChange={(e) => onFill('name' , e.target.value)}  />
                    </Form.Item>


                    <Form.Item className="form__container__item" label="lastname" name="lastname" rules={[
                        {
                            required : true,
                        }
                        ]} 
                    >
                        <Input placeholder="Enter lastName" onChange={(e) => onFill('lastName' , e.target.value)} />
                    </Form.Item>


                    <Form.Item className="form__container__item" label="emial" name="emial" rules={[
                        {
                            required : true,
                        }
                    ]} 
                    >
                        <Input placeholder="Enter email" onChange={(e) => onFill('email' , e.target.value)} />
                    </Form.Item>


                    <Form.Item className="form__container__item" label="contact" name="contact" rules={[
                        {
                            required : true,
                        }
                    ]} 
                    >
                        <Input placeholder="Enter contact"  onChange={(e) => onFill('phone' , e.target.value)} />
                    </Form.Item>

                    <Form.Item className="form__container__item" label="bestSubject" name="bestSubject" rules={[
                        {
                            required : true,
                        }
                    ]} 
                    >
                        <Radio.Group name="radiogroup" onChange={(e) => onFill('gender' , e.target.value)}  >
                            <Radio value={'women'}>women</Radio>
                            <Radio value={'men'}>men</Radio>
                        </Radio.Group>

                    </Form.Item>

                    <Form.Item className="form__container__item" label="About" name="About" rules={[
                        {
                            required : true,
                        }
                    ]} 
                    >
                        <TextArea placeholder="About" onChange={(e) => onFill('about' , e.target.value)} />
                    </Form.Item>

                    <Form.Item className="form__container__btns" >
                        <Button type="primary" htmlType="submit" onClick={() => onSubmit()} >
                            submit
                        </Button>
                        <Button  onClick={() => resetHandler()} type="secondary" style={{marginLeft : "5px"}} >
                            reset
                        </Button>
                    </Form.Item>

                </Form>

                :
                
                <div className="form__information" >
                    {Object.entries(formInfo).map(item => 
                        <div>
                            <p>{item[0]} : </p>
                            <p>{item[1]}</p>
                        </div>
                    )
                    }
                    <Button onClick={() => backHandler()} >back and clear</Button>
                </div>

            }
        </div>
    )
}


export default FormValidate