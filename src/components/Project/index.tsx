import { IProject } from "interface/foruns.interfaces";
import * as S from "./styles";
const Project = ({ children }: IProject) => {
  return <S.Section>{children}</S.Section>;
};

export default Project;