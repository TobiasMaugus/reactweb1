import { useCallback, useEffect, useState } from "react";
import { FcFeedback, FcLock, FcRotateToPortrait } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Header, Footer } from "components";
import * as S from "./styles";
import Button from "styles/Button";
import { apiUser } from "services/data";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const handleRegister = useCallback(
    async (data) => {
      try {
        await apiUser.register(data);
        toast.success("Cadastro realizado com sucesso!");
        history.push("/login");
      } catch (error) {
        const err = error as AxiosError;
        const msg = err.response?.data.errors.map((i: any) => i.message);
        toast.error(`Falha ao cadastrar! ${msg.join(" ")}`);
      }
    },
    [history]
  );


  return (
    <>
          <Header />
          <S.Main>
            <form method="POST" onSubmit={handleSubmit(handleRegister)}>
              <span>Registre-se</span>
              <div>
                <FcFeedback />
                <input
                  type="email"
                  placeholder="e-mail"
                  required
                  {...register("email")}
                />
              </div>
              <div>
                <FcLock />
                <input
                  type="password"
                  placeholder="password"
                  required
                  {...register("password")}
                />
              </div>
              <Button type="submit">
                Enviar <FcRotateToPortrait />
              </Button>
            </form>
          </S.Main>
          <Footer />
        </>
      )}

export default Register;