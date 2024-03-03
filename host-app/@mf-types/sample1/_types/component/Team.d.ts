import { TeamInfo } from "../@types";
export interface TeamProps {
    team: TeamInfo;
}
declare const Team: ({ team }: TeamProps) => import("react/jsx-runtime").JSX.Element;
export default Team;
