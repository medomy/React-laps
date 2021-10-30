import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card } from "react-bootstrap";
import instanceMovies from "../../network/axiosconfig";
export default function Detais(props) {
    const param = useParams();
    console.log(param.id);
    console.log(props);
    const [movie, setmovie]   = useState({});
    useEffect(() => {
        instanceMovies.get(`/${param.id}?api_key=4cef01add3ed74048591b83881eee0c9`)
            .then((res) => {
                console.log(res.data);
                setmovie(res.data);
                console.log(movie);
            })
            .catch((err) => console.log(err))

    }, [])
    return <>

        <div className="row justify-content-center my-5 mx-3">
            <Card className="bg-dark text-white">
                <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.overview}
                    </Card.Text>
                    <Card.Text>{movie.tagline}</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>

    </>
}