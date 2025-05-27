import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-6.png";
import projImg6 from "../assets/img/project-7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import cer2 from "../assets/img/IMG.jpg";
import cer1 from "../assets/img/IMG1.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Tic Tac Toe ",
      description: "Tic Tac Toe Game ",
      imgUrl: projImg5,
      url: "https://anishkarki10.github.io/Tic-Tac-Toe/",
    }, {
      title: "Weather Tracker",
      description: "It can help Users to track Weather Conditions",
      imgUrl: projImg1,
      url: "https://anishkarki10.github.io/Weather/",
    },
    {
      title: "QR Code Generator",
      description: "It can help Users to Generate QR Codes",
      imgUrl: projImg4,
      url: "https://anishkarki10.github.io/QR-Code-Generator/",
    },
    {
      title: "News Website",
      description: "Design & Development",
      imgUrl: projImg3,
      url: "https://news.anishkarki.com",
    },
    {
      title: "Ecommerce Website",
      description: "Design & Development",
      imgUrl: projImg6,
      url: "https://anishkarki10.github.io/Ak-store/",
    },
    {
      title: "Ingo Website",
      description: "Project",
      imgUrl: projImg2,
      url: "https://anishkarki10.github.io/ingo/",
    },


  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects & Certificates</h2>
                  <p>
                    Below are the projects I have worked on, along with
                    certificates I’ve earned throughout my learning journey. Feel
                    free to explore both my hands-on work and achievements.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center nav-custom"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Projects <br />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-code w-8 h-8 text-white"
                          >
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                          </svg>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Certificates <br />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-award w-8 h-8 text-white"
                          >
                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                            <circle cx="12" cy="8" r="6"></circle>
                          </svg>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-center text-center">
                          {[cer1, cer2].map((img, index) => (
                            <Col xs={12} md={6} key={index} className="mb-4">
                              <div
                                className="certificate-card"
                                onClick={() => setSelectedImage(img)}
                              >
                                <img
                                  src={img}
                                  alt={`Certificate ${index + 1}`}
                                  className="certificate-image"
                                />
                                <div className="certificate-hover-overlay">
                                  <div className="hover-content">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="28"
                                      height="28"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="white"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M21 15v4a2 2 0 0 1-2 2h-4" />
                                      <polyline points="16 21 21 21 21 16" />
                                      <path d="M3 9V5a2 2 0 0 1 2-2h4" />
                                      <polyline points="8 3 3 3 3 8" />
                                    </svg>
                                    <span>View Certificate</span>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>

                        {/* ✅ MODAL VIEWER FOR CERTIFICATES */}
                        {selectedImage && (
                          <div
                            className="lightbox-overlay"
                            onClick={() => setSelectedImage(null)}
                          >
                            <div
                              className="lightbox-content"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <button
                                className="close-btn"
                                onClick={() => setSelectedImage(null)}
                              >
                                ✕
                              </button>
                              <img
                                src={selectedImage}
                                alt="Enlarged Certificate"
                                className="lightbox-img"
                              />
                            </div>
                          </div>
                        )}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};