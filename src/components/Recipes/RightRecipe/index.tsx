import { useQuery } from 'react-query';
import { fetchRecipeById } from '../../../api/recipesApi';
import { Box } from '@mui/material';
import SingleRecipe from '../SingleRecipe';

const RightRecipe = ({ recipeId }: { recipeId: string  }) => {
    const id = recipeId;

    const { data: recipe, isLoading, error } = useQuery(
        ['recipe', id], 
        () => fetchRecipeById(id), 
        {
            enabled: !!id, 
        }
    );

    const typedError = error as Error | null;

    


    return (
        <>

            <Box sx={{ position: 'sticky', top: '3vh', height: '94vh' }} >
                <SingleRecipe isLoading={isLoading}  error={typedError} recipe={recipe} isSingleRecipePage={false} />
            </Box>

        </>
    );
}

export default RightRecipe