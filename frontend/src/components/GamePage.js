import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Comments } from "./Comments";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button, CardActionArea, CardActions, Rating } from "@mui/material";
import { useSelector } from "react-redux";
import { ourToken, setUser } from "../app/slice/auth";

export const GamePage = () => {
  const { id } = useParams();
  const token = useSelector(ourToken);
  const user = useSelector((state) => state?.auth?.user?.id);
  const [record, setRecord] = useState(false);
  const [rating, setRating] = React.useState(0);

  useEffect(() => {
    axios.get(`/records/game/${id}`).then((res) => {
      console.log(res.data);
      setRecord(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`/records/rating/${id}/${user}`).then((res) => {
      console.log(res.data);
      setRating(res.data);
    });
  }, []);

  const [hover, setHover] = React.useState(-1);

  const updateRating = (newRating) => {
    const requestData = {
      value: newRating,
      userId: user,
      gameId: id,
    };
    axios.post(`/records/rating/`, { requestData }).then((res) => {
      const persons = res.data;
    });

    setRating(newRating);
  };

  return (
    <Container sx = {{backgroundColor: "black"}}>
      {record ? (
        <>
          <CardActionArea>
            <CardMedia component="img" height="600" image={record.img} />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{color: "white",  textTransform: "uppercase" }}>
              {record.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{color: "white",  textTransform: "uppercase" }}>
              {record.year}
            </Typography>
            <Rating
              // name="no-value"
              value={rating}
              disabled={token ? false : true}
              name="unique-rating"
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              onChange={(event, newValue) => {
                console.log(newValue);
                updateRating(newValue);
              }}
            />
            <Typography variant="body2" color="text.secondary" sx={{color: "white",  textTransform: "uppercase" }}>
              {record.type}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color: "white",  textTransform: "uppercase" }}>
              {record.developer.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{color: "white", textTransform: "uppercase" }}>
              {record.platforms}
            </Typography>
            <hr />
            <CommentContainer sx={{backgroundColor: "black", marginTop: "15px"}}>
              <Typography
                sx={{ width: "45%", color: "white" }}
                variant="body1"
              >
                {record.aboutGame}
              </Typography>
              <Comments id={record.id} />
            </CommentContainer>
          </CardContent>
        </>
      ) : (
        "Loading"
      )}
    </Container>
  );
};

const Container = styled(Card)`
  width: 100%;
  height: 100%;
  border-radius: 0;
  background-color: black;
`;

const CommentContainer = styled(Card)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 0;
`;
