import '../Artist.css'

export default function Artist(props) {

    const filterArtist = props.art.filter((element, ind) => ind === props.art.findIndex( elem => elem.artist === element.artist))
    const artists = filterArtist.map((art, index) => {
        return (
            <div className="artist" key={index}>
                <h1 className="artist-title">{art.artist}</h1>
                <p className="artist-description">{art.artistDescription}</p>
            </div>
        )
    })

    return (
        <main>
            <h1 className="main-title">Featured Artists</h1>
            <div className="artists-container">
                {artists}
            </div>
        </main>
    )
}