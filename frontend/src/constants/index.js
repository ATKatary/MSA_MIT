export const COLORS = {
    NONE: "none",
    RED: "#E07D83",
    GRAY: "#161616",
    BLACK: "#000000",
    WHITE: "#ffffff",
    GREEN: "#0f5132",
    GRAY_2: "#87888c",
    YELLOW: "#fff000",
    ORANGE: "#f5593d",
    LIGHT_BLUE: "#A9DFD8",
    TRANSPARENT: "transparent",
}

export const API = {
    GET: "get",
    POST: "post",
    DOMAIN: {
        CONTACT: ""
    },
}

export const SECTIONS = {
    HOME: {
        TITLE: "home"
    },

    DONATE: {
        TITLE: "donate"
    },

    LIFE: {
        TITLE: "life"
    },

    MAILING_LIST: {
        TITLE: "mailing-list"
    },

    CAREER: {
        TITLE: "career",
        SUB_SECTIONS: [
            {title: "referral-listings", component: "ReferralPage"}, 
            {title: "job-postings", component: ""}, 
            {title: "resume-book", href: "https://forms.gle/11Dxz3mB3U3CiRPC6"}
        ],
    },

    RAMADAN: {
        TITLE: "ramadan"
    },
}

export const THEME = {
    PRIMARY: "#ffffff",
    SECONDARY: "#000000",

    FONT: {
        TITLE: "28px"
    },

    GALLERY: {
        SLIDESHOW: {
            STYLE: {
                margin: "10px",
                width: "400px",
                height: "400px",
            },
            IMG: {
                STYLE: {
                    width: "400px",
                    height: "400px",
                    objectFit: "cover"
                }
            }
        }
    },

    CONTACT: {
        WIDTH: 400,
        STYLE: {
            SEND_BTN: {
                padding: "10px", 
                paddingLeft: "40px", 
                paddingRight: "40px",   
            },
            CONTAINER: {
                margin: "10px",
                padding: "30px",
            }
        },
        EMAIL: "akatary23@gmail.com"
    },

    NAV: {
        WIDTH: 225,
        HEIGHT: 180,
        STYLE: {
            LINK: {textDecoration: "none"},
            BTN: {
                // width: "40%", 
                color: "#000000",
                fontSize: "12px", 
                fontWeight: "bold", 
                textDecoration: "none", 
                justifyContent: "flex-start",
            }
        }
    },

    MAILING_LIST: {
        FORM_FIELD: {
            STYLE: {
                height: "45px",
                margin: "30px 15px 0 15px",
                width: "max(min(calc(35% - 20px), 350px), 300px)",
            },

            INPUT_STYLE: {
                height: "35px", 
                padding: "5px",
                fontSize: "14px",
                color: COLORS.GRAY, 
            },

            LABEL_STYLE: {
                fontSize: "16px",
                color: COLORS.GRAY_2,
            }
        },
        
        SEND_BTN: {
            STYLE: {
                height: "40px",
                width: "200px",
                fontSize: "1em",
                color: COLORS.WHITE,
                backgroundColor: COLORS.ORANGE,
            }
        }
    },

}

export const DATE = {
    DATE_FORMAT: "mm/dd/yyyy",
    DAYS: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    MONTHS: ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."],
}

export const PRAYERS = {
    NAMES: ["fajr", "dhuhr", "asr", "maghrib", "isha"]

}