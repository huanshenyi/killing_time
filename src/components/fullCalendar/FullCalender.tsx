import "@fullcalendar/react/dist/vdom";
import React, { useCallback, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import allLocales from "@fullcalendar/core/locales-all";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {
  DateClickArg,
  EventDragStartArg,
} from "@fullcalendar/interaction";

import { CalendarCellModal } from "../CalendarCellModal";
import { CalendarCellEventModal } from "../calendarCellEventModal";

interface Myprops {
  myRecruitment: [];
}

export const FullCalender: React.FC<Myprops> = (props) => {
  const { myRecruitment } = props;
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isEventModalVisible, setIsEventModalVisible] =
    useState<boolean>(false);
  const [eventData, setEventData] = useState({});
  const [selectDate, setSelectDate] = useState<DateClickArg | undefined>();
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleDateClick = useCallback((arg: DateClickArg) => {
    setSelectDate(arg);
    setIsModalVisible(true);
  }, []);

  const handleEventClick = (eventInfo: EventDragStartArg) => {
    setIsEventModalVisible(true);
    setEventData({
      title: eventInfo.event.title,
      startStr: eventInfo.event.startStr,
    });
  };

  const handelEventModelCandel = () => {
    setIsEventModalVisible(false);
  };

  return (
    <>
      <CalendarCellEventModal
        isModalVisible={isEventModalVisible}
        eventTargetData={eventData}
        setIsModalVisible={handelEventModelCandel}
      />
      <CalendarCellModal
        title="募集追加"
        visible={isModalVisible}
        selectDate={selectDate}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: undefined,
          center: "title",
        }}
        dateClick={handleDateClick}
        height={700}
        locales={allLocales}
        locale="ja"
        events={myRecruitment}
        eventClick={handleEventClick}
        displayEventEnd
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
          hour12: false,
        }}
      />
    </>
  );
};
