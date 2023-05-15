import { Box, Card, CardContent, Typography , CardActions,Button,CardMedia} from "@mui/material";
import React from "react";

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
		<CardMedia
		component="img"
		height='140'
		image="https://source.unsplash.com/random"
		alt="unsplash image"
		/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {" "}
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            nostrum eius quas assumenda provident dolore tenetur, quasi error
            harum? Architecto ex in eius nesciunt consequatur illum et explicabo
            tempora eaque!
          </Typography>
        </CardContent>
		<CardActions>
			<Button size="small">Share</Button>
			<Button size="small">Learn More</Button>
		</CardActions>
      </Card>
    </Box>
  );
};
