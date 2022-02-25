import { WidgetContainer, WidgetDay, WidgetDate, DateContainer } from "./styles";

const DailyWidget = () => {
  return (
    <WidgetContainer>
      <DateContainer>
        <WidgetDay>Fri</WidgetDay>
        <WidgetDate>Feb 25th</WidgetDate>
      </DateContainer>
      <p>27C</p>
      <p>28C</p>
      <p>clear Sky</p>
    </WidgetContainer>
  );
};

export default DailyWidget;
