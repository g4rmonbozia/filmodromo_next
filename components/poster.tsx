export default function Poster({filme}){

    return (
        <div className='flex items-end justify-center flex-none w-[136px] h-[204px] bg-white'>
            <p className="flex items-center justify-center w-full h-8 text-center bg-[#e6e6e6]">{filme}</p>
        </div>
    )
    
}