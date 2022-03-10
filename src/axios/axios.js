import axios from "axios"

const api = axios.create({
    APIkey: "key=AIzaSyAnu7Cu2x6E1HbI-sNDkbLrtbbn-oWAJhI",
    baseURL: `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${parentSearch}&maxResults=5&ey=AIzaSyAnu7Cu2x6E1HbI-sNDkbLrtbbn-oWAJhI&q=`
})
