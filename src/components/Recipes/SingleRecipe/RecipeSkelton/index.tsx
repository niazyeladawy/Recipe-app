import { CardContent, Skeleton } from '@mui/material'

const RecipeSkelton = ({isSingleRecipePage} : {isSingleRecipePage: boolean}) => {
    {isSingleRecipePage ? '300' : '140'}
    return (
        <>
            <Skeleton variant="rectangular" sx={{ height: isSingleRecipePage ? '300px' : '140px', width: '100%' }} />
            <CardContent>
                <Skeleton variant="text" sx={{ fontSize: '1.4rem', marginBottom: '10px' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', marginBottom: '15px' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem ', marginBottom: '10px' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem ', marginBottom: '10px' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem ', marginBottom: '10px' }} />
                <Skeleton variant="text" sx={{ fontSize: '1.3rem', marginBottom: '10px' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', marginBottom: '10px' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', marginBottom: '20px' }} />
                <Skeleton variant="text" sx={{ fontSize: '1.3rem', marginBottom: '10px' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', marginBottom: '10px' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', marginBottom: '20px' }} />

            </CardContent>
        </>
    )
}

export default RecipeSkelton