import { date } from "yup";
import bookingsAPI from "../../services/bookings.service";
import { useEffect, useState } from "react"

const TourExperience = () => {
	const [tours, setTours] = useState<any>([]);
	const [category, setCategory] = useState<any>({});
	console.log(category)
	const getTour = async () => {
		try {
			const data = await bookingsAPI.getTourByCategory(2)
			setTours(data?.data?.tours?.slice(0, 3))
			setCategory(data?.data)
			console.log(data?.data.tour)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		getTour()
	}, [])
	return <div className=" scroll-margin-top bg-gray-50 bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14 flex flex-col justify-center items-center p-28">
		<div className="mx-auto w-full max-w-6xl px-5" >
			<div className="text-center text-[30px] font-bold text-[#d82f8b]">{category?.name}</div>
			<p className="mb-5 text-center text-[#003C71]">{category?.description}</p>
			<div className="flex justify-between">
				{tours?.map((tour:any) =>{
					return(
						<div className="w-[32%] rounded-lg  text-[#fff] pb-[20px]" style={{
							boxShadow: `0 2px 8px 0 rgba(20,16,11,.07)`
						}}>
							<div className=" rounded-lg">
								<img src="https://cdn2.ivivu.com/2022/03/28/16/ivivu-merlion-park-singapore-360x225.gif" alt="" />
							</div>
							<div className="px-[10px] text-[#003C71]">
								<div className="text-[#003C71] mt-[10px] flex items-center font-bold text-[16px]">
									{tour.tourName}
								</div>
								<div className="mt-[5px] text-[#003C71]">
									<p>Đánh giá : {tour?.rate ? tour?.rate : "Chưa có"}</p>
								</div>
								<div className="mt-[10px]">
									<ul className="flex text-[#00abc5] list-disc flex-wrap text-[14px] ml-[20px]">
										<li className="w-[48%] m-[1%]">Bà là hill</li>
										<li className="w-[48%] m-[1%]">Cù lao chàm</li>
										<li className="w-[48%] m-[1%]">Hội an</li>
										<li className="w-[48%] m-[1%]">Chùa Linh Ứng</li>
										<li className="w-[48%] m-[1%]">Bán đảo sơn trà</li>
		
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
				<button className="text-[#d82f8b] px-[10px] py-[7px] hover:opacity-[0.8] text-[18px] border-[#d82f8b] border-2 font-bold bg-[#fff] m-auto rounded-2xl">
					Xem tiếp nhé !
				</button>
			</div>
		</div>
	</div>
}
export default TourExperience