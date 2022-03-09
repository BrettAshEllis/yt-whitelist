import { useState, useEffect } from "react"

const baseURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&maxResults=5&key=AIzaSyAnu7Cu2x6E1HbI-sNDkbLrtbbn-oWAJhI&q="

export default function useParentFetch(parentSearch) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);


}