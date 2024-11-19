import JobPosts from './components/JobPosts'
import Referrals from './components/Referrals'

export const CAREER_GC = {
        REFERRAL_LISTINGS: {
            title: "Referrals",
            description: "Listing of alumni and companies they can give referrals for. Click each listing for more information.",
            Component: Referrals
        },
        JOB_POSTS: {
            title: "Job Board",
            description: "Job postings by alumni at various roles and companies.",
            Component: JobPosts
        }
    }