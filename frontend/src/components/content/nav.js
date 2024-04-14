import logo from "../../assets/svg/logo_dark.svg";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Link } from "@mui/material";
import { SECTIONS, THEME } from "../../constants";

/*** Global Constants ***/
const DEFAULT = SECTIONS.HOME.TITLE;

export const NAV_GC = (props) => {
  const right = [];
  const sections = [
    {
      name: SECTIONS.DONATE.TITLE,
      href: "https://giving.mit.edu/form/#/",
    },
    {
      name: SECTIONS.LIFE.TITLE,
    },
    {
      name: SECTIONS.CONTACT.TITLE,
    },
    {
      inPage: true,
      name: SECTIONS.MAILING_LIST.TITLE,
    },
    // {
    //     name: SECTIONS.PROGRAMS.TITLE,
    //     dropdown: true,
    // },
  ];
  for (const section of sections) {
    right.push({
      meta: {
        className: `public-sans`,
      },
      content: {
        title: (
          <Link
            href={
              section.href
                ? section.href
                : `/${section.inPage ? "#" : ""}${section.name}`
            }
            id={`nav-${section.name}`}
            style={{
              ...THEME.NAV.STYLE.BTN,
              color: THEME.SECONDARY,
              borderRadius: "5px",
              margin: "0 20px 0 20px",
            }}
            className={`${section.name === DEFAULT ? "select-section" : ""} ${
              window.innerWidth <= 768 ? "mobile-margin" : ""
            }`}
          >
            {section.icon ? (
              <section.icon style={{ margin: "0 10px 0 0" }} />
            ) : (
              <></>
            )}{" "}
            {section.name.toUpperCase().replace("-", " ")}
          </Link>
        ),
      },
    });
  }

  const select = (section) => {
    for (const section of sections) {
      const sectionBtn = document.getElementById(`nav-${section.name}`);
      if (sectionBtn) sectionBtn.classList.remove("select-section");
    }

    const sectionBtn = document.getElementById(section.id);
    if (sectionBtn) {
      props.setOpen(false);
      props.setSelected(section.name);
      sectionBtn.classList.add("select-section");
    }
  };
  return {
    NAV_LEFT: [
      {
        meta: {
          href: "/",
          id: `nav-${SECTIONS.HOME.TITLE}`,
          style: {
            margin: "0 0 10px 0",
            display: "flex",
            flexDirection: "column",
          },
        },
        content: {
          title: (
            <img
              src={logo}
              height="50px"
              className="pointer align-self-center logo-mobile"
            />
          ),
        },
      },
    ],

    NAV_RIGHT: [
      ...right,
      {
        meta: {
          isIcon: true,
          style: { margin: "0 10px 0 0px", height: "30px" },
          iconProps: {
            style: { fontSize: "18px" },
          },
          href: "https://www.instagram.com/mitmsa/",
          target: "_blank",
        },
        content: {
          icon: InstagramIcon,
        },
      },

      {
        meta: {
          isIcon: true,
          style: { margin: "0 0 0 5px", height: "30px" },
          iconProps: {
            style: { fontSize: "18px" },
          },
          href: "https://www.facebook.com/mitmsa",
          target: "_blank",
        },
        content: {
          icon: FacebookIcon,
        },
      },
    ],
  };
};
