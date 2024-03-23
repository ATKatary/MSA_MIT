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
      ],
    },

    RESOURCES: {
      OFF_CAMPUS: {
        title: "Off Campus Resources",
        cards: [
          {
            name: "Al Bara Market",
            info: "",
            picSrc: images("./off_campus_resources/al_bara.jpeg"),
            description: "test",
            icon: ShoppingCartOutlinedIcon,
            href: "https://www.google.com/maps/dir//al+bara+market/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e3774cbc96d241:0xa0900dd040979ac5?sa=X&ved=2ahUKEwiZ-66G09OBAxVzlIkEHaOXA-EQ9Rd6BAgsEAA&ved=2ahUKEwiZ-66G09OBAxVzlIkEHaOXA-EQ9Rd6BAg9EAQ",
          },

          {
            name: "Cheema Supermarket",
            info: "",
            icon: ShoppingCartOutlinedIcon,
            picSrc: images("./off_campus_resources/cheemas.jpeg"),
            description: "test",
            href: "https://www.google.com/maps/dir//Cheema+Supermarket/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e379cc736a6c81:0x8504e31b803321bc?sa=X&ved=2ahUKEwjeye2H09OBAxWEkYkEHZGIDa4Q9Rd6BAgmEAA&ved=2ahUKEwjeye2H09OBAxWEkYkEHZGIDa4Q9Rd6BAg7EAM",
          },

          {
            name: "Foodland",
            info: "",
            icon: ShoppingCartOutlinedIcon,
            picSrc: images("./off_campus_resources/foodland.jpeg"),
            description: "test",
            href: "https://www.google.com/maps?s=web&sca_esv=569774734&lqi=CghGb29kbGFuZCIDiAEBSOWAjtaRuICACFoUEAAYACIIZm9vZGxhbmQqBAgCEACSAQpyZXN0YXVyYW50qgE-EAEqDCIIZm9vZGxhbmQoADIeEAEiGmGH9k00K6Hs_ddpixlTItlroKl1xbuv-iUHMgwQAiIIZm9vZGxhbmTgAQA&vet=12ahUKEwi0mv2C0dOBAxWzFlkFHQF2CPEQ1YkKegQIGxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KXFKQNhAceOJMUYZePeJ9Vin&daddr=13+Highland+Ave,+Malden,+MA+02148",
          },

          {
            name: "Garden Halal Meat",
            info: "",
            icon: ShoppingCartOutlinedIcon,
            picSrc: images("./off_campus_resources/garden_halal.jpeg"),
            description: "test",
            href: "https://www.google.com/maps/dir//Garden+Halal+in+Haymarket:/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e3708f57c779e1:0xabdcd8c534e5830?sa=X&ved=2ahUKEwjB5rGa09OBAxWgvokEHeN5CkwQ9Rd6BAgjEAA&ved=2ahUKEwjB5rGa09OBAxWgvokEHeN5CkwQ9Rd6BAg6EAM",
          },

          {
            name: "Quality Meat Market",
            info: "",
            icon: ShoppingCartOutlinedIcon,
            picSrc: images("./off_campus_resources/quality.jpeg"),
            description: "test",
            href: "https://www.google.com/maps/dir//Quality+Meat+Market/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e37ecd015dca3d:0x63cc70ea255344a2?sa=X&ved=2ahUKEwja8qWp09OBAxXupIkEHb6wDtkQ9Rd6BAgoEAA&ved=2ahUKEwja8qWp09OBAxXupIkEHb6wDtkQ9Rd6BAg8EAM",
          },

          {
            name: "Restaurant Depot",
            info: "",
            icon: ShoppingCartOutlinedIcon,
            picSrc: images("./off_campus_resources/restaurant.jpeg"),
            description: "test",
            href: "https://www.google.com/maps/dir//Restaurant+Depot,+82+Boston+St,+Everett,+MA+02149/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e371a919f5ec93:0x6c65ec58835fb760?sa=X&ved=2ahUKEwi069Oy09OBAxXQjYkEHRacDYcQ48ADegQIHxAA&ved=2ahUKEwi069Oy09OBAxXQjYkEHRacDYcQ48ADegQIJBAJ",
          },

          {
            name: "Sayar Market",
            info: "",
            icon: ShoppingCartOutlinedIcon,
            picSrc: images("./off_campus_resources/sayar.jpeg"),
            description: "test",
            href: "https://www.google.com/maps/dir//Sayar+Market+Halal+Food,+3+Everett+St+%233e,+Revere,+MA+02151/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e3710baf54cdb3:0xc5dde7b2635581a2?sa=X&ved=2ahUKEwj445S709OBAxUZjYkEHVvbBusQ48ADegQIEBAA&ved=2ahUKEwj445S709OBAxUZjYkEHVvbBusQ48ADegQIGxAJ",
          },
        ],
      },

      ON_CAMPUS: {
        title: "On Campus Resources",
        cards: [],
      },
    },
  };
};
