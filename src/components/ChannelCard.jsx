import {Typography, CardContent , CardMedia , Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box
    sx={{ boxShadow:'none',
    borderRadius:'20px',
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:{ xs: '365px' , md:'320px' },
    height:'326px',
    margin:'auto'
        }}
    >
        <Link  to={ `/channel/${channelDetail?.id?.channelId}`} >
            <CardContent 
            sx={{ display:'flex', flexDirection:'column', justifyContent:'center',
            textAlign:'center', color:'#fff'
        }}
            >
                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
                    style={{width:'180px', height:'180px', borderRadius:'50%', mb:2
                    , border:'1px solid #e3e3e3'}} 
                    />
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}
                        <CheckCircle 
                        sx={{ fontSize:14, color:'gray', ml:'5px' }}
                        />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {
                                parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()
                            } Subscriber
                        </Typography>
                    ) }
            </CardContent>
        </Link>
    
    </Box>
  )
}

export default ChannelCard