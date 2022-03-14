import { useState, useEffect } from "react"

const baseURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&maxResults=5&key=AIzaSyAnu7Cu2x6E1HbI-sNDkbLrtbbn-oWAJhI&forUsername=`

export default function useParentFetch(parentSearch) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadData() {
            setLoading(true)

            if (parentSearch.length === 0) {
                setLoading(false);
                return;
            }
            setData(null);
            setError(null);
            try {
                const response = await fetch(baseURL + parentSearch);
                const json = await response.json();
                const videos = json.data.map((val) => ({
                    id: val.id,
                    title: val.snippet.title,
                    descr: val.snippet.description
                }));
                setData(videos);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        loadData;
    }, [parentSearch]);

    return { data, error, loading };
}
