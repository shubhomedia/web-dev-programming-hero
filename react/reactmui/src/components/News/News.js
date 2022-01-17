import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NewsCard from './Card/NewsCard';
const News = () => {
    const [articles,setArticles] = useState([]);
    useEffect( ()=>{
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-11-05&sortBy=publishedAt&apiKey=44be5ddc3196429099aea65c71369ed9')
        .then(res => res.json())
        .then(data =>setArticles(data.articles))
    },[])
    
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            articles.map(article => <Grid item xs={2} sm={4} md={4}>
                <NewsCard article={article}></NewsCard>
                </Grid>
                )
        }
      </Grid>
    </Box>
        </div>
    );
};

export default News;






