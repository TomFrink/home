import { api } from "../pages/api/meetupData";

export const Meetup = () => {
  return (
    <>
      <MeetupHeader />
      <div className="meetup=container">
        {api.map((data, key) => {
          return (
            <div key={key}>
              <Event
                key={key}
                name={data.name}
                local_date={data.local_date}
                // venue={data.venue}
                link={data.link}
                description={data.description}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const MeetupHeader = () => {
  return (
    <header className="meetupHeader">
      <h2>Meetup Events</h2>
    </header>
  );
};

// removed venue because array
const Event = ({ name, local_date, link, description }) => {
  if (!name) return <div />;
  return (
    <article>
      <h4>{name}</h4>

      <h4>{local_date}</h4>

      {/* <h5>{venue}</h5> */}

      {description}

      <p>
        <a href={link}>More</a>
      </p>
    </article>
  );
};
