import React from 'react';

export const NewsAndEventsPage = () => {
  const events = [ 'homestyle-cooking-doug-eng' ];
  const eventDetails = {
    'homestyle-cooking-doug-eng': {
      title: 'Homestyle Cooking with Chef Doug Eng',
      description: `
      There are thousands of Chinese restaurants but many people did not grow up enjoying the foods they produce. Instead, the traditional Chinese home meal is far different from what you would order at a reastaurant. For many second and third-generation Chinese, these recipes are cherished memories. This class is led by Chef Doug Eng whose family runs many food-related businesses in the Bay Area.
      \n
      Winter Melon Soup\n
      Steamed Pork Spare Ribs with Black Bean Sauce\n
      Steamed Pork Cake with Preserved Cabbage\n
      Boiled Lettuce with Shiitake Mushrooms and Oyster Sauce\n
      Stir Fried Chinese Broccoli with Chicken\n
      Steamed Tofu with Shrimp\n
    `,
      date: 'TBD',
      time: '3pm',
      duration: 'About 3 hours',
      cost: '$125',
    }
  };
  const eventDetailComponents = [];
  const eventDetailExtrasListItems = [];
  events.forEach(eventName => {
    const eventDetail = eventDetails[eventName];
    eventDetailComponents.push(
      <div className="uc-event-detail">
        <div className="uc-event-detail-badge">Upcoming</div>
        <h3 className="uc-event-detail-title">{eventDetail.title}</h3>
        <div className="uc-event-detail-body">
          <div className="uc-event-detail-description">
            {eventDetail.description.split("\n").map(line => {
              if (line) {
                return <div>{line}<br></br></div>;  
              }
            })}
          </div>
          <div className="uc-event-detail-booking">
            <div className="uc-event-detail-logistics-wrapper">
              <div className="uc-bold uc-event-detail-logistics-label">
                <p>Date:</p>
                <p>Time:</p>
                <p>Duration:</p>
                <p>Cost:</p>
              </div>
              <div>
                <p>{eventDetail.date}</p>
                <p>{eventDetail.time}</p>
                <p>{eventDetail.duration}</p>
                <p>{eventDetail.cost}</p>
              </div>
            </div>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    );
  })
  return (
    <div className="uc-events-wrapper">
      {eventDetailComponents}
    </div>
  );
}

export default NewsAndEventsPage;
