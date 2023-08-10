export default function Card({src, alt, text}) {
  return (
    <div className="flex flex-col rounded-2xl ring-offset-purple-300 shadow  m-1 p-2 mt-5">
        <img src={src} alt={alt} />
        <h1 className="text-[25px] text-center font-bold">{text}</h1>
        <button className="  text-2xl px-3 py-2 font-bold bg-indigo-700 hover:bg-indigo-500 rounded-lg text-white">View More</button>
    </div>
  )
}