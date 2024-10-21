import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPatient } from "../store/patientSlice";
import { useRouter } from "next/router";
import withAuth from "@/hoc/withAuth";

const NewPatientPage = () => {
  const [name, setName] = useState("");
  const [prescription, setPrescription] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addPatient({ id: Date.now().toString(), name, prescription }));
    router.push("/patients");
  };

  return (
    <div>
      <h1>Yeni Hasta Ekle</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Hasta Adı"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Reçete"
          value={prescription}
          onChange={(e) => setPrescription(e.target.value)}
        />
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
};

export default withAuth(NewPatientPage);
