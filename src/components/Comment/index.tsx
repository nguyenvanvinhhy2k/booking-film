import { useParams } from "react-router"
import { useEffect, useState } from "react";
import bookingsAPI from "../../services/bookings.service"
import { date } from "yup";
import dayjs from "dayjs";
const Comment = () => {
    const { id } = useParams()
    const [comments, setComments] = useState<any>([])
    const [commentss, setCommentss] = useState<any>('')

    console.log(commentss)

    const formatDate = (date: Date, format: string) => {
		return dayjs(date).format(format);
    }
    const commentRate = async () => {
        const userId = localStorage.getItem('userID')
        if (userId) {
            try {
                await bookingsAPI.addReviews({
                    userId: userId,
                    tourId: id,
                    rating: 9,
                    comment: commentss
                })
                getComment()
                setCommentss('')
            } catch (error) {
                console.log(error)
            }
        } else {
            alert("Bạn phải đăng nhập trước khi bình luận")
        }

    }

    const getComment = async () => {
        try {
            const data = await bookingsAPI.getReviews({size: 999, tourId: id})
            setComments(data?.data?.data)
        } catch (error) {
               console.log(error)
        }
    }


    useEffect(() => {
        getComment()
    }, [id])
    return <div className="mt-[30px] border-b-[2px] pb-[50px]">
        <p className="text-[24px] font-bold">Bình luận từ người xem</p>
        <div className="flex border-b-[2px]">
            <div className="p-[20px] font-bold border-b-[2px] border-b-pink-600">
                tất cả (6)
            </div>
            <div className="p-[20px]">
                khen (5)
            </div>
            <div className="p-[20px]">
                gay cấn(1)
            </div>
        </div>
        <div className="">
            {comments?.map((item: any) => {
                return (
                    <div className="flex pt-[20px]">
                        <img className="w-[50px] h-[50px] object-cover rounded-full" src="https://lh3.googleusercontent.com/fife/APg5EOaQLsPbRju4dypa-NLje7sctJCdB9GV4ba6AxQcbgNsL-OVNK5fBwxRJYofiHfFZUeaKPv16RDExm1h-5Bd765SsB_gNXs39ZtAHOsO8dBjsq_4jq4-R4t_4xfMox1w3LHG9dh2uasD8SKpjWjS4mqWB8DG9b1G4vDbzR1MtuFIRUUPm2evgGV72bb5-eqOEwOLHqymix16pXLBLfTsGxgMqKcIFLqwp-hVdQtm6m2pu9uC7DYtS4MDiK8X2dslJ7h_N0TsBe9mp9WgsE2RErSwH9dRskA12pWBRwVcwzDeV5GDvKiwx_Fhau1TSbzVV1GyL1iwKSYZwZE-aRSu5pWpSydJeUayY8oryEoZI82hmXS-yHv3HM6xt1fiUOysuyLK5Y9xf6DMG417NOOpbH0KfTZIXVgdidSplfP5n75yqm3YlJvqqg1UM2yQQkwTR4e576Do1C2eJjrLlvUI_n50PZdkH2PKN6hHIqRHi_lZmWfzwFPeAN5WgSgskdRl7mC4jSpEUXPoZg1JB9m00T__sCilGzWs5HFNsQjnSnQrCCbQT9hzkhGWCX0ia1m_uTXSzAccOp6JIdFeBNnyOKg4rxEUKwKMcWAZEC1kYL7fSrh-QgYgjHtnYw1P2wd0bF9apEmCj7EfU_HF7WICDs_og4jUuhYVaLvrcHaiz7qzc3e6n_ENUDcRHMCUOU_gpvpc9m-RjFw1DlrYtmcPQd7ahGO1yxXOyO3nv3HntYc5xsF5perxPaDIDNrzp8wFeo7ltHr5EaB9a6Dy6daKy_M5yyQxpvMYZ_q1OaYO2-wEPrpgfDP29WEK4eTFMxeeh7kEm4iVHvVaGafRk6qy_yvDbAJErTxUjqcgpZcTNa2HbrIpX9dBpGkQxhvScENscH3BGTEsInqQsi_PiSrCcsnQDp3XfQoLq-DJu47oIotvLW9SEK_dDeRaul2e6DAgQkvZlKf91R98bGHjL_het1IuCvyCU1FdJVmAM1Id8EBw2AJ7oOPlUgFBNWaZSxp2wHP68i7N3E_Tmu-CWCdrcM04BoQWWbyv9UAgkGu76NXZ_sF6oscxv4C3b4jeHtwv2t35fygrY0OXAzXHDJh5FDjlosPJvRQJ8GyFo7zG9vUkHP4bVBngyFEZ5naL4zcXgHn7aZUOIMIG-UQeuyHwizhwM6ev78sTccID_7SinYkZAIxe0HPpHOeyVDPsqkq3-AsbRahf5NUYH2lCElykIRXuDKFHy9tzs7ko6unoVkEzVIMJ54IyQsBgXP7N973O8P3tp-AqbKxbYgoQuOnwtCi6xraFKyOkzHp_Ss4Su5oEmSdnY_8zWYDc4DnW7bTKYRiXvp-0hQv1Z8w_vzzP_Nnih2-sq93EgPPo8CDhG91MJqxrpcvizo-c-JfQWwZdSXVVA45BxwXAeBxPZJI0W3R6BuRmg2kIDRqo4yFGOVDOj6MAFvL7AKujcMyfjHyUKuIPNpbx97F6l66-BuQtUsjDKH1bSaPMX1LgwFF7Eh5WJu0mMMu8ivxPK3X4zqXwnhkxwX_B9mK6dlznHvfjUsSRtp9n9sVob-zpMWuC0pkKwgRjzJugrpkXskK40NFL4oUEkq0=s32-c?fbclid=IwAR0Hp7y1yfyN9OtIUoGe0XzB_h7aVhbra22jz8CaZqH1EDp1Y3AWQjcY40Y" alt="" />
                        <div className="px-[20px]">
                            <p className="font-bold">{item?.user?.name}</p>
                            <p>{item?.comment}</p>
                        </div>
                        <div className="text-[12px] text-slate-400">
                            {formatDate(item?.createdAt, "DD/MM/YYYY HH:mm:ss")}
                        </div>
                    </div>

                )
            })}

            <div className="pt-[20px]">
                <input onChange={(e) => setCommentss(e?.target?.value)} value={commentss} className="border-[1px] border-[#f78da7] w-[80%] p-[20px] mr-[10px] rounded" type="text" placeholder="bình luận của bạn" />
                <button onClick={commentRate} className="border-[1px] p-[20px] rounded hover:bg-[#d97f00] bg-[#fcb900]">
                    GỬI
                </button>
            </div>
        </div>
    </div>
}
export default Comment