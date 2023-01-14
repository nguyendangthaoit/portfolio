import React from "react";
import usmallImg from '../assets/images/usmall.png';
import iapImg from '../assets/images/iap.jpg';
import iapMoImg from '../assets/images/iapMo.jpg';
function Project() {

    const data = [
        {
            role: 'Lead Frontend Engineer',
            project: 'USmall',
            description: `The project is about e-commerce company buying products from
            online international platforms such as Amazon, Adidas and etc,.
            The company will directly buy the products from oversea sites and convert the price into Vietnamdong. After that,
            their staffs will take the products and give customers
            in Vietnam door-to-door. Customers in Vietnam only need to shop online and pay the final price.`,
            teamSize: 4,
            responsiblities: `Evaluating front-end technologies, making design decisions, and leading the effort to build
            front-end projects from scratch by using latest and popular technologies: ReactJS,
            Redux. Define the architecture, coding convention. Reviewing code & cooperate
            with backend teams to integrate API to the frontend. Refactor, write unit tests and
            documentation to help onboard developers adapt faster and easier. Working directly
            with the client and team to define the product roadmap. Build features
            and improvements based on the roadmap.`,
            technologies: `Frontend: ReactJS, TypeScript, Redux.  Backend: NodeJS, MongoDB, Rest API`,
            img: usmallImg
        },
        {
            role: 'Full Stack Developer',
            project: 'MyAssurance',
            description: `Development of MyAssurance System Requirement
            Specifications for Integrated Assurance Project, Group Health, Safety, Security and Environment.
            The purpose of this PSR is to create a new seamless digital integration tool (MyAssurance) for all
            PETRONAS operating and business units by embedding standardized & simplified processes.`,
            teamSize: 20,
            responsiblities: `Estimated and implemented user stories. Implement back end and front end.
             Built common component for front end.`,
            technologies: `Frontend: Angular, TypeScript, Webpack, Redux. Backend: Net Core, SQL, Rest API.`,
            img: iapImg
        },
        {
            role: 'Mobile Developer',
            project: 'MyAssurance - Mobile',
            description: `MyAssurance – Mobile is a module app of MyAssurance above, App is the dashboards to
            show report and statistics. It is easy for everone to check and know.`,
            teamSize: 5,
            responsiblities: `Built the structure of application, Evaluating mobile technologies. Developed the application feature
            Reviewing code & cooperate with backend teams to integrate API to the mobile.`,
            technologies: `Frontend: React-native, TypeScript, Redux. Backend: Net Core, SQL, Rest API`,
            img: iapMoImg
        },
    ];
    const getDetail = (item) => <>
        <h3 className="mb-4">{item.role}</h3>
        <p style={{ marginTop: '2rem' }}>
            <span><b>Project: </b></span>
            <span>{item.project}</span>
        </p>
        <p style={{ marginTop: '1.2rem' }}>
            <span><b>Project Description: </b></span>
            <span>{item.description}</span>
        </p>
        <p style={{ marginTop: '1.2rem' }}>
            <span><b>Team size: </b></span>
            <span>{item.teamSize}</span>
        </p>
        <p style={{ marginTop: '1.2rem' }}>
            <span><b>Responsiblities: </b></span>
            <span>{item.responsiblities}</span>
        </p>
        <p style={{ marginTop: '1.2rem' }}>
            <span><b>Technologies: </b></span>
            <span>{item.technologies}</span>
        </p>
    </>
    const getImg = (item) => <img src={item.img} alt={item.img} className="img-fluid" />;

    return (
        <>
            <section className="py-5 project" id="pro">
                <div className="container py-md-5">
                    <h3 className="w3l-heading">Projects</h3>
                    {
                        data.map((item, i) =>
                            (i % 2 === 0) ?
                                <div className="row pro-row" key={i}>
                                    <div className="col-md-8" data-aos="fade-right">
                                        {getDetail(item)}
                                    </div>
                                    <div className="col-md-4 col-img" data-aos="fade-left">
                                        {getImg(item)}
                                    </div>
                                </div> :
                                <div className="row pro-row" key={i}>
                                    <div className="col-md-4 col-img" data-aos="fade-right">
                                        {getImg(item)}
                                    </div>
                                    <div className="col-md-8 mt-5" data-aos="fade-left">
                                        {getDetail(item)}
                                    </div>
                                </div>
                        )
                    }
                </div>
            </section>
        </>
    );
}

export default Project