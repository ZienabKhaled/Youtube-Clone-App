import { Stack, Box } from '@mui/material';
import {VideoCard} from './';
import {ChannelCard} from './';

const Videos = ({ videos }) => {
  return (
    <Stack 
    direction="row" flexWrap="wrap"
    justifyContent="start" gap={2}
    >

      {videos.map((item, idx) =>(
        <Box sx={{ p: 2 }} key={idx}>
          {item.id.videoId && <VideoCard video={item}/> }
          {item.id.channelId && <ChannelCard ChannelDetail={item}/> }

        </Box>
      ) )}

    </Stack>
  )
}

export default Videos