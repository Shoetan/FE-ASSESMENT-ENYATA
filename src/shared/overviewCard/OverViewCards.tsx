import { CardProps } from "./types"



const OverViewCards = ({title, quantity, add,color}:CardProps) => {
  return (
    <div className="px-[1.37rem] text-black border  rounded-2xl bg-white py-[1.31rem] w-[17rem] shadow-lg">
      <div className="flex justify-between">
        <h3 className="font-ubuntu text-xl font-semibold">{title}</h3>
        <img src={color} alt="" />
      </div>
      <div className="py-5">
        <h3 className="font-Ubuntu font-semibold text-lg">{quantity}</h3>
        <p className="font-Ubuntu text-sm text-green-500">{add} More than yesterday</p>
      </div>
    </div>
  )
}

export default OverViewCards