import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { GameCard } from "../components/GameCard";
import { GamePage } from "../components/GamePage";
import { DeveloperCard } from "../components/DeveloperCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { EditGameCard } from "../components/EditGameCard";
import { DeveloperPage } from "../components/DeveloperPage";

export const Admin = () => {
  const user = useSelector((state) => state?.auth?.user?.role);
  const [games, setGames] = useState(false);

  useEffect(() => {
    axios.get(`/records/all-games`).then((res) => {
      console.log(res.data);
      setGames(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        {user == 1 ? (
          <>
            {games ? (
              <>
                {games.map((elem) => {
                  return <EditGameCard data={elem} />;
                })}
              </>
            ) : (
              "LOADING"
            )}
          </>
        ) : (
          "YOU DO NOT HAVE ACCESS TO THIS PAGE"
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: black;
  color: white;
`;
