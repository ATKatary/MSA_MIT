import logo from "../../assets/svg/logo_dark.svg";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Link } from "@mui/material";
import { Dropdown } from "bootstrap";
import { SECTIONS, THEME } from "../../constants";

/*** Global Constants ***/
const DEFAULT = SECTIONS.HOME.TITLE;

export const NAV_GC = (props) => {
  const right = [];
  const sections = [
    {
      name: SECTIONS.RAMADAN.TITLE,
    },

    {
      name: SECTIONS.DONATE.TITLE,
      href: "https://giving.mit.edu/form/#/",
    },
    {
      name: SECTIONS.LIFE.TITLE,
    },
    // {
    //     inPage: true,
    //     name: SECTIONS.MAILING_LIST.TITLE,
    // },
    // {
    //     name: SECTIONS.CAREER.TITLE,
    //     dropdown: true,
    //     subSections: SECTIONS.CAREER.SUB_SECTIONS,
    // },
  ];
  for (const section of sections) {
    right.push({
      meta: {
        className: `public-sans`,
      },
      content: {
        title: section.dropdown ? (
          <div class="dropdown">
            <a
              class="dropdown-toggle"
              href="#"
              id={`nav-${section.name}`}
              data-bs-toggle="dropdown"
              style={{
                ...THEME.NAV.STYLE.BTN,
                color: THEME.SECONDARY,
                borderRadius: "5px",
                margin: "0 20px 0 20px",
              }}
            >
              {section.name.toUpperCase().replace("-", " ")}
            </a>

            <ul class="dropdown-menu">
              {section.subSections.map((subsection) => {
                return (
                  <li>
                    <Link
                      href={
                        subsection.href
                          ? subsection.href
                          : `/${section.name}/${subsection.title}`
                      }
                      id={`nav-${section.name}`}
                      style={{
                        ...THEME.NAV.STYLE.BTN,
                        color: THEME.SECONDARY,
                        borderRadius: "5px",
                        margin: "0 20px 0 20px",
                        width: "auto",
                      }}
                      className="dropdown-item"
                    >
                      {subsection.title
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
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
            className={`${section.name === DEFAULT ? "select-section" : ""}`}
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
              className="pointer align-self-center"
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
        },
        content: {
          icon: InstagramIcon,
        },
      },

      {
        meta: {
          isIcon: true,
          style: { margin: "0 0 0 20px", height: "30px" },
          iconProps: {
            style: { fontSize: "18px" },
          },
          href: "https://www.facebook.com/mitmsa",
        },
        content: {
          icon: FacebookIcon,
        },
      },
    ],
  };
};
