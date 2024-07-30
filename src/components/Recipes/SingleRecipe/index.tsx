import { CardContent, CardMedia, Typography, Box } from '@mui/material';
import { FaUser, FaClock, FaUtensils } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SingleRecipeCard from './SingleRecipeCard';
import RecipeSkelton from './RecipeSkelton';
import { SingleRecipeProps } from '../../../types';
import { IoRestaurantOutline } from "react-icons/io5";

const SingleRecipe: React.FC<SingleRecipeProps> = ({ recipe, isLoading, error, isSingleRecipePage }) => {

    if (isLoading) {
        return <SingleRecipeCard isSingleRecipePage={isSingleRecipePage}>
            <RecipeSkelton isSingleRecipePage={isSingleRecipePage} />
        </SingleRecipeCard>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }
    return (
        <SingleRecipeCard isSingleRecipePage={isSingleRecipePage}>
            {
                isSingleRecipePage && <Typography variant="h6"  mb={3}>  <Link style={{ color: '#007bff' , textDecoration: 'none'}} to={'/'} >Back To Recipes <IoRestaurantOutline /> </Link></Typography>
            }
            <CardMedia
                component="img"
                alt={recipe?.title}
                height={isSingleRecipePage ? '300' : '140'}
                image={recipe?.image}
            />
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {
                        isSingleRecipePage ? recipe?.title : <Link style={{ color: 'black' }} to={`/recipes/${recipe?.id}`}>{recipe?.title}</Link>
                    }
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                    {recipe?.description}
                </Typography>

                <Box display="flex" alignItems="center" mb={1}>
                    <FaUser size={16} style={{ marginRight: 8 }} />
                    <Typography variant="body2">{recipe?.author}</Typography>
                </Box>

                <Box display="flex" alignItems="center" mb={1}>
                    <FaClock size={16} style={{ marginRight: 8 }} />
                    <Typography variant="body2">Prep Time: {recipe?.prepTime}</Typography>
                </Box>

                <Box display="flex" alignItems="center" mb={1}>
                    <FaClock size={16} style={{ marginRight: 8 }} />
                    <Typography variant="body2">Cook Time: {recipe?.cookTime}</Typography>
                </Box>

                <Box display="flex" alignItems="center" mb={1}>
                    <FaUtensils size={16} style={{ marginRight: 8 }} />
                    <Typography variant="body2">Servings: {recipe?.servings}</Typography>
                </Box>

                <Typography variant="h6" gutterBottom>Ingredients</Typography>
                <Box component="ul" pl={2} mb={2}>
                    {recipe?.ingredients.map((ingredient, index) => (
                        <Box component="li" key={index} display="flex" alignItems="center">
                            <AiOutlineCheckCircle size={16} style={{ marginRight: 8 }} />
                            <Typography variant="body2">{ingredient}</Typography>
                        </Box>
                    ))}
                </Box>

                <Typography variant="h6" gutterBottom>Instructions</Typography>
                <Box component="ol" pl={2}>
                    {recipe?.instructions.map((instruction, index) => (
                        <Box component="li" key={index} mb={1}>
                            <Typography variant="body2">{instruction}</Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </SingleRecipeCard >
    );
};

export default SingleRecipe;
