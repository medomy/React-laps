import react, { useState } from "react";
import { Button, Form } from 'react-bootstrap';

export default function Registercomponent() {
    let passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let userNameRegex = /^\S*$/;
    let Emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let [form,setForm] = useState({
        Name :"",
        Email : "",
        UserName :"",
        password :"",
        Checkpassword:""
    })
    let [errors,seterrors] = useState({
        Name :"",
        Email : "",
        UserName :"",
        password :"",
        Checkpassword:""
    })
    function FormSubmit(e){
        e.preventDefault();
        console.log(form);
        console.log(errors);
    }
    function handleName(e){
        if(e.target.name === "Name"){
            setForm({
                ...Form,
                Name : e.target.value
            })
            seterrors({
                ...errors,
                Name : e.target.value.length === 0
                ?"this field is required"
                :null
            })
        }
    }
    function handleEmail(e){
        if(e.target.name === "Email"){
            setForm({
                ...Form,
                Email : e.target.value
            })
            seterrors({
                ...errors,
                Email : e.target.value.length === 0
                ?"this field is required"
                :!e.target.value.match(Emailregex)
                ?"The email is not valid"
                :null
            })
        }

    }
    function handleUserName(e){
        if(e.target.name === "UserName"){
            setForm({
                ...Form,
                UserName : e.target.value
            })
            seterrors({
                ...errors,
                UserName : e.target.value.length === 0
                ?"this field is required"
                :!e.target.value.match(userNameRegex)
                ?"The user name must not have space"
                :null
            })
        }
        
    }
    function handlePassword(e){
        if(e.target.name === "password"){
            setForm({
                ...form,
                password : e.target.value
            }      
            )
            seterrors({
                ...errors,
                password :
                  e.target.value.length === 0
                  ?"Password is required"
                  :!e.target.value.match(passregex)
                  ?"Password must contain 8 characters at least one small and one capital letters and one number and one special charachter"
                  :null
            })
        }
    }
    function handleCheckPassword(e){
        if(e.target.name === "Checkpassword"){
            setForm({
                ...form,
                Checkpassword : e.target.value
            }      
            )
        }
        var pass = document.getElementById("password");
        var check =document.getElementById("Checkpassword");
        if(pass.value !== check.value){
            seterrors({
                ...errors,
                Checkpassword : "Passwords not compatible"
            })   
        }
        else{
            seterrors({
                ...errors,
                Checkpassword : null
            })   

        }
    }
    /*function handlechange(e){
        handleName(e);
        handleEmail(e);
        handleUserName(e);
        handlePassword(e);
        handleCheckPassword();
    }*/
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


    return (
        <>
            <div className="row justify-content-center my-5">
                <div className="col-4 ">
                    <h3>Registeration</h3>
                    <Form onSubmit={(e) => FormSubmit(e)}>
                        <Form.Group className="mb-3" controlId="formBasicname">
                            <Form.Label>name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="Name" value={form.Name} onChange={(e) => handleName(e)} />
                            {errors.Name && (
                                <small className="text-danger">{errors.Name}</small>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="Email" value={form.Email} onChange={(e) => handleEmail(e)} />
                            {errors.Email && (
                                <small className="text-danger">{errors.Email}</small>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicusername">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter preferred user name" name="UserName" value={form.UserName} onChange={(e) => handleUserName(e)} />
                            {errors.UserName && (
                                <small className="text-danger">{errors.UserName}</small>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" id="password" value={form.password} onChange={(e) => handlePassword(e)} />
                            <button onClick={(e) => showPassword(e)}><i className="fas fa-eye"></i></button>
                            {errors.password && (
                                <small className="text-danger">{errors.password}</small>
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Check Password</Form.Label>
                            <Form.Control type="password" placeholder="check Password" name="Checkpassword" id="Checkpassword" value={form.Checkpassword} onChange={(e) => handleCheckPassword(e)} />
                            <button onClick={(e) => showPassword(e)}><i className="fas fa-eye"></i></button>
                            {errors.Checkpassword && (
                                <small className="text-danger">{errors.Checkpassword}</small>
                            )}
                        </Form.Group>
                        <Button variant="success" type="submit" >
                            Register
                        </Button>
                    </Form>
                </div>
            </div>

        </>
    )

}