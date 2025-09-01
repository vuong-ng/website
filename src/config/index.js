/**
 * This is the config file where you can edit information as you want.
 * 
 * There are 3 variable objects which contain all the information.
 * 
 * 1. CommonConfig
 *      This variable contains all the common configuration of your profile
 *      including your name, your social links and the path to draw the signature.
 * 2. ProjectsConfig
 *      This variable contains all the information which will be part of the
 *      projects section. Here you can add your own projects and provide a link for them
 *      and also change the icon as per your liking.
 * 3. CustomSectionsConfig
 *      Now this is the fun part. This variable is an array which can hold any number
 *      of sections. Here you can define any of your custom sections may it be "Work", "Reviews",
 *      "Portfolio" or whatnot. The "content" property supports JSX so you can style or use it
 *      however you like!
 * 
 * So what are you waiting for? GO FOR IT!
 */

import React from 'react';

import { Icons } from './icons';

// CUSTOM ICONS
// import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import WbIridescentIcon from '@material-ui/icons/WbIridescent';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
// import RateReviewIcon from '@material-ui/icons/RateReview';
import Description from '@material-ui/icons/Description';

// CUSTOM COMPONENTS
import CircleButton from '../components/CircleButton/CircleButton';

// CONFIGURABLE TEXT BEGINS HERE

/** Common config for top section and footer */
const CommonConfig = {
    // Whether to add the free Palestine screen at the start
    addFreePalestine: false,
    // Name that will be displayed at the top
    name: 'vuong nguyen',
    // Tagline that will be displayed after the name
    tagline: 'software engineer',
    // Configuration for signature in the top section
    signature: {
        // Viewbox of the signature SVG
        viewBox: '0 0 100 100',
        // This is the data inside the "d" attribute of the <path> tag in SVG
        signaturePathD: `M9.3,62c2.6-1.4,4.9-3.8,7-5.8c6.9-6.6,11.8-14.9,12.7-24.6
        c0-0.5-0.1-1.2-0.6-1.2c-0.2,0-0.4,0.1-0.5,0.3c-0.5,0.5-0.7,1.1-1,1.7c-5.4,13.5-10.2,27.3-14,41.4c-0.6,2.2-1.2,4.4-1.7,6.6
        c-0.4,1.8-0.8,3.6-0.5,5.4c0.1,0.5,0.2,1,0.6,1.3c1,0.9,2.5,0,3.4-1c3.7-4.2,5.9-9.7,6.6-15.3c0.7-5.6,0-11.3-1.5-16.7
        c9,1,15.9-6.4,19.4-13.9c1.5-3.1,2.8-6.6,3.3-10c0.3-2.4,0.1-4.9-1-7c-2.6-4.8-9.6-5.1-14.3-4.2c-5.6,1.1-10.7,4.3-14.3,8.6
        c-5.2,6.2-7.6,14.4-8,22.4c-0.2,5.2,0.6,11,4.5,14.5c3.2,2.8,7.9,3.4,11.9,2.2s7.5-4,10.1-7.3c2.6-3.2,4.5-7,6.6-10.5
        c0.4-0.6,0.8-2.2-0.5-2c-0.6,0.1-1,0.6-1.4,1.1c-1.5,2.1-3.1,4.2-3.8,6.6C32,55.8,32,57.3,33,57.8c0.9,0.4,1.9-0.2,2.5-0.9
        c2.2-2.3,2.8-5.7,3-8.8c-0.3,2.4-0.3,4.9,0.1,7.3c0.1,0.5,0.2,1,0.6,1.2c0.5,0.2,1.1-0.2,1.5-0.7c2.1-2.5,2.5-6,2.9-9.2
        c-0.2,2.4-0.3,4.8,0,7.1c0,0.3,0.1,0.7,0.4,0.7c0.2,0,0.4-0.2,0.5-0.4c1.6-2.6,2.7-5.4,3.2-8.4c0,1.6,0.3,3.2,0.9,4.7
        c0.2,0.6,0.6,1.2,1.2,1.3c0.5,0,1-0.4,1.3-0.8c1.2-1.5,1.9-3.2,2.7-5c0.2-0.5,0.4-1.1,0.3-1.6c-0.2-1-2.5-0.2-0.6,1.2
        c2,1.5,4.3,1.2,6.3-0.3c1.4-1.1,2.4-2.7,2.7-4.5c0.3-1.9-2.1-0.2-2.7,0.4c-1.2,1.2-1.8,3-1.5,4.7c0.2,0.9,0.9,1.9,1.8,1.9
        c0.7,0,1.3-0.5,1.8-1.1c1.4-1.8,1-4.1,0.6-6.2c0.4,2,0.7,4.9,3.4,5.5c2.1,0.5,4.6-0.9,6.3-2.1c1.2-0.9,2.1-2,2.6-3.4
        c0.5-1.1,1.1-3.1,0.4-4.2c-0.4-0.6-1.1-1-1.8-1.3c-0.8-0.3-1.6-0.3-2.4-0.2c-1,0.3-1.9,1-2.5,1.8c-1,1.3-1.4,3.1-0.8,4.7
        c0.5,1.5,2.2,2.7,3.8,2.5c1.7-0.2,2.9-1.7,3.7-3.2c1.4-2.5,2.1-5.3,2.7-8.1c0.4-1.9,0.8-3.9,1-5.8c0.3-2,0.6-3.9,0.6-5.9
        c-1.3,2.4-2,5-2.7,7.6c-0.7,2.9-1.1,5.9-1.5,8.9c-0.2,1.5-0.4,3.1-0.1,4.6c0.1,0.4,0.2,0.9,0.5,1.2c0.3,0.2,0.7,0.3,1.1,0.3
        c1.4,0.1,2.8-0.1,4.2-0.3c-5.2,1.9-10.4,3.7-15.5,5.7c-8.3,3.1-16.6,6.3-24.6,9.9c-4.3,1.9-8.4,4.1-12.5,6.3
        c12.1-4.7,24.1-9.4,36.3-13.7c10.6-3.7,21.4-7.1,32.3-9.9`,

    },
    email: 'nguyen_v4@denison.edu',
    // Information for social media accounts
    social: [
        {
            // Name of the social media platform
            name: 'GitHub',
            // Link to your account
            link: 'https://github.com/vuong-ng',
            // (Optional) Icon of the social media platform
            // default icon will be used in case of no value
            icon: Icons['github']
        },
        {
            name: 'LinkedIn',
            link: 'https://linkedin.com/in/vuongnguyen003/'
        },
        // {
        //     name: 'Facebook',
        //     link: 'https://linkedin.com/in/vuongnguyen003/'
        // },
        // {
        //     name: 'Twitter',
        //     link: 'https://linkedin.com/in/vuongnguyen003/'
        // },
        {
            name: 'Email',
            link: 'mailto:nguyen_v4@denison.edu'
        },
        {
            name: 'Resume',
            link: 'https://drive.google.com/drive/u/0/folders/1oVtbuUSRnhEdVJ_tEUZrCCaYZcUqvuji',
            icon: <Description />
        }
    ]
};

