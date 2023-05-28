import { useEffect, useState } from "react"
import bookingsAPI from "../../services/bookings.service"
import { Link, useNavigate } from "react-router-dom";

const TourPriceGood = () => {
	const [tours, setTours] = useState<any>([]);
	const [category, setCategory] = useState<any>({});
	const navigation = useNavigate()

	const getDataListTours = async () => {
    try {
			const [data, categories ] = await Promise.all([				
				bookingsAPI.getTourByCategory(1),
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
			setTours(newData?.slice(0, 3))
    } catch (error) {
      console.log(error)
    }
  }

	const seeMore = () => {
    navigation(`/SearchTour?_q=1`)
	}

	useEffect(() => {
		getDataListTours()
	}, [])

	return <div className=" scroll-margin-top bg-gray-50 bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14 flex flex-col justify-center items-center p-28">
		<div className="mx-auto w-full max-w-6xl px-5" >
      <div className=" text-center text-[30px] font-bold text-[#d82f8b]">{category?.name}</div>
			<p className="mb-5 text-center text-[#003C71]">{category?.title}</p>
			<div className="flex justify-between">
				{tours?.map((tour: any) => {
					return (
						<div className="w-[32%] rounded-lg  text-[#fff] pb-[20px]" style={{
							boxShadow: `0 2px 8px 0 rgba(20,16,11,.07)`}}>
								<div className=" rounded-lg overflow-hidden">
								<img className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-300 " src={`http://localhost:8228/files/${tour?.poster}`} alt="" />
								</div>
								<div className="px-[10px] text-[#003C71]">
								<Link to={`/${tour.id}`} className="text-[#003C71] mt-[10px] flex items-center font-bold text-[16px]">{tour?.tourName}
								</Link>
								<div className="mt-[5px] text-[#003C71]">
									<p>Đánh giá: {tour?.rate ? tour?.rate : "Chưa có"}</p>
								</div>
								<div className="mt-[10px]">
									<ul className="flex text-[#00abc5] list-disc flex-wrap text-[14px] ml-[20px]">
										{tour?.listLocationNew?.map((it: any) => {
											return (
												<li className="w-[48%] m-[1%]">{it}</li>
											)
										})}
									</ul>
								</div>
								</div>
								<div className="text-[#d82f8b] font-bold px-[20px] mt-[20px] flex justify-end ">
									{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tour?.price)}
								</div>
							</div>
					)
				})}
			</div>
			<div className="flex content-center items-center mt-[40px]">
				<button onClick={seeMore} className="text-[#d82f8b] px-[10px] py-[7px] hover:opacity-[0.8] text-[18px] border-[#d82f8b] border-2 font-bold bg-[#fff] m-auto rounded-2xl">
					Xem tiếp nhé !
				</button>
			</div>
    </div>
  </div>
}
export default TourPriceGood