import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import News from '../News/News';

const Newspaper = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-09-05&sortBy=publishedAt&apiKey=44be5ddc3196429099aea65c71369ed9')
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    articles.map(article => <Grid item xs={2} sm={4} md={4}>
                        <News article={article}></News>
                    </Grid>)
                }
            </Grid>
        </Box>
    );
};

export default Newspaper;