import * as React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Rating } from "@mui/material";
import { Link } from "react-router-dom";

export const DeveloperCard = ({ data }) => {
  return (
    <Container>
      <CardActionArea sx = {{display: "block"}}>
        <CardMedia
          component="img"
          height="140"
          image={data.img}
          alt="green iguana"
        />
        <CardContent sx={{backgroundColor: "black"}}>
          <Typography variant="body2" color="text.secondary" style={styles.typeStyle}>
            {data.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={styles.actionStyle}>
        <Link to={`../developer/${data.id}`}>
          <Button size="small" color="primary">
           more information
          </Button>
        </Link>
      </CardActions>
    </Container>
  );
};

const Container = styled(Card)`
  margin: 2%;
  width: 345px;
  border: 2px solid;
`;

const styles = {
  typeStyle: {
    color: "white", 
    textTransform: "uppercase", 
    marginTop: "13px", 
    fontSize: "16px"
  },
  actionStyle: {
    display: "flex",
    justifyContent:"center", 
    backgroundColor: "black", 
    color: "white"
  }
}