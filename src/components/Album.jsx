import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Album = () => {
    const params = useParams()
    const albumFetch = () => {
        
    };

    return(
        <>
            <Container fluid className="text-white position-absolute top-0 px-3"
                style={{backgroundImage: "linear-gradient(#b4b4b4 0%, #000000 100%)"}}>
                <Row className="row mt-5 px-2 py-2">
                <Col className="col-12 col-md-3">
                    <img id="imgAlbum" className="img-fluid" src="assets/imgs/main/image-3.jpg" alt="album-cover"/>
                </Col>
                <Col className="col-12 col-md-9 d-flex flex-column justify-content-end">
                    <p id="tipe">ALBUM</p>
                    <h1 id="titleAlbum" className="fs-4 fw-bold pb-2">MASSIMA CONCENTRAZIONE</h1>
                    <p className="">
                    <img id="coverPic" className="rounded-circle" src="assets/imgs/search/image-4.jpg" height="30" alt="album-cover"/>
                    <span id="authorAlbum" className="fw-bold">Spotify</span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-dot"
                        viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                        </svg>
                    </span>
                    <span id="releaseDate">2017</span>
                    <span className="d-none d-md-inline"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fillRule="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                        </svg>
                    </span>
                    <span id="NumTrack" className="d-none d-md-inline">12 brani</span>
                    <span className="text-info d-none d-md-inlinea">16 min 20 sec</span>
                    </p>
                </Col>
                </Row>
            </Container>
            <Container id="cont" className="container-fluid bg-dark d-flex justify-content-between px-4">
                <div>
                <Button variant="none" className="d-none d-md-inline btn btn-primary rounded-circle px-2 me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="35" fillRule="currentColor" className="bi bi-play-fill"
                    viewBox="0 0 16 16">
                    <path
                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                </Button>
                <Button variant="none" className="bg-dark text-info border border-0 m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fillRule="currentColor" className="bi bi-heart"
                    viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                </Button>
                <Button variant="none" className="bg-dark text-info border border-0 m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fillRule="currentColor"
                    className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                    <path fillRule-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                    </svg>
                </Button>
                <Button variant="none" className="d-none d-md-inline bg-dark text-info border border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fillRule="currentColor" className="bi bi-three-dots"
                    viewBox="0 0 16 16">
                    <path
                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </Button>
                <Button variant="none" className="d-md-none bg-dark text-info border border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fillRule="currentColor"
                    className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path
                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                </Button>
                </div>
                <div>
                <Button variant="none" className="d-md-none btn btn-primary rounded-circle px-2 me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="35" fillRule="currentColor" className="bi bi-play-fillRule"
                    viewBox="0 0 16 16">
                    <path
                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                </Button>
                </div>
            </Container>
            <Container fluid className="p-4 bg-dark">
                <Row className="row align-items-start text-info">
                <Col className="d-none d-md-block col-md-4"># Titolo</Col>
                <Col className="d-none d-md-block col-md-4 ps-6">Riproduzioni</Col>
                <Col className="d-none d-md-block col-md-4 ps-7">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-clock"
                    viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                </Col>
                </Row>
            </Container>
            <Container fluid id="containerAlbum" className=" text-white bg-dark mt-3 px-4"></Container>
        </>
    )
};

export default Album;