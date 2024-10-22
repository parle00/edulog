import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPatient, selectPatients } from "../store/patientSlice";
import { useRouter } from "next/router";
import withAuth from "@/hoc/withAuth";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import EdulogForm from "@/components/forms/EdulogForm";
import FormInput from "@/components/forms/FormInput";
import EdulogButton from "@/components/commons/EdulogButton";
import FormTextArea from "@/components/forms/FormTextArea";
import { delay } from "@/utils/helpers";
import Loading from "@/components/commons/Loading";

const NewPatientMain = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NewPatientBox = styled.div`
  flex: 1;
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewPatientContainer = styled.div`
  max-width: 400px;
  width: 100%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px;
`;

const NewPatientFormInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const NewPatientHeader = styled.h1`
  text-align: center;
`;

const NewPatientPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const patientsData = useSelector(selectPatients);
  const lastPatient = patientsData[patientsData.length - 1]?.id;
  const dispatch = useDispatch();
  const router = useRouter();
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    await delay();
    dispatch(
      addPatient({
        ...data,
        id: lastPatient ? lastPatient + 1 : 1,
      })
    );
    router.push("/patients");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NewPatientMain>
      <NewPatientBox>
        <NewPatientContainer>
          <NewPatientHeader>Yeni Hasta Ekle</NewPatientHeader>
          <EdulogForm onSubmit={handleSubmit(onSubmit)}>
            <NewPatientFormInputsWrapper>
              <FormInput
                required={true}
                control={control}
                type="text"
                name="name"
                label="Ad"
                placeholder="Ad"
                errorMessage="Ad giriniz."
              />
              <FormInput
                required={true}
                control={control}
                type="text"
                name="surname"
                label="Soyad"
                placeholder="Soyad"
                errorMessage="Soyad giriniz."
              />
              <FormTextArea
                control={control}
                name="prescription"
                label="Reçete"
                placeholder="Reçete"
              />
            </NewPatientFormInputsWrapper>
            <EdulogButton type="submit">Ekle</EdulogButton>
          </EdulogForm>
        </NewPatientContainer>
      </NewPatientBox>
    </NewPatientMain>
  );
};

export default withAuth(NewPatientPage);
