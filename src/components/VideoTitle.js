const VideoTitle = ({title, overview}) => {
    return(
        <div className = "pt-[18%] w-screen aspect-video pt-30 px-16 absolute text-white bg-gradient-to-r from-black opacity-80">
            <h1 className = "text-5xl font-bold p-2 hover:text-8xl duration-1000">{title}</h1>
            <p className = "p-2 text-lg w-1/2 italic">{overview}</p>

            <div className = "py-4 m-2">
                <button 
                    className = "px-4 py-2 border-black rounded-md bg-white text-black opacity-[90%] hover:bg-opacity-60 active:bg-gray-200 font-bold">▶ Play</button>
                <button 
                    className = "px-4 py-2 mx-3 rounded-md bg-gradient-to-b from-gray-600 to-gray-700 text-white hover:bg-opacity-80">ℹ️ More Info</button>
            </div>
        </div>
    );
};


export default VideoTitle;