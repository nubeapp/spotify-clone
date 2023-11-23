import { Pause, Play } from "./Player"
import { usePlayerStore } from "@/store/playerStore"

export function CardPlayButton ({ id, size = 'small' }) {
    const { 
        currentMusic, 
        isPlaying, 
        setIsPlaying, 
        setCurrentMusic } = usePlayerStore(state => state)
        
    const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id

    const handleClick = () => {
        if (isPlayingPlaylist) {
            setIsPlaying(false)
            return
        }

        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data
                setCurrentMusic({  songs, playlist, song: songs[0] })
                setIsPlaying(true)
            })
    }

    const iconClassname = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'

    return (
        <button className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition 
        hover:bg-green-400" onClick={handleClick}>
            {isPlayingPlaylist ? <Pause className={iconClassname}/> : <Play className={iconClassname}/>}
        </button>
    )
}