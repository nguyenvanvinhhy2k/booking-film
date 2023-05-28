import bookingsAPI from "../../services/bookings.service";
import { useEffect, useState } from "react"
import dayjs from "dayjs";

const SearchDetail = ({ idCategory = 1 }: any) => {
    const [tourDetail, setTourDetail] = useState<any>([]);


    const formatDate = (date: Date, format: string) => {
        return dayjs(date).format(format);
    }
    
    console.log(tourDetail)

    const TourDetails = async () => {
        try {
            const data = await bookingsAPI.getTourByCategory(idCategory)
            const newData: any = data?.data?.tours?.map(( item: any) => {
                const startDate = new Date(item.startDate);
                const endDate = new Date(item.endDate);
                const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
                const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                return {
                    ...item,
                    countDay: numDays
                }
            })

            setTourDetail(newData)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        TourDetails()
    }, [idCategory])

    return (
        <div className="">
            <div className="text-[#003c71] text-[36px] font-bold ">
                <p className=" py-[5px]">Tour du lịch Dubai từ Hồ Chí Minh</p>
            </div>
            {tourDetail?.map((tour: any) => {
                return (
                    <div className="bg-[#fff] flex mt-[10px]">
                        <div className="p-[20px] w-[25%]">
                            <img src="https://cdn2.ivivu.com/2022/03/18/09/ivivu-khach-san-burj-al-arab-204x153.gif" alt="" />
                        </div>
                        <div className="pt-[30px] w-[50%]">
                            <div className=" text-[#003c71] text-[20px]">
                                {tour?.tourName}
                            </div>
                            <div className="">
                                Tuyệt vời | 3 đánh giá
                            </div>
                            <div className="">
                                Mã: TO2012 TG: {tour?.countDay} ngày Phương tiện: Máy bay
                            </div>
                            <div className="mt-[10px] ">
                                <ul className="flex text-[#00abc5] list-disc flex-wrap text-[14px] ml-[20px]">
                                    <li className="w-[48%] m-[1%]">Bà là hill</li>
                                    <li className="w-[48%] m-[1%]">Cù lao chàm</li>
                                    <li className="w-[48%] m-[1%]">Hội an</li>
                                    <li className="w-[48%] m-[1%]">Chùa Linh Ứng</li>
                                    <li className="w-[48%] m-[1%]">Bán đảo sơn trà</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-[30px] inline-block w-[25%] ">
                            <div className="text-[#003c71] text-[20px]">
                                Khởi hành: {formatDate(tour?.createdAt, "DD/MM/YYYY HH:mm:ss")}
                            </div>
                            <div className="text-[#00c1de] text-[30px]">
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tour?.price)}
                            </div>
                            <div className="">
                                *Áp dụng nhóm 2 khách
                            </div>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}
export default SearchDetail