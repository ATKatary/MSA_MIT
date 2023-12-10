import { get } from "../utils";
import { API, THEME } from "../../constants";

export function sendMessage(email, subject, message, setNotification, meta = {}) {
    const url = `${API.DOMAIN.CONTACT}/mail/contact`;

    const body = {
        name: "",
        email: email,
        subject: subject,
        message: message, 
        ...meta
    }
    get(url, body, res => {
        console.log(res)
        if (res.status === 200) {
            setNotification({value: "Message sent", notify: true})
        } else {
            setNotification({value: "Falied to send message", notify: true});
        }
    })
}