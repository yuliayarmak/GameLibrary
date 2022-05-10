import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Comments } from "./Comments";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button, CardActionArea, CardActions, Rating } from "@mui/material";

export const DeveloperPage = () => {
  const { id } = useParams();

  const [record, setRecord] = useState(false);
  const [hover, setHover] = React.useState(-1);

  useEffect(() => {
    axios.get(`/records/developer/${id}`).then((res) => {
      console.log(res.data);
      setRecord(res.data);
    });
  }, []);

  return (
    <Container sx = {{backgroundColor: "black"}}>
      {record ? (
        <>
          <CardActionArea>
            <CardMedia
              component="img"
              height="600"
              image={record.img} 
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{color: "white",  textTransform: "uppercase" }}>
             {record.name}
            </Typography>
            <hr />
            <CommentContainer sx={{backgroundColor: "black", marginTop: "15px"}}>
              <Typography
                sx={{ width: "100%", color: "white" }}
                variant="body1"
              >
                {record.about}
              </Typography>
            </CommentContainer>
          </CardContent>
        </>
      ) : (
        "LOADING"
      )}
    </Container>
  );
};

const Container = styled(Card)`
  width: 100%;
  height: 100%;
  border-radius: 0;
`;

const CommentContainer = styled(Card)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 0;
`;