/** Config for the projects section */
const ProjectsConfig = {
    // Name / title of the section
    name: 'projects',
    // Icon next to the header title. The headerIcon can use any SVG icon, material icons are preferred
    // See https://material-ui.com/components/material-icons/
    headerIcon: <ComputerIcon />,
    // Extra classes to apply styling
    // "section-reverse" class makes a section flow from right to left
    extraClass: '',
    // Projects
    projects: [
        {
            name: 'ArchyX Agentic AI for Heritage Square Foundation (3rd prize Opportunity Hack)',
            icon: Icons['orderChatbot'],
            description: `Archyx AI transforms Google Drive archive management by providing an intelligent, 
                        conversational interface that makes historical documents as accessible as having
                        a natural conversation. Built specifically for the Heritage Square Foundation,
                        our platform combines cutting-edge AI with practical archival management needs.`,
            image: `${process.env.PUBLIC_URL}/images/archyX.png`,
            links: [
                {
                    tooltip: 'See source',
                    link: 'https://github.com/vuong-ng/meal_order_chatbot',
                    icon: Icons['code']
                }
            ]
        },
        {
            // Name of the project
            name: 'AI-powered flashcards generator SaaS',
            // Icon of the project
            icon: Icons['flashcard'],
            // Description of the project
            description: `This application automatically creates flashcards based on user input using AI, helping to streamline study 
                        sessions.
                        It integrates Stripe API to handle payments and
                        utilizes Clerk API for secure user authentication,
                        offering a smooth and seamless user experience.`,
            // Image
            image: `${process.env.PUBLIC_URL}/images/flashycards.png`,
            // Links to the project
            links: [
                {
                    // Tooltip of the link
                    tooltip: 'See source',
                    // Link URL
                    link: 'https://github.com/vuong-ng/flashcards_saas',
                    // Icon of the button
                    icon: Icons['code']
                }
            ]
        },
        {
            name: 'Java E-commerce system',
            icon: <WbIridescentIcon />,
            image: `${process.env.PUBLIC_URL}/images/java_ecommerce.png`,
            description: `A comprehensive Java-based e-commerce backend system supporting multi-role user management, product catalog, and transaction processing.`,
            links: [
                {
                    tooltip: 'See source',
                    link: 'https://github.com/vuong-ng/E-commerce-spring-shop',
                    icon: Icons['code']
                },
                
            ]
        },
        {
            name: 'Develop for Good | Students of Service (SOS) website',
            icon: <BusinessCenterIcon />,
            image: `${process.env.PUBLIC_URL}/images/sos.png`,
            description: `Redesigned and developed the Students of Service website, increasing user engagement by 150%. 
                        Implemented a new site architecture with a shopping cart powered by Firebase and Stripe,
                        improving donation accessibility and boosting revenue by 30%.`,
            // links: [
            //     {
            //         tooltip: 'Develop for Good',
            //         link: 'https://www.developforgood.org/',
            //         icon: Icons['code']
            //     }
            // ]
        },
        {
            name: 'Java Chat App Server',
            icon: <BusinessCenterIcon />,
            image: `${process.env.PUBLIC_URL}/images/java_chat.png`,
            description: `A lightweight real-time chat application using Java WebSocket API, featuring a multithreaded server, client handler, and a simple Swing-based GUI for client-side interaction.
            This project showcases fundamental concepts in system design, concurrency, and network communication — ideal for demonstrating your distributed systems interest.`,
            links: [
                {
                    tooltip: 'See source',
                    link: 'https://github.com/vuong-ng/Java-Chat-Server',
                    icon: Icons['code']
                }
            ]
        },
        {
            name: 'Caching Proxy Server',
            icon: <BusinessCenterIcon />,
            image: `${process.env.PUBLIC_URL}/images/caching_proxy.png`,
            description: `A CLI tool that starts a caching proxy server, 
                        it will forward requests to the actual server and
                        cache the responses. If the same request is made again,
                        it will return the cached response instead of forwarding the request to the server.`,
            links: [
                {
                    tooltip: 'See source',
                    link: 'https://github.com/vuong-ng/caching-proxy-server-nodejs',
                    icon: Icons['code']
                }
            ]
        }
    ]
};

