import React from 'react';

export const NewsAndEventsPage = () => {
  const events = [ 'homestyle-cooking-doug-eng' ];
  const eventDetails = {
    'homestyle-cooking-doug-eng': {
      title: `Uncle Chen's Favorite Asian Cuisine`,
      description: `Union International Food and ITK Culinary is teaming up for a series of Chinese Cooking Classes from top local restaurants such as Chef Chu’s in Los Altos.  As a supplier of ingredients, Uncle Chen is a well known brand in mostly Asian households, but they’re forte is really keeping restaurants stocked with sauces for all of us to enjoy.
      \n
      For our first class, we’ll cover the following: Hardware: Wok, Spatula, Wisk, Cover and Heat. All critical items that will be discussed thoroughly.
      \n
      Menu:\n
      Mapo Tofu\n
      Original Dry Fried Chicken\n
      Dry Braised Prawns\n
    `,
      date: 'April 1st, 2018',
      time: '10am',
      duration: 'About 3 hours',
      cost: '$128',
      url: 'http://itkculinary.com/classes-workshops/uncle-chens-favorite-asian-cuisine/',
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
            <a href={eventDetail.url}><button>Sign up</button></a>
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
