
import SearchInfo from "../../components/SearchInfo"
import SearchDetail from "../../components/SearchDetail"
import Footer from "../../components/Layout/Footer"
import Header from "../../components/Layout/Header"
import { useState } from "react"
import useQueryParams from "../../hook/useQueryParams"



function SearchTour() {
    const [idCategory, setIdCategory] = useState<any>()
		const [params, setQueryParams] = useQueryParams()
		const { _q } = params


    return (
        <div className="flex items-center justify-center bg-[#ecf0f5]">
            <div className="w-full h-auto">
                <Header />
                <div className="flex p-[5rem] pt-[50px] ">
                    <div className="w-[25%] mr-[30px] mt-[72px]">
                        <SearchInfo setIdCategory={setIdCategory} />
                    </div>
                    <div className="w-[70%] mr-[30px]">
                        <SearchDetail idCategory={idCategory} _q={_q}/>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default SearchTour