import Banner from "../../Banner"
import Showing from "../../Showing"
import Coming from "../../Coming"
import Trainner from "../../Trainner"
import Showtimes from "../../Showtimes"
import TourPriceGood from "../../TourPriceGood"
import TourBlog from "../../TourBlog"
import NewPromotion from "../../NewPromotion"
import TourExperience from "../../TourExperience"
import TourType from "../../TourType"

const Body = () => {
  return <div>
    <Banner /> 
		<TourPriceGood />
		<TourExperience />
		<Showing />
		<TourType />
		<Trainner />
		<TourBlog />
		<NewPromotion />
  </div>
}
export default Body