export default function Stream ({name, stream, url, status}) {
    return (
        <div>
            <h2>{name}:</h2>
            {stream?
            <p><a href={url} target="_blank" rel="noreferrer">{status}</a></p>
            :<p><a href={url} target="_blank" rel="noreferrer">offline</a></p>}
        </div>
    )
} 