import React, { useState } from "react";

interface PrescriptionModalProps {
  prescription: string;
  onSave: (newPrescription: string) => void;
}

const PrescriptionModal: React.FC<PrescriptionModalProps> = ({
  prescription,
  onSave,
}) => {
  const [newPrescription, setNewPrescription] = useState(prescription);

  const handleSave = () => {
    onSave(newPrescription);
  };

  return (
    <div>
      <h2>Reçete Düzenle</h2>
      <textarea
        value={newPrescription}
        onChange={(e) => setNewPrescription(e.target.value)}
      />
      <button onClick={handleSave}>Kaydet</button>
    </div>
  );
};

export default PrescriptionModal;
