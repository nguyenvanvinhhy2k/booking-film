import bookingsAPI from "../../services/bookings.service";
import { useEffect, useState } from "react"
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const SearchDetail = ({ idCategory = 1, _q }: any) => {
    const [tourDetail, setTourDetail] = useState<any>([]);
		const [tourSearch, setTourSearch] = useState<any>([]);
		const [topTours, setTopTours] = useState<any>([]);
	
		const getTopTour = async () => {
			try {
				const data = await bookingsAPI.getMoviesBooinges()
				const newData =  data?.data?.data?.map((item: any) => {
					const startDate = new Date(item.startDate);
					const endDate = new Date(item.endDate);
					const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
					const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
					return {
						...item,
						countDay: numDays,
						listLocationNew: item?.listLocation?.split(",")
					}
				})
				setTopTours(newData)
			} catch (error) {
				console.log(error)
			}
		}

    const formatDate = (date: Date, format: string) => {
        return dayjs(date).format(format);
    }

    const TourDetails = async () => {
        try {
            const data = await bookingsAPI.getTourByCategory(_q ? _q : idCategory)
            const newData: any = data?.data?.map(( item: any) => {
                const startDate = new Date(item.startDate);
                const endDate = new Date(item.endDate);
                const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
                const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                return {
                    ...item,
                    countDay: numDays,
										listLocationNew: item?.listLocation?.split(",")
                }
            })
            setTourDetail(newData)
        } catch (error) {
            console.log(error)
        }
    }

		const searchTour = async () => {
			try {
					const data = await bookingsAPI.getTours({_q})
					const newData: any = data?.data?.data?.map(( item: any) => {
							const startDate = new Date(item.startDate);
							const endDate = new Date(item.endDate);
							const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
							const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
							return {
									...item,
									countDay: numDays,
									listLocationNew: item?.listLocation?.split(",")
							}
					})
					setTourSearch(newData)
			} catch (error) {
					console.log(error)
			}
	}

    useEffect(() => {
        TourDetails()
				searchTour()
				getTopTour()
				window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [idCategory, _q])

    return (
        <div className="">
            <div className="text-[#003c71] text-[36px] font-bold ">
							<div className="flex justify-between items-center">
                <p className=" py-[5px]">Danh sách các Tour du lịch</p>
								<div className="w-[40%] flex h-[40px]">
								{/* <InputSearchDebounce onChange={(input: any) => setQueryParams({ ...params, _q: input }, true)} className="h-full rounded-[12px] text-[12px] p-[20px]" isHiddenIcon={true} delay={500} /> */}
								{/* <div className="flex items-center w-full">
								<input onChange={(e) => setValue(e?.target?.value)} type="text" placeholder="Nhập tìm kiếm ..." className="h-full w-full rounded-[12px] text-[12px] p-[20px]"/>
								<button onClick={searchTours} className="text-[#fff] flex items-center p-[20px] hover:bg-[#FFBD00] text-[18px] font-bold bg-[#f79321] m-auto rounded-lg ml-[20px] h-[40px]">Tìm</button>
								</div> */}
								</div>
								</div>
				</div>

				{_q && _q != 1 && 2 && _q != "bestTour" ? (
					tourSearch?.map((tour: any) => {
						return (
							<div className="bg-[#fff] flex mt-[10px]">
								<div className="p-[20px] w-[25%]">
									<img src={`http://localhost:8228/files/${tour?.poster}`} alt="" />
								</div>
								<div className="pt-[30px] w-[50%]">
									<Link to={`/${tour?.id}`} className=" text-[#003c71] text-[20px]">
										{tour?.tourName}
									</Link>
									<div className="mb-[10px]">
										Tuyệt vời | {tour?.reviews?.length} đánh giá
									</div>
									<div className="">
										Mã: {tour?.code} TG: {tour?.countDay} ngày Phương tiện: {tour?.transport}
									</div>
									<div className="mt-[10px] ">
										<ul className="flex text-[#00abc5] list-disc flex-wrap text-[14px] ml-[20px]">
											{tour?.listLocationNew?.map((it: any) => {
												return (
													<li className="w-[48%] m-[1%]">{it}</li>
												)
											})}
										</ul>
									</div>
								</div>
								<div className="pt-[30px] inline-block w-[25%] ">
									<div className="text-[#003c71] text-[20px] mb-[20px]">
										Khởi hành: {formatDate(tour?.createdAt, "DD/MM/YYYY HH:mm:ss")}
									</div>
									<div className="text-[#00c1de] text-[30px]">
										{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tour?.price)}
									</div>
								</div>
							</div>
						)
					})
				) : _q === "bestTour" ? (
					topTours?.map((tour: any) => {
						return (
							<div className="bg-[#fff] flex mt-[10px]">
								<div className="p-[20px] w-[25%]">
									<img src={`http://localhost:8228/files/${tour?.poster}`} alt="" />
								</div>
								<div className="pt-[30px] w-[50%]">
									<Link to={`/${tour?.id}`} className=" text-[#003c71] text-[20px]">
										{tour?.tourName}
									</Link>
									<div className="mb-[10px]">
										Tuyệt vời | {tour?.reviews?.length} đánh giá
									</div>
									<div className="">
										Mã: {tour?.code} TG: {tour?.countDay} ngày Phương tiện: {tour?.transport}
									</div>
									<div className="mt-[10px] ">
										<ul className="flex text-[#00abc5] list-disc flex-wrap text-[14px] ml-[20px]">
											{tour?.listLocationNew?.map((it: any) => {
												return (
													<li className="w-[48%] m-[1%]">{it}</li>
												)
											})}
										</ul>
									</div>
								</div>
								<div className="pt-[30px] inline-block w-[25%] ">
									<div className="text-[#003c71] text-[20px] mb-[20px]">
										Khởi hành: {formatDate(tour?.createdAt, "DD/MM/YYYY HH:mm:ss")}
									</div>
									<div className="text-[#00c1de] text-[30px]">
										{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tour?.price)}
									</div>
								</div>
							</div>
						)
					})
				)  : (
					tourDetail?.map((tour: any) => {
						return (
							<div className="bg-[#fff] flex mt-[10px]">
								<div className="p-[20px] w-[25%]">
									<img src={`http://localhost:8228/files/${tour?.poster}`} alt="" />
								</div>
								<div className="pt-[30px] w-[50%]">
									<Link to={`/${tour?.id}`} className=" text-[#003c71] text-[20px]">
										{tour?.tourName}
									</Link>
									<div className="mb-[10px]">
										Tuyệt vời | {tour?.reviews?.length} đánh giá
									</div>
									<div className="">
										Mã: {tour?.code} TG: {tour?.countDay} ngày Phương tiện: {tour?.transport}
									</div>
									<div className="mt-[10px] ">
										<ul className="flex text-[#00abc5] list-disc flex-wrap text-[14px] ml-[20px]">
											{tour?.listLocationNew?.map((it: any) => {
												return (
													<li className="w-[48%] m-[1%]">{it}</li>
												)
											})}
										</ul>
									</div>
								</div>
								<div className="pt-[30px] inline-block w-[25%] ">
									<div className="text-[#003c71] text-[20px] mb-[20px]">
										Khởi hành: {formatDate(tour?.createdAt, "DD/MM/YYYY HH:mm:ss")}
									</div>
									<div className="text-[#00c1de] text-[30px]">
										{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tour?.price)}
									</div>
								</div>
							</div>
						)
					})

				)}


        </div>
    )
}
export default SearchDetail