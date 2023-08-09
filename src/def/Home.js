import React from "react";

export default function Home(props){
    
    return(
        <>
        <Slides mode={props.m}/>
        <div className="container-fluid my-4 text-center" style={props.mode}>
            <h1><b>Begin Your Adventure Today!</b></h1>
            <div className="my-3">
                <p>With over 500 art & design, craft, dance and singing classes, 9 different schools, and 4 STEM programs, the Academy has an educational path for you. From day one, you’ll begin to build a <br /> professional portfolio of work. You can study online from anywhere in the world—virtually in real time, or on demand on your schedule— or on campus with us in San Francisco. <br /> Whether you are seeking a degree, want to enhance your skills, or just enjoy the thrill of making art. <br /> <b>IT STARTS HERE!</b></p>
            </div>
            <Content1 mode={props.mode}/>
            <Content2 mode={props.mode}/>
            <Content3 mode={props.mode}/>
            <Content4 mode={props.mode}/>
        </div>
        </>
    )
}

function Slides(props){
    return(
        <>
        <div id={`carouselExample${props.mode==='light'?'Captions':'Dark'}`} className={`carousel ${props.mode==='light'?'':'carousel-dark'} slide container my-4`} data-bs-ride="carousel">
          <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
                  <img src="/images/painting1.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block" style={{color:'#D32D41'}}>
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                  </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                  <img src="/images/craft2.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block"  style={{color:'white'}}>
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                  </div>
              </div>
              <div className="carousel-item">
                  <img src="/images/dance2.jpg" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                  </div>
              </div>
              <div className="carousel-item">
                  <img src="/images/singing1.png" className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                  </div>
              </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
          </button>
        </div>
        </>
    )
}

function Content1(props){
    return(
        <div className="row g-0 bg-light position-relative" style={props.mode}>
            <div className="col-md-4 mb-md-0 p-md-4" style={props.mode}>
              <img src="/images/craft1.webp" className="w-100 rounded my-5" alt="..."/>
            </div>
            <div className="col-md-8 p-4 ps-md-0 text-center" style={props.mode}>
                <h1 className="my-5"><b>Why Join Us</b></h1>
                <p className="my-4">Content yet to be entered...</p>
            </div>
        </div>
    )
}

function Content2(props){
    return(
        <div className="row g-0 bg-light position-relative" style={props.mode}>
            <div className="col-md-8 p-4 ps-md-0 text-center" style={props.mode}>
                <h2 className="my-5"><b>Performance and Visual Arts</b></h2>
                <p className="my-4"><b>Expressing Harmony: Where creativity takes center stage in every form.</b></p>
                <p>An enchanting fusion of artistic expressions, spanning from the intricate strokes of visual arts <br />and the skillful craftmanship of craft to the melodious notes of singing and the graceful movements of dance, <br /> all converging to create a symphony of human creativity and emotion.</p>
            </div>
            <div className="col-md-4 mb-md-0 p-md-4" style={props.mode}>
              <img src="/images/craft1.webp" className="w-100 rounded my-5" alt="..."/>
            </div>
        </div>
    )
}

function Content4(props){
    return(
        <div className="row g-0 bg-light position-relative" style={props.mode}>
            <div className="col-md-8 p-4 ps-md-0 text-center" style={props.mode}>
                <h2 className="my-5"><b>Events</b></h2>
                <p className="my-4">Winter Camp will be starting from 15-December-2023 for students from class 3 to class 12. <br /> Craft and dance are the main topic of our Winter Camp organised by the school. <br /> For more details visit our Community section. Classes will be heald for three weeks. <br /> Enroll in your favourite course.</p>
                <a class="nav-link my-5" href="#"><b>GET REGISTERED NOW!</b></a>
            </div>
            <div className="col-md-4 mb-md-0 p-md-4" style={props.mode}>
              <img src="/images/craft1.webp" className="w-100 rounded my-5" alt="..."/>
            </div>
        </div>
    )
}

function Content3(props){
    return(
        <div className="row g-0 bg-light position-relative" style={props.mode}>
            <div className="col-md-4 mb-md-0 p-md-4" style={props.mode}>
              <img src="/images/craft1.webp" className="w-100 rounded my-5" alt="..."/>
            </div>
            <div className="col-md-8 p-4 ps-md-0 text-center" style={props.mode}>
                <h2 className="my-5"><b>Short Courses</b></h2>
                <p className="my-4">We have more than 100 different certified short courses avilable including overall domains provided by us. <br /> Weather you are seeking a certificate, want to enhance your skills, or just enjoy the thrill of doing. <br /> Age does not maters.</p>
                <a className="nav-link my-5" href="#"><b>GET STARTED HERE!</b></a>
            </div>
        </div>
    )
}