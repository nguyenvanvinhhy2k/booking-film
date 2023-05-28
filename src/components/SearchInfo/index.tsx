import bookingsAPI from "../../services/bookings.service"
import { useState, useEffect } from "react"

const SearchInfo = ({setIdCategory} : any) => {
    const [tours, setTours] = useState<any>([]);
    const getTours = async () => {
        try {
            const data = await bookingsAPI.getCategories()
            setTours(data?.data?.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getTours()
    }, [])

    return (
        <div className="">
            <div className="border-2 border-[#ddd]">
                <div className="text-[#333] bg-[#f5f5f5] border-2 text-[24px]">
                    <p className="text-center py-[5px]">Loại Tours</p>
                </div>
                {tours?.map((tour: any) => {
                    return (
                        <div onClick={() => setIdCategory(tour?.id)} className="bg-[#fff] pt-[10px] text-[18px] pl-[20px] hover:bg-[#00c1de]">
                            <p className="py-[10px]">{tour?.name}</p>
                        </div>
                    )
                })}

            </div>
        </div>

    )
}
export default SearchInfo