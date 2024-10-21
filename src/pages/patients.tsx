import PatientsPageStyle from "@/styles/PatientsPage.module.css";
import { useSelector } from "react-redux";
import { selectPatients } from "../store/patientSlice";
import Link from "next/link";
import withAuth from "@/hoc/withAuth";
import EdulogContainer from "@/components/commons/EdulogContainer";

const PatientsPage = () => {
  const patients = useSelector(selectPatients);

  return (
    <EdulogContainer>
      <div>
        <h1>Hasta Listesi</h1>
        <ul className={PatientsPageStyle.ul}>
          {patients.map((patient) => (
            <li key={patient.id}>
              {patient.name} - {patient.prescription}
              <Link href={`/patients/${patient.id}`}>Detaylar</Link>
            </li>
          ))}
        </ul>
        <Link href="/new-patient">Yeni Hasta Ekle</Link>
      </div>
    </EdulogContainer>
  );
};

export default withAuth(PatientsPage);
