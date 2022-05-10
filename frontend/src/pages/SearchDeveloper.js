import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { DeveloperCard } from "../components/DeveloperCard";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";

export const SearchDeveloper = () => {
  const [games, setGames] = useState(false);
  const [filtredData, setFiltredData] = useState(false);

  useEffect(() => {
    axios.get(`/records/all-developers`).then((res) => {
      console.log(res.data);
      setGames(res.data);
      setFiltredData(res.data);
    });
  }, []);

  const search = (items, rule) => {
    if (rule.length === 0) {
      setFiltredData(games);
    }
    setFiltredData(
      items.filter((elem) => {
        return elem.name.indexOf(rule) > -1;
      })
    );
  };

  return (
    <>
      <Header />
      <Card style={styles.card}>
          <CardMedia component="img" height="200px" marginTop = "30px" image = "../img/main.jpg"/>
          <div style={styles.overlay}>DEVELOPERS</div>
      </Card>
      <TextField
        sx={{ width: "60%", marginTop: "20px", marginBottom: "20px", borderBottomWidth: "1px", 
        borderBottomStyle: "solid", 
        borderBottomColor: "white", 
         input: {
          color: "white"
        }}}
        id="filled-basic"
        variant="filled"
        InputProps={{
          disableUnderline: true, 
        }}
        onChange={(e) => search(games, e.target.value)}
      />
      <Container style={styles.devs}>
        {filtredData ? (
          <>
            {filtredData.map((elem) => {
              return <DeveloperCard data={elem} />;
            })}
          </>
        ) : (
          "LOADING"
        )}
      </Container>
    </>
  );
};

const styles = {
  media: {
     height: 0,
     paddingTop: '56.25%' 
  },
  card: {
     position: 'relative',
     borderRadius: 0
  },
  overlay: {
     position: 'absolute',
     top: '60px',
     left: '500px',
     color: 'white',
     fontSize: '40px',
     textTransform: 'uppercase'
  },
  devs: {
    marginTop: "40px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    color: "white",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "40px",
    maxWidth: "100%"
  }
}
