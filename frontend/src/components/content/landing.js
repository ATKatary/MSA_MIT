import { COLORS } from '../../constants';

import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export const LANDING_GC = ({images, ...props}) => {
    return {
        MISSION: {
            title: "Mission",
            description: `
                Representing hundreds of Muslims, MIT Muslim Student Association is a close-knit and friendly community assisting the 
                diverse Muslims at MIT with their practice of Islam. 
                We offer social, spiritual, and academic programs and aim at building a strong community for all Muslims on campus.
            `,
            cards: [
                {
                    icon: PeopleIcon,
                    title: "Community",
                    description: "We build community",
                    style: {
                        color: COLORS.WHITE
                    }
                },
                {
                    icon: SchoolIcon,
                    title: "Academia",
                    description: "We have academia",
                    style: {
                        color: COLORS.WHITE
                    }
                },
                {
                    icon: VolunteerActivismIcon,
                    title: "Service",
                    description: "We do service",
                    style: {
                        color: COLORS.WHITE
                    }
                }
            ]
        },

        TEAM: {
            title: "Team",
            cards: [
                {
                    title: "President",
                    name: "Abdurahman Sherif",
                    picSrc: images("./ec/2023/sherif.jpeg")
                },
                {
                    name: "Mohamed Samb",
                    title: "Events Coordinator",
                    picSrc: images("./ec/2023/samb.jpeg"),
                    media: [
                        {href: "", icon: "fa-twitter"},
                        {href: "", icon: "fa-linkedin"} 
                    ]
                },
                
                {
                    name: "Abdul Kareem ",
                    title: "Academic Chair",
                    picSrc: images("./ec/2023/abdulkareem_ahmed.jpeg"),
                    media: [
                        {href: "", icon: "fa-twitter"},
                        {href: "", icon: "fa-linkedin"} 
                    ]
                }, 
                
                {
                    name: "Ahmed Zain",
                    title: "Academic Chair",
                    picSrc: images("./ec/2023/abdulkareem_ahmed.jpeg"),
                    media: [
                        {href: "", icon: "fa-twitter"},
                        {href: "", icon: "fa-linkedin"} 
                    ]
                    },
                
                {
                    name: "Noura Attili",
                    title: "External Relations Chair",
                    picSrc: images("./ec/2023/noura.jpeg"),
                    media: [
                        {href: "", icon: "fa-twitter"},
                        {href: "", icon: "fa-linkedin"} 
                    ]
                }, 
                {
                    name: "Fedaa Alsoufi",
                    title: "Community Service Chair",
                    picSrc: images("./ec/2023/fedaa.jpeg"),
                    media: [
                        {href: "", icon: "fa-twitter"},
                        {href: "", icon: "fa-linkedin"} 
                    ]
                },
                
                {
                    name: "Rumaisa Abdulhai",
                    title: "Community Service Chair",
                    picSrc: images("./ec/2023/rumisa.jpeg"),
                    media: [
                        {href: "", icon: "fa-twitter"},
                        {href: "", icon: "fa-linkedin"} 
                    ]
                }, {
                    name: "Yasmeen A Shabazz",
                    title: "Social Media Chair",
                    picSrc: images("./ec/2023/yasmeen.jpeg"),
                    media: [
                        {href: "", icon: "fa-twitter"},
                        {href: "", icon: "fa-linkedin"} 
                    ]
                },
                
                {
                    name: "Laiba Shahid",
                    title: "Publicity Chair",
                    picSrc: images("./ec/2023/laiba.jpeg"),
                    media: [
                        {href: "", icon: "fa-twitter"},
                        {href: "", icon: "fa-linkedin"} 
                    ]
                }, 
                {
                    name: "Amina Abdalla",
                    title: "Social Chair",
                    picSrc: images("./ec/2023/amina.jpeg"),
                    media: [
                        {href: "", icon: "fa-twitter"},
                        {href: "", icon: "fa-linkedin"} 
                    ]
                },
            ]
        },

        SISTER_NADA: {
            card: {
                name: "Nada Miqdadi El-Alami",
                title: "MSA Advisor and Chaplain",
                picSrc: images("./ec/2022/nada.jpg"),
            }
        }
    }
}