import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const LIFE_GC = ({ images, ...props }) => {
  return {
    PRAYER_SPACES: {
      title: "Prayer Spaces",
      cards: [
        {
          name: "W11 Musalla",
          href: "https://whereis.mit.edu/?go=W11",
          rooms: ["W11-110"],
          picSrc: images("./prayer/w11.png"),
          description:
            "The main prayer room on MIT's campus, on the west side of campus. Along with salah, many community events take place here, including jummah and Connect.",
        },
        {
          name: "E52 Musalla",
          href: "https://whereis.mit.edu/?go=E52",
          rooms: ["E52-112", "E52-212"],
          picSrc: images("./prayer/e52.jpeg"),
          description:
            "A prayer room on the east side of MIT's campus - ideal for those who cannot make it back to the Musallah for salah.",
        },
        {
          name: "E51 Musalla",
          href: "https://whereis.mit.edu/?go=E51",
          rooms: ["E51-050"],
          picSrc: images("./prayer/e51.jpeg"),
          description:
            "A prayer room on the east side of MIT's campus - ideal for those who cannot make it back to the Musallah for salah.",
        },
        {
          name: "Hayden Library",
          href: "https://whereis.mit.edu/?go=14",
          rooms: ["2nd Floor"],
          picSrc: images("./prayer/oasis.jpeg"),
          description:
            "A convienient prayer space in Hayden Library for those who study and would rather stay on campus and perform salah.",
        },
        {
          name: "Schwarzman College of Computing",
          href: "https://whereis.mit.edu/?go=45",
          rooms: ["5th", "6th", "7th Floors"],
          picSrc: images("./prayer/building_45.jpeg"),
          description:
            "A convenient option near Stata; on the right side of the building as you exit the elevators, labeled 'Phone Booth'",
        },
      ],
    },

    MOSQUES: {
      title: "Mosques",
      cards: [
        {
          name: "ISB Islamic Society of Boston",
          href: "https://isbcc.org/",
          address: "204 Prospect Street, Cambridge, MA",
          picSrc: images("./mosques/ISB.jpg"),
          description:
            "The closest mosque to MIT, located up Massachussetts Avenue.",
        },
        {
          name: "ICB Islamic Center of Boston, Wayland",
          href: "https://icbwayland.org/",
          address: "126 Boston Post Road, Wayland, MA",
          picSrc: images("./mosques/wayland_mosque.jpg"),
          description: "",
        },
        {
          name: "ISBCC Islamic Society of Boston Cultural Center",
          href: "https://isbcc.org/",
          address: "100 Malcolm X Blvd, Roxbury, MA",
          picSrc: images("./mosques/roxbury_mosque.jpeg"),
          description: "",
        },
        {
          name: "Masjid Al-Quran",
          href: "https://www.masjidalquran.org/",
          address: "35 Intervale St, Boston, MA",
          picSrc: images("./mosques/al-quran_mosque.jpeg"),
          description: "",
        },
        {
          name: "Mosque for Praising Allah",
          href: "https://mosquepraiseallah.org/",
          address: "724 Shawmut Ave, Boston, MA",
          picSrc: images("./mosques/praising_allah_mosque.jpg"),
          description: "",
        },
        {
          name: "Yusuf Mosque",
          href: "https://www.yusufmosque.com/",
          address: "186 Chestnut Hill Ave, Brighton, MA",
          picSrc: images("./mosques/yusuf_mosque.jpg"),
          description: "",
        },
      ],
    },

    RESTAURANTS: {
      title: "Restaurants",
      cards: [
        {
          name: "Shah's Halal Food",
          href: "https://www.shahshalalfood.com/boston/",
          address: "1124 Boylston St, Boston, MA 02115",
          picSrc: images("./restaurants/shahs.jpg"),
          description:
            "Classic halal cart-style food, with a variety of options from chicken over rice, gyros, and even Philly cheesesteaks!",
        },
        {
          name: "Dave's Hot Chicken",
          href: "https://daveshotchicken.com/",
          address: "123 Stuart St, Boston, MA 02116",
          picSrc: images("./restaurants/daves.jpeg"),
          description:
            "Fried chicken tenders and sliders with a variety of spice levels.",
        },
        {
          name: "Food Land Market",
          href: "https://www.google.com/search?q=foodland&sca_esv=4bbd28f93242c723&biw=1512&bih=823&sxsrf=ADLYWIKXw3uLAupyeEcIi04zPQnvB0thmw%3A1729256892336&ei=vF0SZ_2GFMWqptQPwK2I4Qs&ved=0ahUKEwj91Kv2_5eJAxVFlYkEHcAWIrwQ4dUDCA8&uact=5&oq=foodland&gs_lp=Egxnd3Mtd2l6LXNlcnAiCGZvb2RsYW5kMhEQLhiABBiSAxjHARiOBRivATIOEC4YgAQYxwEYjgUYrwEyFBAuGIAEGJECGMcBGIoFGI4FGK8BMg4QLhiABBjHARiOBRivATITEC4YgAQYsQMY0QMYQxjHARiKBTILEC4YgAQYxwEYrwEyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyEBAAGIAEGLEDGEMYyQMYigUyIBAuGIAEGJIDGMcBGI4FGK8BGJcFGNwEGN4EGOAE2AEBSM0NUKwEWOkMcAN4AJABAJgBtAGgAaMGqgEDNC40uAEDyAEA-AEBmAIKoALzBcICChAAGLADGNYEGEfCAg0QABiwAxjWBBhHGMkDwgIOEAAYgAQYsAMYkgMYigXCAgoQIxiABBgnGIoFwgIEECMYJ8ICDRAAGIAEGLEDGEMYigXCAhEQLhiABBixAxjRAxiDARjHAcICCxAuGIAEGNEDGMcBwgIFEAAYgATCAggQABiABBixA8ICDhAAGIAEGLEDGIMBGMcDwgIOEAAYgAQYsQMYgwEYigXCAhAQLhiABBjRAxhDGMcBGIoFwgILEAAYgAQYkgMYigXCAgsQABiABBixAxiDAcICERAuGIAEGJECGNEDGMcBGIoFwgIOEC4YgAQYsQMY0QMYxwHCAiAQLhiABBiRAhjRAxjHARiKBRiXBRjcBBjeBBjgBNgBAZgDAOIDBRIBMSBAiAYBkAYKugYGCAEQARgUkgcDNi40oAe1dg&sclient=gws-wiz-serp&lqi=Cghmb29kbGFuZCIDiAEBSOWAjtaRuICACFoUEAAYACIIZm9vZGxhbmQqBAgCEACSAQpyZXN0YXVyYW50qgE-EAEqDCIIZm9vZGxhbmQoADIeEAEiGmGH9k00K6Hs_ddpixlTItlroKl1xbuv-iUHMgwQAiIIZm9vZGxhbmTgAQA#rlimm=12058657975195670854",
          address: "13 Highland Ave, Malden, MA 02148",
          picSrc: images("./restaurants/foodland.jpeg"),
          description:
            "Diverse grocery store offering halal meat, produce and pantry staples, plus prepared takeout food.",
        },
        {
          name: "Black Seed Halal Grill",
          href: "https://www.orderblackseedboston.com/",
          address: "140 Tremont St, Boston, MA 02111",
          picSrc: images("./restaurants/blackseed.jpg"),
          description:
            "Casual choice providing Middle Eastern eats like kabobs & falafel wraps, plus pancakes & omelets.",
        },
        {
          name: "Sofra Bakery & Cafe",
          href: "https://www.sofrabakery.com/",
          address: "1 Belmont St, Cambridge, MA 02138",
          picSrc: images("./restaurants/sofra.jpg"),
          description:
            "Compact, modest bakery for Middle Eastern sweets & savory bites, plus a small patio.",
        },
        {
          name: "FIYA Chicken",
          href: "https://www.fiyachicken.com/",
          address: "1024 Commonwealth Ave, Boston, MA 02215",
          picSrc: images("./restaurants/fiya.jpg"),
          description:
            "Double-fried Korean fried chicken in a variety of flavors, plus corn dogs, with halal options.",
        },
        {
          name: "The Halal Guys",
          href: "https://thehalalguys.com/locations/137-stuart-street-boston/",
          address: "137 Stuart St, Boston, MA 02116",
          picSrc: images("./restaurants/halalguys.jpeg"),
          description:
            "Halal cart-style food with a variety of protein options, served over rice or in a wrap.",
        },
      ],
    },

    RESOURCES: {
      OFF_CAMPUS: {
        title: "Off Campus Resources",
        cards: [
          {
            name: "Al Bara Market",
            info: "One of the closest halal markets to MIT. They have a wide variety of halal meats and groceries.",
            picSrc: images("./off_campus_resources/al_bara.jpeg"),
            description:
              "One of the closest halal markets to MIT. They have a wide variety of halal meats and groceries.",
            icon: ShoppingCartOutlinedIcon,
            href: "https://www.google.com/maps/dir//al+bara+market/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e3774cbc96d241:0xa0900dd040979ac5?sa=X&ved=2ahUKEwiZ-66G09OBAxVzlIkEHaOXA-EQ9Rd6BAgsEAA&ved=2ahUKEwiZ-66G09OBAxVzlIkEHaOXA-EQ9Rd6BAg9EAQ",
          },

          {
            name: "Cheema Supermarket",
            info: "Pakistani & Indian grocery with imported foods & spices, plus a butcher counter for halal meats.",
            icon: ShoppingCartOutlinedIcon,
            picSrc: images("./off_campus_resources/cheemas.jpeg"),
            description:
              "Pakistani & Indian grocery with imported foods & spices, plus a butcher counter for halal meats.",
            href: "https://www.google.com/maps/dir//Cheema+Supermarket/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e379cc736a6c81:0x8504e31b803321bc?sa=X&ved=2ahUKEwjeye2H09OBAxWEkYkEHZGIDa4Q9Rd6BAgmEAA&ved=2ahUKEwjeye2H09OBAxWEkYkEHZGIDa4Q9Rd6BAg7EAM",
          },

          {
            name: "Foodland",
            info: "Small storefront with an Indian & Pakistani market & halal butcher, plus deli items such as samosas.",
            icon: ShoppingCartOutlinedIcon,
            picSrc: images("./off_campus_resources/foodland.jpeg"),
            description:
              "Small storefront with an Indian & Pakistani market & halal butcher, plus deli items such as samosas.",
            href: "https://www.google.com/maps?s=web&sca_esv=569774734&lqi=CghGb29kbGFuZCIDiAEBSOWAjtaRuICACFoUEAAYACIIZm9vZGxhbmQqBAgCEACSAQpyZXN0YXVyYW50qgE-EAEqDCIIZm9vZGxhbmQoADIeEAEiGmGH9k00K6Hs_ddpixlTItlroKl1xbuv-iUHMgwQAiIIZm9vZGxhbmTgAQA&vet=12ahUKEwi0mv2C0dOBAxWzFlkFHQF2CPEQ1YkKegQIGxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KXFKQNhAceOJMUYZePeJ9Vin&daddr=13+Highland+Ave,+Malden,+MA+02148",
          },

          {
            name: "Garden Halal Meat",
            info: "Cavernous, bi-level eatery & market dispensing classic Milddle Eastern chow in modest surrounds.",
            icon: ShoppingCartOutlinedIcon,
            picSrc: images("./off_campus_resources/garden_halal.jpeg"),
            description:
              "Cavernous, bi-level eatery & market dispensing classic Milddle Eastern chow in modest surrounds.",
            href: "https://www.google.com/maps/dir//Garden+Halal+in+Haymarket:/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e3708f57c779e1:0xabdcd8c534e5830?sa=X&ved=2ahUKEwjB5rGa09OBAxWgvokEHeN5CkwQ9Rd6BAgjEAA&ved=2ahUKEwjB5rGa09OBAxWgvokEHeN5CkwQ9Rd6BAg6EAM",
          },

          {
            name: "Quality Meat Market",
            info: "Butcher shop offering high-quality chicken & cut-to-order meats, plus some basic groceries.",
            icon: ShoppingCartOutlinedIcon,
            picSrc: images("./off_campus_resources/quality.jpeg"),
            description:
              "Butcher shop offering high-quality chicken & cut-to-order meats, plus some basic groceries.",
            href: "https://www.google.com/maps/dir//Quality+Meat+Market/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e37ecd015dca3d:0x63cc70ea255344a2?sa=X&ved=2ahUKEwja8qWp09OBAxXupIkEHb6wDtkQ9Rd6BAgoEAA&ved=2ahUKEwja8qWp09OBAxXupIkEHb6wDtkQ9Rd6BAg8EAM",
          },

          {
            name: "Restaurant Depot",
            info: "The one-stop shop for foodservice professionals.",
            icon: ShoppingCartOutlinedIcon,
            picSrc: images("./off_campus_resources/restaurant.jpeg"),
            description: "The one-stop shop for foodservice professionals.",
            href: "https://www.google.com/maps/dir//Restaurant+Depot,+82+Boston+St,+Everett,+MA+02149/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e371a919f5ec93:0x6c65ec58835fb760?sa=X&ved=2ahUKEwi069Oy09OBAxXQjYkEHRacDYcQ48ADegQIHxAA&ved=2ahUKEwi069Oy09OBAxXQjYkEHRacDYcQ48ADegQIJBAJ",
          },

          {
            name: "Sayar Market",
            info: "International Halal Food & Butcher Shop",
            icon: ShoppingCartOutlinedIcon,
            picSrc: images("./off_campus_resources/sayar.jpeg"),
            description: "International Halal Food & Butcher Shop",
            href: "https://www.google.com/maps/dir//Sayar+Market+Halal+Food,+3+Everett+St+%233e,+Revere,+MA+02151/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e3710baf54cdb3:0xc5dde7b2635581a2?sa=X&ved=2ahUKEwj445S709OBAxUZjYkEHVvbBusQ48ADegQIEBAA&ved=2ahUKEwj445S709OBAxUZjYkEHVvbBusQ48ADegQIGxAJ",
          },

          {
            name: "Vanak Food",
            info: "Authentic Persian grocery store - offers vegan and vegetarian options.",
            icon: ShoppingCartOutlinedIcon,
            picSrc: images("./off_campus_resources/vanak.jpg"),
            description:
              "Authentic Persian grocery store - offers vegan and vegetarian options.",
            href: "https://www.google.com/maps/dir/MIT,+Massachusetts+Avenue,+Cambridge,+MA/super+vanak+address/@42.3652841,-71.1450755,5804m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x89e370aaf51a6a87:0xd0e08ea5b308203c!2m2!1d-71.09416!2d42.360091!1m5!1m1!1s0x89e3777fad06384f:0xfe26d5597867acfe!2m2!1d-71.1629518!2d42.3769826?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D",
          },
        ],
      },

      ON_CAMPUS: {
        title: "On Campus Resources",
        cards: [],
      },

      EID_2023: {
        slides: [
          {
            src: images("./eid_2023/eid_1.jpg"),
            alt: "Image 1 for carousel",
          },
          {
            src: images("./eid_2023/eid_2.jpg"),
            alt: "Image 2 for carousel",
          },
          {
            src: images("./eid_2023/eid_3.jpg"),
            alt: "Image 3 for carousel",
          },
          {
            src: images("./eid_2023/eid_4.jpg"),
            alt: "Image 4 for carousel",
          },
          {
            src: images("./eid_2023/eid_5.jpg"),
            alt: "Image 5 for carousel",
          },
          {
            src: images("./eid_2023/eid_6.jpg"),
            alt: "Image 6 for carousel",
          },
          {
            src: images("./eid_2023/eid_7.jpg"),
            alt: "Image 7 for carousel",
          },
          {
            src: images("./eid_2023/eid_8.jpg"),
            alt: "Image 8 for carousel",
          },
          {
            src: images("./eid_2023/eid_9.jpg"),
            alt: "Image 9 for carousel",
          },
          {
            src: images("./eid_2023/eid_10.jpg"),
            alt: "Image 10 for carousel",
          },
          {
            src: images("./eid_2023/eid_11.jpg"),
            alt: "Image 11 for carousel",
          },
          {
            src: images("./eid_2023/eid_12.jpg"),
            alt: "Image 12 for carousel",
          },
          {
            src: images("./eid_2023/eid_13.jpg"),
            alt: "Image 13 for carousel",
          },
        ],
      },
      EID_2024: {
        slides: [
          {
            src: images("./eid_2024/2.jpg"),
            alt: "Image 2 for carousel",
          },
          {
            src: images("./eid_2024/3.jpg"),
            alt: "Image 3 for carousel",
          },
          {
            src: images("./eid_2024/4.jpg"),
            alt: "Image 4 for carousel",
          },
          {
            src: images("./eid_2024/5.jpg"),
            alt: "Image 5 for carousel",
          },
          {
            src: images("./eid_2024/6.jpg"),
            alt: "Image 6 for carousel",
          },
          {
            src: images("./eid_2024/7.jpg"),
            alt: "Image 7 for carousel",
          },
          {
            src: images("./eid_2024/8.jpg"),
            alt: "Image 8 for carousel",
          },
          {
            src: images("./eid_2024/9.jpg"),
            alt: "Image 9 for carousel",
          },
          {
            src: images("./eid_2024/10.jpg"),
            alt: "Image 10 for carousel",
          },
          {
            src: images("./eid_2024/11.jpg"),
            alt: "Image 11 for carousel",
          },
          {
            src: images("./eid_2024/12.jpg"),
            alt: "Image 12 for carousel",
          },
          {
            src: images("./eid_2024/13.jpg"),
            alt: "Image 13 for carousel",
          },
          {
            src: images("./eid_2024/14.jpg"),
            alt: "Image 14 for carousel",
          },
          {
            src: images("./eid_2024/15.jpg"),
            alt: "Image 15 for carousel",
          },
          {
            src: images("./eid_2024/16.jpg"),
            alt: "Image 16 for carousel",
          },
          {
            src: images("./eid_2024/17.jpg"),
            alt: "Image 17 for carousel",
          },
          {
            src: images("./eid_2024/18.jpg"),
            alt: "Image 18 for carousel",
          },
          {
            src: images("./eid_2024/19.jpg"),
            alt: "Image 19 for carousel",
          },
          {
            src: images("./eid_2024/20.jpg"),
            alt: "Image 20 for carousel",
          },
          {
            src: images("./eid_2024/21.jpg"),
            alt: "Image 21 for carousel",
          },
        ],
      },
    },
  };
};
