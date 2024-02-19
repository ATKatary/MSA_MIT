import { COLORS } from '../../constants';

import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export const LANDING_GC = ({images, ...props}) => {
    return {
        MISSION: {
            title: "Mission",
            description: `
                Representing hundreds of Muslims, MIT Muslim Students Association is a close-knit and friendly community assisting the 
                diverse Muslims at MIT with their practice of Islam. 
                We offer social, spiritual, and academic programs and aim at building a strong community for all Muslims on campus.
            `,
            cards: [
                {
                    icon: PeopleIcon,
                    title: "Community",
                    description: "Fostering a vibrant Muslim community at MIT through social events, cultural activities, and interfaith dialogues, promoting unity and understanding.",
                    style: {
                        color: COLORS.WHITE
                    }
                },
                {
                    icon: SchoolIcon,
                    title: "Academia",
                    description: "Supporting academic excellence among Muslim students with mentoring, study breaks, and discussions on integrating faith and knowledge in diverse fields.",
                    style: {
                        color: COLORS.WHITE
                    }
                },
                {
                    icon: VolunteerActivismIcon,
                    title: "Service",
                    description: "Dedicated to serving the broader community through volunteer initiatives, charity events, and outreach programs, embodying the spirit of giving in Islam.",
                    style: {
                        color: COLORS.WHITE
                    }
                }
            ]
        },

        SISTER_NADA: {
            card: {
                name: "Nada Miqdadi El-Alami",
                // title: "MSA Advisor and Chaplain",
                picSrc: images("./ec/2022/nada.jpg"),
                style: {
                    textAlign: "center",
                }
            }
        }
    }
}
