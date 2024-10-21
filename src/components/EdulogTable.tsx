import { Patient } from "@/model/patient";
import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.th`
  border: 1px solid black;
  text-align: left;
  padding: 8px;
  background-color: #dddddd;
`;

const TableData = styled.td`
  border: 1px solid black;
  text-align: left;
  padding: 8px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd; /* 2., 4., 6., ... satırlar */
  }
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;

  width: 100%;
  min-width: 550px;
`;

const TableProcessWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`;

interface EdulogTableProps {
  patientData: Patient[];
  onDelete?: (patientItem: Patient) => void;
  onEdit?: (patientItem: Patient) => void;
}

const EdulogTable = ({ patientData, onDelete, onEdit }: EdulogTableProps) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Ad</TableHeader>
            <TableHeader>Soyad</TableHeader>
            <TableHeader>Reçete</TableHeader>
            <TableHeader style={{ textAlign: "center" }}>İşlem</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {patientData.map((patientItem: Patient, index: number) => {
            return (
              <TableRow key={index}>
                <TableData>{patientItem.name}</TableData>
                <TableData>{patientItem.surname}</TableData>
                <TableData>{patientItem.prescription}</TableData>
                <TableData>
                  <TableProcessWrapper>
                    <MdDelete
                      title="Sil"
                      onClick={() => onDelete && onDelete(patientItem)}
                      style={{
                        color: "red",
                        fontSize: "24px",
                        cursor: "pointer",
                      }}
                    />
                    <MdEdit
                      title="Güncelle"
                      onClick={() => onEdit && onEdit(patientItem)}
                      style={{
                        color: "blue",
                        fontSize: "24px",
                        cursor: "pointer",
                      }}
                    />
                  </TableProcessWrapper>
                </TableData>
              </TableRow>
            );
          })}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default EdulogTable;
