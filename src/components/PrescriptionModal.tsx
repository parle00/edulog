import { Patient } from "@/model/patient";
import React, { Dispatch, SetStateAction } from "react";
import styled, { keyframes } from "styled-components";
import { IoCloseCircle } from "react-icons/io5";
import { useForm } from "react-hook-form";
import FormTextArea from "./forms/FormTextArea";
import EdulogButton from "./commons/EdulogButton";
import EdulogForm from "./forms/EdulogForm";
import FormInput from "./forms/FormInput";

interface PrescriptionModalProps {
  patientsItem: Patient | null;
  onSave: (editedPatients: Patient) => void;
  onClose: () => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title?: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-30px);
  }
`;

const ModalOverlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open === true ? "auto" : "none")};
  transition: opacity 0.3s ease;
`;

const ModalWrapper = styled.div<{ open: boolean }>`
  background: transparent;
  padding: 20px;
  max-width: 450px;
  width: 100%;
  // border-radius: 8px;
  // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: ${({ open }) => (open === true ? fadeIn : fadeOut)} 0.3s forwards;
`;

const ModalContent = styled.div<{ open: boolean }>`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: ${({ open }) => (open === true ? fadeIn : fadeOut)} 0.3s forwards;
`;

const ModalTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;

const UpdatePatientFormInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const PrescriptionModal = ({
  patientsItem,
  onSave,
  onClose,
  setOpen,
  open,
  title,
}: PrescriptionModalProps) => {
  const { control, handleSubmit } = useForm();
  if (!open) return null;

  const onSubmit = (data: any) => {
    const newData = { ...patientsItem, ...data } as Patient;
    onSave(newData);
  };

  return (
    <ModalOverlay open={open}>
      <ModalWrapper open={open}>
        <ModalContent open={open} onClick={(e) => e.stopPropagation()}>
          <ModalTitle>
            <div>{title}</div>
            <IoCloseCircle
              onClick={() => setOpen(false)}
              style={{ fontSize: "24px", cursor: "pointer" }}
            />
          </ModalTitle>
          <EdulogForm onSubmit={handleSubmit(onSubmit)}>
            <UpdatePatientFormInputsWrapper>
              <FormInput
                required={true}
                control={control}
                type="text"
                name="name"
                defaultValue={patientsItem?.name}
                label="Ad"
                placeholder="Ad"
                errorMessage="Ad giriniz."
              />
              <FormInput
                required={true}
                control={control}
                defaultValue={patientsItem?.surname}
                type="text"
                name="surname"
                label="Soyad"
                placeholder="Soyad"
                errorMessage="Soyad giriniz."
              />
              <FormTextArea
                required={true}
                control={control}
                name="prescription"
                defaultValue={patientsItem?.prescription}
                label="Reçete"
                placeholder="Reçete"
                errorMessage="Reçete giriniz."
              />
            </UpdatePatientFormInputsWrapper>
            <EdulogButton type="submit">Ekle</EdulogButton>
          </EdulogForm>
        </ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default PrescriptionModal;
