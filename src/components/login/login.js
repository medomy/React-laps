import react, { useState } from "react";
import { Button, Form } from 'react-bootstrap';

export default function Logincomponent() {
    let Emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let Passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let[form,setForm] = useState({
        Email : "",
        password : ""
    })
    let[errors,setErrors] = useState({
        Email : "",
        password : ""
    })
    function handlechange(e){
        if(e.target.name === "Email"){
            setForm({
                ...form,
                Email : e.target.value
            }      
            )
            setErrors({
                ...errors,
                Email :
                  e.target.value.length === 0
                  ?"Email is required"
                  :!e.target.value.match(Emailregex)
                  ?"not valid Email"
                  :null
            })
        }
        if(e.target.name === "password"){
            setForm({
                ...form,
                password : e.target.value
            }      
            )
            setErrors({
                ...errors,
                password :
                  e.target.value.length === 0
                  ?"Password is required"
                  :!e.target.value.match(Passwordregex)
                  ?"Password must contain 8 characters at least one small and one capital letters and one number"
                  :null
            })
        }
    }

    function FormSubmit(event){
        event.preventDefault();
        console.log(form);
        console.log(errors);
    }

    // showing password function
    function showPassword(e){
        e.preventDefault();
        var pass = document.getElementById("password");
        if(pass.type === "password"){
            pass.type = "text";
        }
        else{
            pass.type = "password";
        }
    }
    return (<>
        <div className="row justify-content-center my-5">
            <div className="col-4">
                <Form onSubmit={(e)=>FormSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="Email" value={form.Email} onChange={(e)=>handlechange(e)} />
                        {errors.Email && (
                            <small className="text-danger">{errors.Email}</small>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" id="password"  value={form.password} onChange={(e)=>handlechange(e)} />
                        <button onClick={(e)=>showPassword(e)}><i className="fas fa-eye"></i></button>
                        {errors.password && (
                            <small className="text-danger">{errors.password}</small>
                        )}
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        login
                    </Button>
                </Form>
            </div>
        </div>

    </>)
}