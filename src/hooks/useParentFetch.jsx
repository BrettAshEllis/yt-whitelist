import { useState, useEffect } from "react"

const baseURL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forUsername=Jerma985&maxResults=1&key=AIzaSyAnu7Cu2x6E1HbI-sNDkbLrtbbn-oWAJhI`

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
