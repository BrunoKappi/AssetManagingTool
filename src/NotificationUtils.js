import { Store } from 'react-notifications-component';


const DefaultNotification = {
  title: "",
  message: "",
  type: "success",
  insert: "bottom",
  container: "bottom-left",
  animationIn: ["animate__animated", "animate__slideInRight"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: true
  }

}



export const NotificationSucesso = (title, message) => {
  Store.addNotification({ ...DefaultNotification, title: title, message: message, type: "success" });
}

export const NotificationErro = (title, message) => {
  Store.addNotification({ ...DefaultNotification, title: title, message: message, type: "danger" });
}

export const NotificationAlerta = (title, message) => {
  Store.addNotification({ ...DefaultNotification, title: title, message: message, type: "warning" });
}

export const NotificationInfo = (title, message) => {
  Store.addNotification({ ...DefaultNotification, title: title, message: message, type: "info" });
}

export const Notification = (title, message) => {
  Store.addNotification({ ...DefaultNotification, title: title, message: message, type: "default" });
}