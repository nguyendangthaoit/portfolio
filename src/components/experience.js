
function Experience() {
    const data = [
        {
            period: '2022 - Now',
            title: 'SENIOR APPLICATION DEVELOPER',
            compony: '(FPT Malaysia)',
            desc: `Estimate and manage user stories. Communicate with end user and PM. Build and develop systems.
            Evaluating technologies. Review and support team member's code. 
            Use tech Net core, TypeScript, SQL, VueJS, Dev.azure.`
        },
        {
            period: '2020 - 2022',
            title: 'SENIOR FRONT END DEVELOPER',
            compony: '(FPT Malaysia)',
            desc: `Evaluating front-end technologies. Defined the architecture, coding convention. 
            Developed web, mobile application. Communicated with client. Used tech .Net, Angular, ReactJS, React-Native, Dev.azure.`
        },
        {
            period: '2020 - 2021',
            title: 'SENIOR APPLICATION DEVELOPER',
            compony: 'Freelancer, Outsource',
            desc: `Communicated with client and got documents. Estimated and manage tasks. Defined the architecture, coding convention. 
            Reviewed and support team member. Deployed and test application. Used tech NodeJS, MongoDB, ReactJS, React-Native, Git, Shopify
            platform.`
        },
        {
            period: '2017 - 2019',
            title: 'FRONT END DEVELOPER',
            compony: '(FPT Software Hanoi)',
            desc: `Implemented front end side. Integrated API to the frontend. Wrote unit test
            Deployed application. Communicated with tester and user. Use tech Net, SQL, Angular, AngularJS, ReactJS, Jira.`
        },
        {
            period: '2015 - 2017',
            title: 'INTERN, CODER',
            compony: '(NACENTECH)',
            desc: `Studied about process working.\n Researched and developed Android mobile.\n Developed desktop application.\n
            Used tech C#, C, java.\n`
        }
    ];

    return (
        <>
            <div id="exp" className="agile-edu exp">
                <div className="container">
                    <h3 className="w3l-heading">Experience</h3>
                    {
                        data.map((item, i) =>
                            (i % 2 === 0) ?
                                <div className="work-info" key={i}>
                                    <div className="col-md-6 col-sm-6 col-xs-6 work-right work-right2">
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6 work-left work-left2" data-aos="fade-down-right">
                                        <div className="col-md-6  col-sm-6 col-xs-6 work1 detail">
                                            <h4>{item.title}</h4>
                                            <h5>{item.compony}</h5>
                                            <span>{item.desc}</span>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-6 work2">
                                            <h5 className="node">{item.period}</h5>
                                            <span></span>
                                        </div>
                                    </div>
                                </div> :
                                <div className="work-info" key={i}>
                                    <div className="col-md-6 col-sm-6 col-xs-6 ">
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6 work-right" data-aos="fade-down-left">
                                        <div className="col-md-6 col-sm-6 col-xs-6 work2">
                                            <span></span>
                                            <h5 className="node">{item.period}</h5>
                                        </div>
                                        <div className="col-md-6  col-sm-6 col-xs-6 work-right1 detail">
                                            <h4>{item.title}</h4>
                                            <h5>{item.compony}</h5>
                                            <span>{item.desc}</span>
                                        </div>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}
export default Experience