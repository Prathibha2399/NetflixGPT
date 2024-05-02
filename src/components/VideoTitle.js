const VideoTitle = ({title, overview}) => {
    return(
        <div className = "pt-[15%] w-screen aspect-video pt-30 px-[6%] md:px-12 absolute text-white bg-gradient-to-r from-black opacity-80">
            <h1 className = "text-2xl font-bold p-2 md:hover:text-8xl duration-1000 hover:text-3xl md:text-6xl">{title}</h1>
            <p className = "hidden md:inline-block p-2 text-lg w-1/2 italic">{overview}</p>

            <div className = "py-4 m-2">
                <button 
                    className = "md:px-4 md:py-2 px-2 py-1 border-black rounded-md bg-white text-black opacity-[90%] hover:bg-opacity-60 active:bg-gray-200 font-bold">▶ Play</button>
                <button 
                    className = "md:px-4 md:py-2 px-2 py-1 mx-3 rounded-md bg-gradient-to-b from-gray-600 to-gray-700 text-white hover:bg-opacity-80">ℹ️ More Info</button>
            </div>
        </div>
    );
};


export default VideoTitle;