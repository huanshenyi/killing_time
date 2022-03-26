import "@fullcalendar/react/dist/vdom";
import React, { useCallback, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import allLocales from "@fullcalendar/core/locales-all";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";

import { CalendarCellModal } from "../CalendarCellModal";

export const FullCalender: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
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
  return (
    <>
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
      />
    </>
  );
};
