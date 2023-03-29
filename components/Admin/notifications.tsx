import React from "react";
import styles from "./styles";

const Notifications = () => {
    // Message and message id
    const messages = [
        "2021ucp1013@mnit.ac.in registered for the workshop [21:06 , 09/02/23",
        "2021ucp1013@mnit.ac.in registered for the workshop [21:06 , 09/02/23",
        "2021ucp1013@mnit.ac.in registered for the workshop [21:06 , 09/02/23",
        "2021ucp1013@mnit.ac.in registered for the workshop [21:06 , 09/02/23",
        "2021ucp1013@mnit.ac.in registered for the workshop [21:06 , 09/02/23"
    ]
    return (
        <div className="col-span-3 row-span-6 bg-white rounded-xl py-4 px-4">
            <h1 className="text-3xl text-center font-bold" style={styles.textPrimary}>Notifications</h1>
            <div className="mt-4 px-2 overflow-auto" style={{height: 220}}>
                {
                    messages.map((m, id) => (
                        <p key={id} className="text-sm py-2">{m}</p>
                    ))
                }
            </div>
        </div>
      )
}

export default Notifications;