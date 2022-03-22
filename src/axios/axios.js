import axios from "axios"

axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${parentSearch}`)
    .then()