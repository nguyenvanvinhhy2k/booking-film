import Banner from "../../Banner"
import Showing from "../../Showing"
import Trainner from "../../Trainner"
import TourPriceGood from "../../TourPriceGood"
import TourBlog from "../../TourBlog"
import NewPromotion from "../../NewPromotion"
import TourExperience from "../../TourExperience"

const Body = () => {
  return <div>
    <Banner /> 
		<Showing />
		<TourPriceGood />
		<TourExperience />		
		{/* <TourType /> */}
		<Trainner />
		{/* <TourBlog />
		<NewPromotion /> */}
  </div>
}
export default Body