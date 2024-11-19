const data = [
  {
    Id: 1,
    Subject: "Pal Lunches",
    StartTime: new Date(2024, 5, 27, 12, 0), // year, month, day, hour, minute
    EndTime: new Date(2024, 5, 27, 13, 30),
    RecurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TH;INTERVAL=1",
  },
  {
    Id: 2,
    Subject: "Jummah Prayer",
    StartTime: new Date(2024, 5, 28, 13, 15),
    EndTime: new Date(2024, 5, 28, 14, 0),
    RecurrenceRule: "FREQ=WEEKLY;BYDAY=FR;INTERVAL=1",
    Description: "Location: W11 Musallah",
  },
  {
    Id: 2,
    Subject: "Wudu Renovation + Pizza",
    StartTime: new Date(2024, 5, 29, 17, 0),
    EndTime: new Date(2024, 5, 29, 18, 0),
    Description: "Location: W11 Musallah",
  },
];

export default data;
