import React from "react";
import usmallImg from '../assets/images/usmall.png';
import iapImg from '../assets/images/iap.jpg';
import iapMoImg from '../assets/images/iapMo.jpg';
function Project() {
    return (
        <>
            <section className="py-5 project" id="pro">
                <div className="container py-md-5">
                    <h3 className="w3l-heading">Projects</h3>
                    <div className="row pro-row">
                        <div className="col-md-8" data-aos="fade-right">
                            <h3 className="mb-4">Lead Frontend Engineer</h3>
                            <p style={{ marginTop: '2rem' }}>
                                <span><b>Project: </b></span>
                                <span>USmall</span>
                            </p>
                            <p style={{ marginTop: '1.2rem' }}>
                                <span><b>Project Description: </b></span>
                                <span>The project is about e-commerce company buying products from
                                    online international platforms such as Amazon, Adidas and etc,.
                                    The company will directly buy the products from oversea sites and convert the price into Vietnamdong. After that,
                                    their staffs will take the products and give customers
                                    in Vietnam door-to-door. Customers in Vietnam only need to shop online and pay the final price. </span>
                            </p>
                            <p style={{ marginTop: '1.2rem' }}>
                                <span><b>Team size: </b></span>
                                <span>4</span>
                            </p>
                            <p style={{ marginTop: '1.2rem' }}>
                                <span><b>Responsiblities: </b></span>
                                <span>Evaluating front-end technologies, making design decisions, and leading the effort to build
                                    front-end projects from scratch by using latest and popular technologies: ReactJS,
                                    Redux. Define the architecture, coding convention. Reviewing code & cooperate
                                    with backend teams to integrate API to the frontend. Refactor, write unit tests and
                                    documentation to help onboard developers adapt faster and easier. Working directly
                                    with the client and team to define the product roadmap. Build features
                                    and improvements based on the roadmap.</span>
                            </p>
                            <p style={{ marginTop: '1.2rem' }}>
                                <span><b>Technologies: </b></span>
                                <span>Frontend: ReactJS, TypeScript, Redux.  Backend: NodeJS, MongoDB, Rest API</span>
                            </p>
                        </div>
                        <div className="col-md-4 col-img" data-aos="fade-left">
                            <img src={usmallImg} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row pro-row">
                        <div className="col-md-4 col-img" data-aos="fade-right">
                            <img src={iapImg} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8 mt-5" data-aos="fade-left">
                            <h3 className="mb-4">Full Stack Developer</h3>
                            <p style={{ marginTop: '2rem' }}>
                                <span><b>Project: </b></span>
                                <span>MyAssurance</span>
                            </p>
                            <p style={{ marginTop: '1.2rem' }}>
                                <span><b>Project Description: </b></span>
                                <span>Development of MyAssurance System Requirement
                                    Specifications for Integrated Assurance Project, Group Health, Safety, Security and Environment.
                                    The purpose of this PSR is to create a new seamless digital integration tool (MyAssurance) for all
                                    PETRONAS operating and business units by embedding standardized & simplified processes </span>
                            </p>
                            <p style={{ marginTop: '1.2rem' }}>
                                <span><b>Team size: </b></span>
                                <span>20</span>
                            </p>
                            <p style={{ marginTop: '1.2rem' }}>
                                <span><b>Responsiblities: </b></span>
                                <span>Estimated and implemented user stories. Implement back end and front end. Built common component for front end.

                                </span>
                            </p>
                            <p style={{ marginTop: '1.2rem' }}>
                                <span><b>Technologies: </b></span>
                                <span>Frontend: Angular, TypeScript, Webpack, Redux. Backend: Net Core, SQL, Rest API</span>
                            </p>
                        </div>
                    </div>
                    <div className="row pro-row">
                        <div className="col-md-8" data-aos="fade-right">
                            <h3 className="mb-4">Mobile Developer</h3>
                            <p style={{ marginTop: '2rem' }}>
                                <span><b>Project: </b></span>
                                <span>MyAssurance - Mobile</span>
                            </p>
                            <p style={{ marginTop: '1.2rem' }}>
                                <span><b>Project Description: </b></span>
                                <span>MyAssurance – Mobile is a module app of MyAssurance above, App is the dashboards to
                                    show report and statistics. It is easy for everone to check and know</span>
                            </p>
                            <p style={{ marginTop: '1.2rem' }}>
                                <span><b>Team size: </b></span>
                                <span>5</span>
                            </p>
                            <p style={{ marginTop: '1.2rem' }}>
                                <span><b>Responsiblities: </b></span>
                                <span>Built the structure of application, Evaluating mobile technologies. Developed the application feature
                                    Reviewing code & cooperate with backend teams to integrate API to the mobile</span>
                            </p>
                            <p style={{ marginTop: '1.2rem' }}>
                                <span><b>Technologies: </b></span>
                                <span>Frontend: React-native, TypeScript, Redux. Backend: Net Core, SQL, Rest API</span>
                            </p>
                        </div>
                        <div className="col-md-4 col-img" data-aos="fade-left">
                            <img src={iapMoImg} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Project