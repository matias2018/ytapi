const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

const content = document.getElementById('content');
const videoContainer = document.getElementById('video-container');

function getVideos(){
    fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLgdjqC7wOsGFvUSoxzfW43EqGsq4zrmEJ&maxResults=50&key=AIzaSyDD1NrPZjo6hpSSK9Ur_s24n9QjFTHeKdc`)
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Videos Lucimar</h2>';
        {data.items.map((item, index) => {
            console.log(item, index);
            const i = index + 1;
            const { id, snippet = {} } = item;
            const { playlistId, title, thumbnails = {}, resourceId } = snippet;
            const { medium = {} } = thumbnails;
            console.log(id);
            output += `
                        <ul class="list-group mb-4">
                            <a href="https://www.youtube.com/wacth?v=${resourceId.videoId}&list=${playlistId}&index=${i}" target="_blank">
                                <li class="list-group-item"><img src="${medium.url}"></li>
                                <li class="list-group-item"><h2> ${title} </h2></li>
                            </a>
                        </ul>`;
        })
        document.getElementById('output').innerHTML = output;
    }
    })
}

window.onload = getVideos;