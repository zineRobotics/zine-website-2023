import React from "react";
import styles from "./styles";

const Notifications = () => {
    return (
        <div className="col-span-3 row-span-6 bg-white rounded-xl py-4 px-4">
            <h1 className="text-3xl text-center font-bold" style={styles.textPrimary}>Notifications</h1>
            <div className="mt-4 px-2 overflow-auto" style={{height: 220}}>
                <p className="text-sm py-2">2021ucp1013@mnit.ac.in registered for the workshop [21:06 , 09/02/23]</p>
                <p className="text-sm py-2">2021ucp1013@mnit.ac.in registered for the workshop [21:06 , 09/02/23]</p>
                <p className="text-sm py-2">2021ucp1013@mnit.ac.in registered for the workshop [21:06 , 09/02/23]</p>
                <p className="text-sm py-2">2021ucp1013@mnit.ac.in registered for the workshop [21:06 , 09/02/23]</p>
                <p className="text-sm py-2">2021ucp1013@mnit.ac.in registered for the workshop [21:06 , 09/02/23]</p>
                <p className="text-sm py-2">2021ucp1013@mnit.ac.in registered for the workshop [21:06 , 09/02/23]</p>
            </div>
        </div>
      )
}

export default Notifications;