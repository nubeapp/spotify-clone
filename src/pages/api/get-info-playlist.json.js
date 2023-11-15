import { allPlaylists, songs as allSongs } from "@/lib/data";

export async function GET ({ params, request }) {
    // Get the id from the URL
    const { url } = request
    const urObject = new URL(url)
    const id = urObject.searchParams.get('id')

    const playlist = allPlaylists.find((playlist) => playlist.id === id)
    const songs = allSongs.filter(song => song.albumId === playlist?.albumId)

    return new Response(JSON.stringify({ playlist, songs }), {
        headers: { "content-type": "application/json;charset=UTF-8" },
    })
}