const SystemProjectsConfig = {
    name: 'system projects',
    headerIcon: <BusinessCenterIcon />,
    extraClass: '',
    projects: [
        {
            name: 'Pandos Operating System',
            icon: <BusinessCenterIcon />,
            image: `${process.env.PUBLIC_URL}/images/pandos.png`,
            description: `Pandos is a major educational project that we built in our Operating System course.
             The Pandos operating system was originally inspired by the T.H.E. system outlined by Dijkstra back in 1968.
             Each layer i was an abstract machine to layer i + 1;
             successively building up the capabilities of the system for each new layer to build upon.
            In this project we built 7 Levels of Pandos`,
            links: [
                {
                    tooltip: 'See source',
                    link: 'https://github.com/vuong-ng/PandOS',
                    icon: Icons['code']
                }
            ]
        }
    ]
}

/** Config for sections */
const CustomSectionsConfig = [
    // PROJECTS SECTION
    {
        // Name of the section
        name: 'web app projects',
        // Icon next to the header title. The headerIcon can use any SVG icon, material icons are preferred
        // See https://material-ui.com/components/material-icons/
        headerIcon: <ComputerIcon />,
        // Extra classes to apply styling
        // "section-reverse" class makes a section right to left
        extraClass: '',
        // If you don't want a section in menu, make this true
        notInMenu: false,
        // Content inside the section
        content: (
            <>
                    {ProjectsConfig.projects.map((project, index) => {
                        return (
                            <div key={'project-' + index}>
                                <h3 style={{ fontSize: '1.4rem' }}>{project.icon} {project.name}</h3>
                                <p>{project.description}</p>
                                {/* Add image below the description if project.image exists */}
                                {project.image && (
                                    <div style={{ textAlign: 'center', margin: '1rem 0', minHeight: '2.5em',  marginBottom: '1em' }}>
                                        <img src={project.image} alt={project.name + ' screenshot'} style={{ maxWidth: '100%', borderRadius: '8px' }} />
                                    </div>
                                )}
                                <div style={{ textAlign: 'right' }}>
                                    {project.links && project.links.map((link, linkIndex) => {
                                        return (
                                            <CircleButton key={'project-link-' + index + linkIndex} link={link.link} 
                                                target="_blank" tooltip={link.tooltip} size={1.4}>
                                                {link.icon}
                                            </CircleButton>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
            </>
        )
    },
    {
        name: 'system projects',
        headerIcon: <ComputerIcon />,
        extraClass: '',
        notInMenu: false,
        content: (
            <>
                {SystemProjectsConfig.projects.map((project, index) => (
                    <div key={'system-project-' + index}>
                        <h3 style={{ fontSize: '1.4rem' }}>{project.icon} {project.name}</h3>
                        <p>{project.description}</p>
                        {project.image && (
                            <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                                <img src={project.image} alt={project.name + ' screenshot'} style={{ maxWidth: '100%', borderRadius: '8px' }} />
                            </div>
                        )}
                        <div style={{ textAlign: 'right', minHeight: '2.5em', marginBottom: '1em' }}>
                            {project.links && project.links.map((link, linkIndex) => (
                                <CircleButton key={'system-project-link-' + index + linkIndex} link={link.link}
                                    target="_blank" tooltip={link.tooltip} size={1.4}>
                                    {link.icon}
                                </CircleButton>
                            ))}
                        </div>
                    </div>
                ))}
            </>
        )
    },
    // ABOUT SECTION
    {
        name: 'about',
        headerIcon: <InfoIcon />,
        extraClass: 'about-section section-reverse',
        content: (
            <>
                <h4>{Icons['helpoutline']} who am i?</h4>
                <p>
                    A software engineer with background in both fullstack development and system engineering. 
                    <br></br>
                    Nothing excites me more than bringing ideas to life through code. From crafting innovative solutions to exploring the latest in AI. Also love going to hackathon! :)
                </p>

                <h4>{Icons['code']} programming</h4>
                <p className="programming-icons">
                    {/* {Icons['java']} */}
                    {Icons['cpp']}
                    {Icons['java']}
                    {Icons['python']}
                    {/* {Icons['typescript']} */}
                    {Icons['javascript']}
                </p>
                <p className="programming-icons">
                    {/* {Icons['graphql']} */}
                    {Icons['mysql']}
                    {/* {Icons['php']} */}
                    {/* {Icons['mongodb']} */}
                    {Icons['nodejs']}
                    {Icons['react']}
                    {/* {Icons['angular']} */}
                    {Icons["googleCloud"]}

                </p>
            </>
        )
    },
    // {
    //     name: 'reviews',
    //     headerIcon: <RateReviewIcon />,
    //     content: (
    //         <>
    //             <h4 style={{ fontSize: '2em' }}>{Icons['helpoutline']} what do others say?</h4>
    //             <p>
    //                 <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
    //                 <br />
    //                 Fawad did an excellent job for us on Phoenix. He worked hard, writing very good and legible code and made an invaluable contribution to the project.
    //             </p>
    //             <p>We like that he is very motivated, self-driven and is already an experienced and knowledgable coder.</p>
    //             <p style={{ textAlign: 'right', fontSize: 'small' }}>
    //                 <i>
    //                     <b>Edward Moyse</b>
    //                     <br />
    //                     Software Coordinator
    //                     <br />
    //                     CERN
    //                 </i>
    //             </p>
    //             <p>
    //                 <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
    //                 <br />
    //                 The mentors have noticed that Fawad has strong technical skills, an ability to learn quickly new technologies, that he is very flexible and open minded, ready to discuss his views and to ponder about the pros and cons in a thoughtful and collected manner, making his own decisions taking into account the feedback he gets without accepting everything nor rejecting anything.
    //             </p>
    //             <p style={{ textAlign: 'right', fontSize: 'small' }}>
    //                 <i>
    //                     <b>Stéphane Lauriere &amp; Ecaterina Moraru</b>
    //                     <br />
    //                     XWiki SAS
    //                 </i>
    //             </p>
    //             <p>
    //                 <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
    //                 <br />
    //                 I have really appreciated your confidence to solve problems yourself and follow your own intuition even when it goes against what I was suggesting. I feel you were mostly right :)
    //             </p>
    //             <p style={{ textAlign: 'right', fontSize: 'small' }}>
    //                 <i>
    //                     <b>James Knight</b>
    //                     <br />
    //                     GeNN Team
    //                     <br />
    //                     Research Fellow
    //                     <br />
    //                     The University of Sussex
    //                 </i>
    //             </p>
    //         </>
    //     )
    // }
];

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
