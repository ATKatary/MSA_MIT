import React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  Month,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { Button } from "@mui/material";
import { saveAs } from "file-saver";
import ical from "ical-generator";

const ScheduleWithDownload = ({ data }) => {
  const handleDownload = () => {
    const calendar = ical({ name: "My Calendar" });

    data.forEach((event) => {
      calendar.createEvent({
        start: new Date(event.StartTime),
        end: new Date(event.EndTime),
        summary: event.Subject,
        description: event.Description || "",
        location: event.Location || "",
      });
    });

    const icsString = calendar.toString();
    const blob = new Blob([icsString], { type: "text/calendar;charset=utf-8" });
    saveAs(blob, "my_calendar.ics");
  };

  return (
    <>
      <Button onClick={handleDownload} className="mb-4">
        Download Calendar
      </Button>
      <div className="flex flex-col items-center w-full">
        <ScheduleComponent
          eventSettings={{ dataSource: data }}
          currentView="Week"
          readonly={true}
          startHour="10:00"
          endHour="18:00"
        >
          <ViewsDirective>
            <ViewDirective option="Day" />
            <ViewDirective option="Week" />
            <ViewDirective option="Month" />
          </ViewsDirective>
          <Inject services={[Day, Week, Month]} />
        </ScheduleComponent>
      </div>
    </>
  );
};

export default ScheduleWithDownload;
