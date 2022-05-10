import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { GameCard } from "../components/GameCard";
import { GamePage } from "../components/GamePage";
import { DeveloperCard } from "../components/DeveloperCard";
import axios from "axios";
import { DeveloperPage } from "../components/DeveloperPage";

export const Main = () => {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
};
