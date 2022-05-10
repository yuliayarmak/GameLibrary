import React, { useEffect, useState, useRef } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import styled from "styled-components";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import axios from "axios";
import { ourToken, setUser } from "../app/slice/auth";

export const Comments = ({ id }) => {
  const token = useSelector(ourToken);
  const user = useSelector((state) => state?.auth?.user?.id);
  const [record, setRecord] = useState(false);
  const [newComment, setNewComment] = useState("");
  const formRef = useRef();

  useEffect(() => {
    axios.get(`/records/comments/${id}`).then((res) => {
      console.log(res.data);
      setRecord(res.data);
    });
  }, []);

  const addNewComment = () => {
    if (record) {
      const requestData = {
        value: newComment,
        userId: user,
        gameId: id,
      };
      axios.post(`/records/comments/`, { requestData }).then((res) => {
        console.log(res.data);
        setRecord(res.data);
        setNewComment("");
      });
    }
  };

  return (
    <CommentContainer sx = {{backgroundColor: "black"}}>
      {record ? (
        <>
          <FormReview  sx = {{backgroundColor: "black"}}>
            <StyledInput
              id="outlined-basic"
              variant="standard"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              disabled={token ? false : true}
              ref={formRef}
              sx={{ 
               input: {
                borderBottomWidth: "1px", 
                borderBottomStyle: "solid", 
                borderBottomColor: "white", 
                color: "white"
              }}}
              InputProps={{
                disableUnderline: true, 
              }}
            />
            <StyledBtn
              onClick={addNewComment}
              disabled={token ? false : true}
              variant="contained"
            >
              Send
            </StyledBtn>
          </FormReview>
          <List
            sx={{
              width: "100%",
              maxWidth: "600px",
              bgcolor: "black",
              color: "white"
            }}
          >
            {record
              .map((elem) => {
                return (
                  <>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt={elem.user.name} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${elem.user.name} ${elem.user.surname}`}
                        secondary={
                          <React.Fragment>{elem.message}</React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                );
              })
              .reverse()}
          </List>
        </>
      ) : (
        "LOADING"
      )}
    </CommentContainer>
  );
};

const StyledBtn = styled(Button)`
  width: 40%;
  height: 100%;
  background-color: gray;
  color: white;
`;

const StyledInput = styled(TextField)`
  width: 55%;
  height: 100%;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: white;
`;

const FormReview = styled.form`
  display: flex;
  width: 600px;
  justify-content: space-between;
`;

const CommentContainer = styled.form`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
