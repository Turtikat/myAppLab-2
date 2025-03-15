import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Service: React.FC = () => {
  const handleHelpClick = () => {
    alert('Apua on tulossa! 🚀');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tarvitsetko apua?</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Olemme täällä auttamassa!</h2>
        <p>Jos tarvitset apua, paina alla olevaa nappia:</p>
        <IonButton expand="block" onClick={handleHelpClick} color="primary">
          Pyydä apua
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Service;