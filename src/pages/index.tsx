import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import FormInput from "@/components/forms/FormInput";
import EdulogButton from "@/components/commons/EdulogButton";
import styled from "styled-components";
import EdulogForm from "@/components/forms/EdulogForm";
import { useState, useEffect } from "react";
import Loading from "@/components/commons/Loading";
import { delay } from "@/utils/helpers";

const LoginMain = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  flex: 1;
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  max-width: 400px;
  width: 100%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px;
`;

const LoginFormInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const LoginHeader = styled.h1`
  text-align: center;
`;

const LoginPage = () => {
  const { user, login } = useAuth();
  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(true);
      router.push("/patients");
    } else {
      setLoading(false);
    }
  }, [user, router]);

  const onSubmit = async (data: any) => {
    setLoading(true);
    await delay();
    login(data);
    router.push("/patients");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <LoginMain>
      <LoginBox>
        <LoginContainer>
          <LoginHeader>Giriş Yap</LoginHeader>
          <EdulogForm onSubmit={handleSubmit(onSubmit)}>
            <LoginFormInputsWrapper>
              <FormInput
                required={true}
                control={control}
                type="text"
                name="username"
                label="Kullanıcı Adı"
                placeholder="Kullanıcı Adı"
                errorMessage="Kullanıcı giriniz."
              />
              <FormInput
                required={true}
                control={control}
                type="password"
                name="password"
                label="Şifre"
                placeholder="Şifre"
                errorMessage="Şifre giriniz."
              />
            </LoginFormInputsWrapper>
            <EdulogButton type="submit">Giriş</EdulogButton>
          </EdulogForm>
        </LoginContainer>
      </LoginBox>
    </LoginMain>
  );
};

export default LoginPage;
