import { useState, useEffect } from "react";
import { Stack, Box , Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos , setVideos]= useState([]);
  // Mostafa
  const params = { part: "snippet", q: selectedCategory, maxResults: "50" };

  // useEffect(() => {
  //     fetchFromAPI(`search`, params)
  //     .then((data)=> setVideos(data.items)
  //     )
  // }, [params]);
  

  //Original
  // useEffect(()=> {
  //   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
  // },[selectedCategory])


  //ChatGPT Code
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
  //       // Process the fetched data or update state with the data here
  //       console.log(data);
  //     } catch (error) {
  //       // Handle any error that occurred during the fetch
  //       console.error(error);
  //     }
  //   };
  
  //   fetchData();
  // }, [selectedCategory]);
  

return(
  <Stack sx={{ flexDirection:{
    sx:"column" , md:"row"} 
  }}>
    <Box sx={{ height:{ sx: 'auto' , md: '92vh' } 
  , borderRight: '1px solid #3d3d3d ' , px:{ sx: 0 , md: 2} }}>

  <Sidebar
    selectedCategory={selectedCategory}
    setSelectedCategory={setSelectedCategory}
  
  />

  <Typography className="copyright"
  variant="body2" sx={{ mt:1.5 , color:'#fff' }}
  >
  Copyright 2023 React Project
  </Typography>
    </Box>

    <Box p={2} sx={{ msOverflowY:'auto', height:'90vh', flex:2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}
      sx={{ color:'#fff'}}
      >
        {selectedCategory} <span style={{ color:'#F31503' }}>
          videos
        </span>
      </Typography>

      <Videos videos={videos }   />
      </Box>  

  </Stack>
)
}

export default Feed