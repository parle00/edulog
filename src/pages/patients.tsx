import { useSelector } from "react-redux";
import { selectPatients } from "../store/patientSlice";
import Link from "next/link";
import withAuth from "@/hoc/withAuth";

const PatientsPage = () => {
  const patients = useSelector(selectPatients);

  return (
    <div>
      <h1>Hasta Listesi</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.prescription}
            <Link href={`/patients/${patient.id}`}>Detaylar</Link>
          </li>
        ))}
      </ul>
      <Link href="/new-patient">Yeni Hasta Ekle</Link>
    </div>
  );
};

export default withAuth(PatientsPage);
