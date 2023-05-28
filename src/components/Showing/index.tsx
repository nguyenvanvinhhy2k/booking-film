import { date } from "yup";
import bookingsAPI from "../../services/bookings.service";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const TourExperience = () => {
	const [topTours, setTopTours] = useState<any>([]);
	const navigate = useNavigate()

	const getTopTour = async () => {
		try {
			const data = await bookingsAPI.getMoviesBooinges()
			const newData =  data?.data?.data?.map((item: any) => {
				return {
          ...item,
					listLocationNew: item?.listLocation?.split(",")
				}
			})

			setTopTours(newData?.slice(0, 3))
		} catch (error) {
			console.log(error)
		}
	}

	const seeMore =( ) => {
		navigate("/SearchTour?_q=bestTour")
	}
	useEffect(() => {
		getTopTour()
	}, [])
	return <div className=" scroll-margin-top bg-gray-50 bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14 flex flex-col justify-center items-center p-28">
		<div className="mx-auto w-full max-w-6xl px-5" >
			<div className="text-center text-[30px] font-bold text-[#d82f8b]">Tour Được Đặt Nhiều Nhất</div>
			<p className="mb-5 text-center text-[#003C71]">Tour gần đây được mọi người ưa chuộng</p>
			<div className="flex justify-between">
				{topTours?.map((item:any) =>{
					return(
						<div className="w-[32%] rounded-lg  text-[#fff] pb-[20px]" style={{
							boxShadow: `0 2px 8px 0 rgba(20,16,11,.07)`
						}}>
							<div className=" rounded-lg overflow-hidden">
								<img className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-300 " src={`http://localhost:8228/files/${item?.poster}`} alt="" />
							</div>
							<div className="px-[10px] text-[#003C71]">
							<Link to={`/${item.id}`}  className="text-[#003C71] mt-[10px] flex items-center font-bold text-[16px]">
									{item.tourName}
								</Link>
								<div className="mt-[5px] text-[#003C71]">
									<p>Đánh giá : {item?.rate ? item?.rate : "Chưa có"}</p>
								</div>
								<div className="mt-[10px]">
									<ul className="flex text-[#00abc5] list-disc flex-wrap text-[14px] ml-[20px]">
									{item?.listLocationNew?.map((it: any) => {
											return (
												<li className="w-[48%] m-[1%]">{it}</li>
											)
										})}
									</ul>
								</div>
							</div>
							<div className="text-[#d82f8b] font-bold px-[20px] mt-[20px] flex justify-end ">
							{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item?.price)}
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
export default TourExperience