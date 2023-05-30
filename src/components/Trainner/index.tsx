import { useNavigate } from "react-router-dom";
import bookingsAPI from "../../services/bookings.service"
import { useEffect, useState } from "react"

const Trainner = () => {
	const [tours, setTours] = useState<any>([]);
	const [category, setCategory] = useState<any>({});
	const navigation = useNavigate()

	const getTour = async () => {
		try {
			const [data, categories ] = await Promise.all([				
				bookingsAPI.getTourByCategory(3),
				bookingsAPI.getCategories()
			]) 
			const newData =  data?.data?.map((item: any) => {
				const name = categories?.data?.data?.find((it: any) => item?.cateId === it?.id).name
				const title = categories?.data?.data?.find((it: any) => item?.cateId === it?.id).description
				setCategory({ name, title })
				return {
          ...item,
					listLocationNew: item?.listLocation?.split(",")
				}
			})
			setTours(newData?.slice(0, 4))
		} catch (error) {
			console.log(error)
		}
	}

	const seeMore = () => {
    navigation(`/SearchTour?_q=1`)
	}
	useEffect(() => {
		getTour()
	}, [])
	return <div className=" bg-black bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14 flex justify-center items-center p-28" style={{
		backgroundImage: `url(
			https://static.mservice.io/img/momo-upload-api-211001091715-637686766356856456.jpg
	)`}}>
		<div className="mx-auto w-full max-w-6xl px-5" >
      <div className="mb-5 text-center text-[25px] font-bold text-[#fff]">TOUR MỚI NHẤT</div>
			<div className="flex justify-between">
				{tours?.map((item: any) => {
					return (
						<div className="w-[23%] text-[#fff] ">
						<div className="h-[150px] rounded-lg overflow-hidden">
						<img className="hover:scale-110 transition-transform duration-300 w-full h-full"  src={`http://localhost:8228/files/${item?.poster}`} alt="" />
						</div>
						<div className=" mt-[10px]">{item?.tourName}</div>
						<div className="truncate" title={item?.description}>{item?.description}</div>
					</div>
					)
				})}
			</div>
    </div>
  </div>
}
export default Trainner