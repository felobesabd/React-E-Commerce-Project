import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// To make any Notification to any Components

const notify = (msg, type) => {
  if (type === "warn") {
    toast.warn(msg);
  } else if (type === "success") {
    toast.success(msg);
  } else if (type === "error") {
    toast.error(msg);
  }
};

export default notify;
