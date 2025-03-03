import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

// pages/Tab1.tsx
import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonTitle,
  IonToolbar,
  } from "@ionic/react";
  import "./Tab1.css";
  import { homeOutline, reorderThreeOutline, apertureOutline } from "ionicons/icons";
  const Tab1: React.FC = () => {
  return (
  <IonApp>
  <IonMenu contentId="main-content">
  <IonHeader>
  <IonToolbar>
  <IonTitle>Menu</IonTitle>
  </IonToolbar>
  </IonHeader>
  <IonContent className="ion-padding">
  <IonList>
  <IonListHeader>
  <IonLabel>Navigate from here..</IonLabel>
  </IonListHeader>
  
