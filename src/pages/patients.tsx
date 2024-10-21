import PatientsPageStyle from "@/styles/PatientsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePatient,
  selectPatients,
  updatePatient,
} from "../store/patientSlice";
import Link from "next/link";
import withAuth from "@/hoc/withAuth";
import EdulogContainer from "@/components/commons/EdulogContainer";
import EdulogTable from "@/components/EdulogTable";
import EdulogButton from "@/components/commons/EdulogButton";
import styled from "styled-components";
import { SetStateAction, useState } from "react";
import Loading from "@/components/commons/Loading";
import { delay } from "@/utils/helpers";
import PrescriptionModal from "@/components/PrescriptionModal";
import { Patient } from "@/model/patient";
import { useForm } from "react-hook-form";
import EdulogForm from "@/components/forms/EdulogForm";
import FormInput from "@/components/forms/FormInput";
import FormTextArea from "@/components/forms/FormTextArea";

const PatientsPageWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  margin-top: 15px;
`;

const PatientsInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 550px;
  width: 100%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 10px;
  height: 50px;
  margin-bottom: 100px;
`;

const PatientsButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const PatientsPage = () => {
  const patientsData = useSelector(selectPatients);
  const dispatch = useDispatch();
  const [patientsItem, setPatientsItem] = useState<Patient | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <PatientsPageWrapper>
      <PrescriptionModal
        title="Hasta Güncelle"
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        patientsItem={patientsItem}
        onSave={async (editedPatients) => {
          setIsLoading(true);
          await delay();
          dispatch(updatePatient(editedPatients));
          setIsEditOpen(false);
          setIsLoading(false);
        }}
        setOpen={setIsEditOpen}
      />
      <EdulogContainer>
        <PatientsButtonContainer>
          <EdulogButton style={{ width: "max-content", padding: "0" }}>
            <Link
              onClick={async () => {
                setIsLoading(true);
              }}
              href="/new-patient"
              style={{ padding: "20px" }}
            >
              Yeni Hasta Ekle
            </Link>
          </EdulogButton>
        </PatientsButtonContainer>
      </EdulogContainer>
      <EdulogContainer className={PatientsPageStyle.tableContainer}>
        {Boolean(patientsData.length) ? (
          <EdulogTable
            patientData={patientsData}
            onEdit={async (patientItem) => {
              setPatientsItem(patientItem);
              setIsEditOpen(true);
            }}
            onDelete={async (patientItem) => {
              setIsLoading(true);
              await delay();
              dispatch(deletePatient(patientItem));
              setIsLoading(false);
            }}
          />
        ) : (
          <PatientsInfo>
            <h3>KAYIT YOK</h3>
          </PatientsInfo>
        )}
      </EdulogContainer>
    </PatientsPageWrapper>
  );
};

export default withAuth(PatientsPage);
