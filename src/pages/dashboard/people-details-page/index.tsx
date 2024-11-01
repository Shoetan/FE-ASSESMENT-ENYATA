import people from "../../../assets/people.png"
const PeoplePage = () => {
  return (
    <div className="flex gap-4">
      <div>
        <img src={people} alt="" />
      </div>
      <div className="font-Ubuntu p-4 flex  flex-col gap-4">
        <h2 className="font-bold text-5xl">
          Shank Comics
        </h2>
        <h4>Gender: Female</h4>
        <h4>Year of birth: January 24, 1922</h4>
        <h4>Skin Color: Brown</h4>
        <h4>Height: 150CM</h4>
      </div>
    </div>
  )
}

export default PeoplePage