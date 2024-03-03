import React from "react";
import Card from "antd/es/card";
import { TeamInfo } from "../@types";
import styled from "styled-components";
const { Meta } = Card;

const StyledCard = styled(Card)`
  width: 300px;
  height: 300px;
`;

export interface TeamProps {
  team: TeamInfo;
}

const Team = ({ team }: TeamProps) => {
  return (
    <StyledCard
      hoverable
      cover={<img alt={team.teamName} src={team.teamImgUrl} />}
    >
      <Meta
        title={<h4>{team.teamName}</h4>}
        description={`${team.teamName} card`}
      />
    </StyledCard>
  );
};

export default Team;
