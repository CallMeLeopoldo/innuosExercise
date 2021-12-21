import React from 'react'
import { useSelector } from 'react-redux'


function AlbumList() {
    const album = useSelector((state) => state.list.value.data)
    return (
        Object.keys(album).map((key) => {
            return (
                <div className="albumInfo">
                    <div className="image-container">
                    
                        <img 
                            src={album[key].cover ? window.location.origin +`/covers/${album[key].cover}` : window.location.origin + '/images/undefined_album_cover.png'} 
                            alt=""
                            style= {{marginRight: 2 + 'em'}, {marginLeft: 2 + 'em'}, {width: 200 + 'px'}}>
                        
                        </img>
                    
                        <div className="icon">

                            <img
                                src={album[key].source !== "LOCAL" ? window.location.origin +`/images/qobuz.png` : null} 
                                alt=""
                                style= {{width: 20 + 'px'}}>
                            </img>             

                        </div>

                    </div>
                    
                    <h1 className="artistInfo">{album[key].artist}</h1>
                    <h1 className="albumInfo">{album[key].album}</h1>
                </div>
            )
        })
    );
}

export default AlbumList
