import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { GameCard } from "../components/GameCard";
import { GamePage } from "../components/GamePage";
import { DeveloperCard } from "../components/DeveloperCard";
import axios from "axios";

export const Developers = () => {
  const [developers, setDevelopers] = useState(false);

  useEffect(() => {
    axios.get(`/records/all-developers`).then((res) => {
      console.log(res.data);
      setDevelopers(res.data);
    });
  }, []);
  return (
    <>
      <Header />
      <Container>
        {developers ? (
          <>
            {developers.map((elem) => {
              return <DeveloperCard data={elem} />;
            })}
          </>
        ) : (
          "Загружаем данные с сервера"
        )}
        {/* <GamePage /> */}
        {/* <DeveloperPage /> */}
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
  background-color: #e1e2e1;
`;
