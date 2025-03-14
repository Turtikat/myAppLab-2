import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

const Tab3: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    alert(`Aihe: ${subject}\nViesti: ${message}\nSähköposti: ${email}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Yhteydenotto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Aihe</IonLabel>
          <IonInput value={subject} onIonChange={(e) => setSubject(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Viesti</IonLabel>
          <IonTextarea value={message} onIonChange={(e) => setMessage(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Sähköpostiosoite</IonLabel>
          <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
        </IonItem>
        <IonButton expand="block" onClick={handleSubmit} color="primary">
          Lähetä viesti
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

