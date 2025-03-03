import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Service: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Service Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Welcome to the Service Page!</p>
      </IonContent>
    </IonPage>
  );
};

export default Service;
