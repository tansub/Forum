import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const api = "http://16.170.37.57/api/v1/app/event/";

const EventItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 1.5;
`;

const EventItemTitle = styled.h2`
  margin-top: 100px;
  font-size: 36px;
  margin-bottom: 30px;
`;

const EventItemImage = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
`;

const EventItemText = styled.p`
  margin-bottom: 20px;
`;

const EventItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const EventItemInfoItem = styled.div`
  display: flex;
  align-items: center;
`;

const EventItemInfoLabel = styled.div`
  margin-right: 10px;
  font-weight: bold;
`;

const EventItemInfoValue = styled.div`
  font-style: italic;
`;

export const EventItemPage = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${api}${id}/detail`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, [id]);

  return event ? (
    <EventItemContainer>
      <EventItemTitle>{event.name}</EventItemTitle>
      <EventItemImage src={event.img} alt={event.name} />
      <EventItemInfoLabel>Описание:</EventItemInfoLabel>

      <EventItemText>{event.full_text}</EventItemText>
      <EventItemInfo>
        <EventItemInfoItem>
          <EventItemInfoLabel>Дата проведения:</EventItemInfoLabel>
          <EventItemInfoValue>{event.date}</EventItemInfoValue>
        </EventItemInfoItem>
        <EventItemInfoItem>
          {/* <EventItemInfoLabel>Location:</EventItemInfoLabel>
          <EventItemInfoValue>{event.place}</EventItemInfoValue> */}
        </EventItemInfoItem>
      </EventItemInfo>
    </EventItemContainer>
  ) : (
    <EventItemContainer>Loading...</EventItemContainer>
  );
};
