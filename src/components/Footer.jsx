export default function Footer(props) {


    //Filter duplicate entries of the same artist.
    const filterArtist = props.art.filter((element, ind) => ind === props.art.findIndex( elem => elem.artist === element.artist))

    const artList = filterArtist.map((artist, index) => {
        return (
            <div className="footer-card" key={index}>
                <h1>{artist.artist}</h1>
            </div>
        )
    })

    return (
        <footer>
            <div className="footer-title">
                <h1>Featured Artists</h1>
            </div>
            <div className="footer-content">
                {artList}
            </div>
        </footer>
    )
}