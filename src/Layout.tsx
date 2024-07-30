
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';

function Layout() {
    return (
        <>

            <ScrollToTop />

            <div>
                <main>
                    <Box py={4}>

                        <Outlet />
                    </Box>
                </main>

            </div>
        </>
    );
}

export default Layout;