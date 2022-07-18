import React from 'react'
import { Button, Card, CardContent, CardMedia, CardActions, Typography } from '@mui/material';
import "./App.css"

const CardGrid = ({data}) => {

    return(
    <div className="cardGrid">
        {data?.map((obj, index) => {
          return (
            <Card sx={{ maxWidth: 400 }} key={index} className="card">
              <a href={obj.url} target="_blank" rel="noreferrer">
                <CardMedia
                  component="img"
                  image={obj.image}
                  alt={obj.title} 
                  height="300"/>
              </a>
              <CardContent>
                <Typography variant="h6">{obj.title}</Typography>
                <Typography>{obj.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small"><a href={obj.url} target="_blank" rel="noreferrer">View / Buy</a></Button>
              </CardActions>
            </Card>
          )
        })
        }
      </div>
    )
};

export default CardGrid;