import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import FormInput from "@/components/forms/FormInput";
import EdulogButton from "@/components/commons/EdulogButton";

import LokginStyle from "@/styles/Login.module.css";

const LoginPage = () => {
  const { login } = useAuth();
  const router = useRouter();
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    login(data);
    router.push("/patients");
  };

  return (
    <div className={LokginStyle.main}>
      <div className={LokginStyle.box}>
        <div className={LokginStyle.container}>
          <h1 className={LokginStyle.h1}>Giriş Yap</h1>
          <form className={LokginStyle.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={LokginStyle.formInputsWrapper}>
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
            </div>
            <EdulogButton type="submit">Giriş</EdulogButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
