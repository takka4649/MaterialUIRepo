import { Box } from '@mui/material';
import NewsTabs from './NewsTabs';
import NewsItemList from './NewsItemList';

export default function Hero() {
  return (
    <Box
      sx={{
        height: 'calc(100% -493px)',
        backgroundColor: 'gray',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 10px 0 10px',
      }}
    >
      <NewsTabs />
      <NewsItemList />
    </Box>
  );
}
