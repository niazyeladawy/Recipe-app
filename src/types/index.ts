export interface Recipe {
    id: string; 
    title: string;
    author: string;
    prepTime: string;
    cookTime: string;
    servings: number;
    ingredients: string[];
    instructions: string[];
    image: string;
    description: string;
}
export type Recipes = Recipe[];

export interface LeftRecipesProps {
    recipes: Recipe[];
    setRecipeId: (id: string) => void; 
    recipeId: string ; 
}

export interface SingleRecipeProps {
    recipe: Recipe | null; 
    isLoading: boolean;
    error: Error | null; 
    isSingleRecipePage: boolean;
}

export interface RightRecipeProps {
    recipeId: string | null;
}