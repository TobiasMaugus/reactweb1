import { useCallback, useEffect, useState } from "react";
import { Header, Footer} from "components";
import * as S from "./styles";
import { apiForuns } from "services/data";
import { IForunsData } from "interface/foruns.interfaces";
import { Loading } from "components";
import Button from "styles/Button";
import { FcAddDatabase } from "react-icons/fc";
import { BsPencilSquare, BsTrash2 } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";
import { HeaderAdm } from "components/HeaderAdm/styles";

const AdmForuns = () => {
  const [projects, setProjects] = useState<IForunsData[]>();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const fetchData = useCallback(async () => {
    const response = await apiForuns.index();
    setProjects(response.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = useCallback(
    async (id: number) => {
      confirmAlert({
        title: "Atenção",
        message: "Tem certeza que deseja apagar o item selecionado?",
        buttons: [
          {
            label: "SIM",
            onClick: async () => {
              setIsLoading(true);
              await apiForuns.destroy(id);
              toast.success("Fórum removido!");
              fetchData();
            },
          },
          {
            label: "Não",
            onClick: () => console.log("não"),
          },
        ],
      });
    },
    [fetchData]
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <HeaderAdm />
          <S.Main>
            <div>
              <Button
                type="button"
                onClick={() => history.push("/adm/foruns/0")}
              >
                <FcAddDatabase />
              </Button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>E-mail</th>
                  <th>Projeto</th>
                  <th>Editar</th>
                  <th>Remover</th>
                </tr>
              </thead>
              <tbody>
                {projects &&
                  projects.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.nome_forun}</td>
                      <td>
                        <Button
                          type="button"
                          onClick={() =>
                            history.push(`/adm/foruns/${item.id}`)
                          }
                        >
                          <BsPencilSquare />
                        </Button>
                      </td>
                      <td>
                        <Button
                          type="button"
                          onClick={() => item.id && handleDelete(item.id)}
                        >
                          <BsTrash2 />
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </S.Main>
          <Footer />
        </>
      )}
    </>
  );
};

export default AdmForuns;