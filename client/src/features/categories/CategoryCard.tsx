import React from 'react';
import { Category } from './types';
import { Link } from 'react-router-dom';
// import FormAddComment from '../comments/FormAddComment'
// import './styles/styles.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { StyledEngineProvider } from '@mui/material';

const CategoryCard = ({ category }: { category: Category }): JSX.Element => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Card sx={{ width: 600 }} className="card-category">
          <CardMedia
            sx={{ height: 300 }}
            image={category.img}
            title="dance"
            className="card-photo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="card-text">
              {category.name}
            </Typography>
          </CardContent>

          <Link className="details-button" to={`/categories/${category.id}`}>
            Подробнее
          </Link>
        </Card>
      </StyledEngineProvider>
    </>
  );
};

export default CategoryCard;
