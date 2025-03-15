import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonSpinner, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { useState } from 'react';

const ContactPage: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!subject || !message || !email) {
      setToastMessage('Täytä kaikki kentät!');
      setShowToast(true);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, message, email })
      });

      if (response.ok) {
        setToastMessage('Viesti lähetetty onnistuneesti!');
        setSubject('');
        setMessage('');
        setEmail('');
      } else {
        setToastMessage('Viestiä ei voitu lähettää. Yritä uudelleen!');
      }
    } catch (error) {
      setToastMessage('Virhe lähetyksessä! Tarkista yhteys.');
    } finally {
      setLoading(false);
      setShowToast(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MyLabbApp3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Etusivu</h2>
        <p>Klikkaa vasemmalla olevaa ikonia avataksesi valikon.</p>
        <IonItem>
          <IonLabel position="stacked">Aihe</IonLabel>
          <IonInput value={subject} onIonChange={e => setSubject(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Viesti</IonLabel>
          <IonInput value={message} onIonChange={e => setMessage(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Sähköposti</IonLabel>
          <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
        </IonItem>
        <IonButton expand="block" onClick={handleSubmit} disabled={loading}>
          {loading ? <IonSpinner name="dots" /> : 'Lähetä'}
        </IonButton>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default ContactPage;
