import "@fullcalendar/react/dist/vdom";
import React, { useCallback, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import allLocales from "@fullcalendar/core/locales-all";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {
  DateClickArg,
  EventDragStartArg,
} from "@fullcalendar/interaction";
import { format } from "date-fns";
import { useDispatch } from "react-redux";

import { CalendarCellModal } from "@/components/CalendarCellModal";
import { CalendarCellEventModal } from "@/components/calendarCellEventModal";
import { EventTargetDate } from "@/components/calendarCellEventModal";
import { CalenderCellFixModal, Alert } from "@/components";
import {
  displayAlert,
  hideAlert,
  setAlertContent,
} from "@/redux/alertControl/slice";
import {
  deleteMyRecruitment,
  getMyRecruitment,
} from "@/redux/myRecruitment/slice";

interface Myprops {
  myRecruitment: [];
}

export const FullCalender: React.FC<Myprops> = (props) => {
  const dispatch = useDispatch();
  const { myRecruitment } = props;
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isEventModalVisible, setIsEventModalVisible] =
    useState<boolean>(false);
  const [eventData, setEventData] = useState<EventTargetDate>({
    id: 0,
    title: "",
    place: "",
    fullday: true,
    start: "",
    end: "",
    content: "",
    paid: false,
    paidContent: "",
    numberLimit: 1,
    type: "recruitment",
  });
  const [selectDate, setSelectDate] = useState<DateClickArg | undefined>();
  const [fixModalVisible, setFixModalVisible] = useState<boolean>(false);

  // 予定追加完了時
  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(
      setAlertContent({ type: "success", message: "予定追加されました" })
    );
    dispatch(displayAlert());
    setTimeout(() => {
      dispatch(hideAlert());
    }, 5000);
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
      start: format(
        new Date(String(eventInfo.event.start)),
        "yyyy-MM-dd HH:mm:ss"
      ),
      end: format(new Date(String(eventInfo.event.end)), "yyyy-MM-dd HH:mm:ss"),
      id: Number(eventInfo.event.id),
      title: eventInfo.event.title,
      place: eventInfo.event.extendedProps.place,
      fullday: eventInfo.event.extendedProps.fullday,
      content: eventInfo.event.extendedProps.content,
      paid: eventInfo.event.extendedProps.paid,
      paidContent: eventInfo.event.extendedProps.paidContent,
      numberLimit: eventInfo.event.extendedProps.numberLimit,
      type: eventInfo.event.extendedProps.type,
    });
  };

  const handelEventModelCandel = () => {
    setIsEventModalVisible(false);
  };

  // 予定の削除
  const handelEventDeleteRecruitment = (recruitmentId: number) => {
    dispatch(deleteMyRecruitment(recruitmentId));
    dispatch(getMyRecruitment(1));
    dispatch(setAlertContent({ type: "info", message: "予定削除されました" }));
    dispatch(displayAlert());
    setTimeout(() => {
      dispatch(hideAlert());
    }, 5000);
  };

  // 募集の修正
  const handelShowFixModal = () => {
    handelEventModelCandel();
    setFixModalVisible(true);
  };

  const handelHideFixModal = () => {
    setFixModalVisible(false);
    dispatch(setAlertContent({ type: "info", message: "予定修正されました" }));
    dispatch(displayAlert());
    setTimeout(() => {
      dispatch(hideAlert());
    }, 5000);
  };

  const handelCancelFixModal = () => {
    setFixModalVisible(false);
  };

  return (
    <>
      <Alert />
      {fixModalVisible ? (
        <CalenderCellFixModal
          visible={fixModalVisible}
          handleCancel={handelCancelFixModal}
          handleOk={handelHideFixModal}
        />
      ) : null}

      <CalendarCellEventModal
        isModalVisible={isEventModalVisible}
        eventTargetData={eventData}
        setIsModalVisible={handelEventModelCandel}
        handelEventDeleteRecruitment={handelEventDeleteRecruitment}
        handelShowFixModal={handelShowFixModal}
      />
      <CalendarCellModal
        title="予定追加"
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
        businessHours={true}
        editable={true}
        eventDisplay="block"
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
