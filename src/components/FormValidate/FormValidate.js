import React from "react";
import './formValidate.scss';
import { Button, Form, Input, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";

const FormValidate = () => {
    return(
        <div className="form" >
            <span className="form__title" >Form Validation</span>
            <Form variant="filled" className="form__container" style={{maxWidth : 600}}>
                
                <Form.Item className="form__container__item" label="firstname" name="firstname" rules={[
                    {
                        required : true,
                        message : 'please fill Input!'
                    }
                ]} 
                >
                    <Input placeholder="Enter firstName" />
                </Form.Item>


                <Form.Item className="form__container__item" label="lastname" name="lastname" rules={[
                    {
                        required : true,
                        message : 'please fill Input!'
                    }
                    ]} 
                >
                    <Input placeholder="Enter lastName" />
                </Form.Item>


                <Form.Item className="form__container__item" label="emial" name="emial" rules={[
                    {
                        required : true,
                        message : 'please fill Input!'
                    }
                ]} 
                >
                    <Input placeholder="Enter email" />
                </Form.Item>


                <Form.Item className="form__container__item" label="contact" name="contact" rules={[
                    {
                        required : true,
                        message : 'please fill Input!'
                    }
                ]} 
                >
                    <Input placeholder="Enter contact" />
                </Form.Item>


                <Form.Item className="form__container__item" label="gender" name="gender" rules={[
                    {
                        required : true,
                        message : 'please fill Input!'
                    }
                ]} 
                >
                    <Input placeholder="Enter gender" />
                </Form.Item>


                <Form.Item className="form__container__item" label="bestSubject" name="bestSubject" rules={[
                    {
                        required : true,
                        message : 'please fill Input!'
                    }
                ]} 
                >
                     <Radio.Group name="radiogroup"  >
                        <Radio value={1}>women</Radio>
                        <Radio value={2}>men</Radio>
                     </Radio.Group>

                </Form.Item>


                <Form.Item className="form__container__item" label="upload Resume" name="upload Resume" rules={[
                    {
                        required : true,
                        message : 'please fill Input!'
                    }
                ]} 
                >
                    <Input placeholder="Enter upload Resume" />
                </Form.Item>

                <Form.Item className="form__container__item" label="EnterUrl" name="EnterUrl" rules={[
                    {
                        required : true,
                        message : 'please fill Input!'
                    }
                ]} 
                >
                    <Input placeholder="EnterUrl" />
                </Form.Item>


                <Form.Item className="form__container__item" label="About" name="About" rules={[
                    {
                        required : true,
                        message : 'please fill Input!'
                    }
                ]} 
                >
                    <TextArea placeholder="About" />
                </Form.Item>

                <Form.Item className="form__container__btns" >
                    <Button type="primary" htmlType="submit" >
                        submit
                    </Button>
                    <Button type="secondary" >
                        reset
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}


export default FormValidate