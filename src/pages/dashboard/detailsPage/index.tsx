import cover from "../../../assets/cover.png"
const DetailsPage = () => {
  return (
    <div className="flex gap-4">
      <div>
        <img src={cover} alt="" />
      </div>
      <div className="font-Ubuntu p-4 flex  flex-col gap-4">
        <h2 className="font-bold text-5xl">
          Cover
        </h2>
        <h4>Director: Kingsley Omin</h4>
        <h4>Producer: Kingsley Omin</h4>
        <h4>Release Date: January 24, 2022</h4>
      </div>
    </div>
  )
}

export default DetailsPage