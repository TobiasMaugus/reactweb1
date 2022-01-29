import { useCallback, useEffect, useState } from "react";
import { Header, Footer} from "components";
import * as S from "./styles";
import { Loading } from "components";
import Button from "styles/Button";
import { FcDatabase, FcUndo } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import { apiForuns } from "services/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IForunsData } from "interface/foruns.interfaces";

const ProjectStore = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<IForunsData>();
  const { handleSubmit, register } = useForm();
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const handleStore = useCallback(
    async (data) => {
      try {
        setIsLoading(true);
        if (Number(id) > 0) {
          await apiForuns.update(Number(id), data);
          toast.warning("Projeto atualizado com sucesso!");
        } else {
          await apiForuns.store(data);
          toast.success("Cadastro de projeto realizado!");
        }
        history.push("/adm");
      } catch (error) {
        console.log(error);
        const err = error as AxiosError;
        const msg = err.response?.data.errors.map((i: any) => i.message);
        toast.error(`Falha ao cadastrar o projeto! ${msg.join(" ")}`);
      } finally {
        setIsLoading(false);
      }
    },
    [history, id]
  );

  const handleChange = useCallback(
    (e) => {
      setProjects({...projects, [e.target.id]: e.target.nome_forum});
    },
    [projects]
  );

  useEffect(() => {
    if (Number(id) > 0) {
      const fetchData = async (id: number) => {
        try {
          const response = await apiForuns.show(id);
          setProjects(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData(Number(id));
    }
    setIsLoading(false);
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <S.Main>
            <form method="POST" onSubmit={handleSubmit(handleStore)}>
              <Link to="/adm">
                <FcUndo /> Voltar
              </Link>
              <div>
                <label htmlFor="proj">Projeto: </label>
                <textarea
                  id="proj"
                  placeholder="Descreva o seu projeto"
                  required
                  {...register("projeto")}
                  value={projects?.nome_forun}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit">
                Enviar <FcDatabase />
              </Button>
            </form>
          </S.Main>
          <Footer />
        </>
      )}
    </>
  );
};

export default ProjectStore;