import React from "react"
import { Navbar, Container, Nav, Button,Form,FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
export default function Navbarcomponent() {
    let search ;
    function InputVal(e){
        console.log(e.target.value);
        search = e.target.value;
    }
    function MovieSearch(){
        console.log(search);
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4cef01add3ed74048591b83881eee0c9&query=${search}`)
        .then((res)=>{console.log(res.data.results)})
        .catch((err)=>alert(err));
    }
    return <>
        <div className="row navbar-container">
            <Navbar bg="dark" expand="lg">
                <Container>

                    <Navbar.Brand><Link to="/">Movielix</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Link to="/" className="mx-2">Home</Link>
                        <Link to="/movies" className="mx-2">Movies</Link>
                            <Nav.Link ></Nav.Link>
                            <Nav.Link ></Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                id="search"
                                onChange={(e)=>InputVal(e)}
                            />
                            <Button variant="outline-success" onClick={()=>MovieSearch()}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    </>
}