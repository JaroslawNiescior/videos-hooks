import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const API_KEY = "AIzaSyCltH38ZlxE_pms062kWyvIDMSqduQdHIE";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                type: "video",
                maxResults: 5,
                key: API_KEY,
            },
        });

        setVideos(response.data.items);
    };

    return [videos, search]
};

export default useVideos;