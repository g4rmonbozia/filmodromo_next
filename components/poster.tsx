export default function Poster({titulo}){

    return (
        <div className='rounded-sm flex items-end justify-center flex-none w-[136px] h-[204px] bg-white'>
            <p className="flex items-center justify-center w-full h-8 text-black text-center bg-[#e6e6e6]">{titulo}</p>
        </div>
    )
    
}