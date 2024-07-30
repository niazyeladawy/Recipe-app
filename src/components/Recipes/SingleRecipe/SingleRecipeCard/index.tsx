import { Card } from "@mui/material"

const SingleRecipeCard = ({ children, isSingleRecipePage }: { children: React.ReactNode, isSingleRecipePage: boolean }) => {

    const conditionalStyles = {
        border: isSingleRecipePage ? '' : '1.5px solid grey',
        padding: isSingleRecipePage ? '0' : '20px',
        overflowY: isSingleRecipePage ? '' : 'auto',
    };

    return (
        <Card sx={{ boxShadow: 'none', margin: 'auto', height: '100%', ...conditionalStyles }}>
            {children}
        </Card>
    )
}

export default SingleRecipeCard