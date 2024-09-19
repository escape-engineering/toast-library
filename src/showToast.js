import EventBus from "./EventBus";

export const showToast = (message, type = "normal") => {
    EventBus.publish("SHOW_TOAST", { message, type });
};
