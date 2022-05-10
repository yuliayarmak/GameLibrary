import * as React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Rating } from "@mui/material";
import { Link } from "react-router-dom";

export const EditGameCard = ({ data }) => {
  return (
    <Container>
      <CardActionArea
        sx={{ display: "flex!important", flexDirection: "column!important" }}
      >
        <CardMedia
          component="img"
          height="140"
          image={data.img}
          alt="green iguana"
        />
        <CardContent sx={{backgroundColor: "black"}}>
          <Typography style={styles.text} gutterBottom variant="h6" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" style={styles.typeStyle}>
            {data.type}
          </Typography>
          <Typography variant="body2" style={styles.developerStyle}>
            {data.developer.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={styles.actionStyle}>
        <Link to={`../admin/${data.id}`}>
          <Button size="small" color="primary">
            EDIT
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
  text: {
    color: "white", 
    textTransform: "uppercase"
  },
  typeStyle: {
    color: "white", 
    textTransform: "uppercase", 
    marginTop: "7px", 
    fontSize: "12px"
  },
  developerStyle: {
    color: "white",
    textTransform: "uppercase",
    fontSize: "12px"
  },
  actionStyle: {
    display: "flex",
    justifyContent:"center", 
    backgroundColor: "black", 
    color: "white"
  }
}
