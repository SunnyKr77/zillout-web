import "./Offers.css"
import Person from './assets/person.svg'
import Tag from './assets/tag.svg'
import Squares from './assets/squares.svg'

const Offers = ({ eventDetails, offerDetails }) => {
  const handleViewEventClick = () => {
    window.location.href = "https://zillout.com/pub/detail/209?tab=events"
  }

  const handleViewOfferClick = () => {
    window.location.href = "https://zillout.com/pub/detail/209?tab=offers"
  }

  const days = (offerDetails?.offerDays)
  function shortDay(day) {
    if (!days || !Array.isArray(days)) {
      return 'Not valid day'
    }

    return days.map(day => day.substring(0, 3)).join(', ')
  }

  const shortDayString = shortDay(days)
  
  return (
    <div className="offer-holder">
        <div id="box-offer" className="cover">
                <div className="offer-container">
                  <h2 className="head">Event Offers</h2>
                  <div className="p-container">
                    <p className="offers">till {eventDetails?.perkTime}</p>
                    <p>{eventDetails?.perkName}</p>
                    <p className="grey">+{eventDetails?.perkCount} more offers</p>
                  </div>
                  <button onClick={handleViewEventClick} className="btn">View All Offers</button>
                </div>
            <img className="person" src={Person} alt="" />
        </div>
        <div className="cover" id="day-offer">
        <div className="offer-container-day">
            <h2 className="head">Day Offers</h2>
            <div className="p-container">
              <p className="offers">{shortDayString}</p>
              
              <p>{offerDetails?.offerName}</p>
            </div>
            <button onClick={handleViewOfferClick} className="btn">View All Offers</button>
        </div>
        <img className="squares" src={Squares} alt=""  />
        <img className="tag" src={Tag} alt="" />
        </div>
    </div>
  )
}

export default Offers