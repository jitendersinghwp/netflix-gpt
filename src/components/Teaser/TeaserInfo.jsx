const TeaserInfo = ({info}) => {
  return (
    <div>
        <h1 className="text-5xl font-bold mb-5">{info.title}</h1>
        <p className="text-[12px] w-4/12 mb-4">{info.overview}</p>
        <div className="flex gap-2.5">
            <button className="bg-white text-black text-18px] px-6 py-2 rounded-md">
                &#9658; Play
            </button>
            <button className="bg-gray-500 text-white text-18px] px-6 py-2 rounded-md">
                More Info
            </button>
        </div>
    </div>
  )
}

export default TeaserInfo