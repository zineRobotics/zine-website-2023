import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCalendar, faUsers, faVolumeOff, faMessage, faListCheck } from "@fortawesome/free-solid-svg-icons";
import SideNav from "./sidenav";
import Notifications from "./notifications";
import styles from "./styles";

const Dashboard = () => {
    const date = new Date()
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];;
    let suffix = "TH"
    if (date.getDate() % 10 == 1) suffix = "ST"
    else if (date.getDate() % 10 == 2) suffix = "ND"

    return (
        <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
            <div className="col-span-9 px-12 flex flex-col">
                <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Admin Panel</h1>

                <div className="grid grid-cols-9 grid-rows-10 gap-8 my-8 flex-1">
                    <div className="col-span-3 row-span-4 bg-white rounded-xl py-4 px-16">
                        <h5 className="text-xl text-right font-bold" style={styles.textPrimary}>{suffix}</h5>
                        <h1 className="text-7xl text-center font-extrabold" style={styles.textPrimary}>{date.getDate()}</h1>
                        <h3 className="text-3xl text-center mt-4 font-bold" style={styles.textNormal}>{months[date.getMonth()]}</h3>
                    </div>

                    <Link href="/admin/registrations">
                        <div className="col-span-3 row-span-4 bg-white rounded-xl py-4">
                            <h1 className="text-7xl text-center font-extrabold" style={{color: "#0C72B0"}}>45</h1>
                            <div className="text-center mt-4">
                                <FontAwesomeIcon icon={faCheck} size="2x" style={styles.textSecondary} />
                            </div>
                            <h3 className="text-2xl text-center font-bold mt-2" style={styles.textSecondary}>Registered</h3>
                        </div>
                    </Link>

                    <Link href="/admin/users">
                        <div className="col-span-3 row-span-4 bg-white rounded-xl py-4">
                            <h1 className="text-7xl text-center font-extrabold" style={styles.textPrimary}>78</h1>
                            <div className="text-center mt-4">
                                <FontAwesomeIcon icon={faUsers} size="2x" style={styles.textSecondary} />
                            </div>
                            <h5 className="text-2xl text-center font-bold mt-2" style={styles.textSecondary}>Users</h5>
                        </div>
                    </Link>

                    <Notifications />
                    
                    <Link href="/admin/events">
                        <div className="col-span-3 row-span-4 bg-white rounded-xl py-4">
                            <h1 className="text-7xl text-center font-extrabold" style={styles.textPrimary}>11</h1>
                            <div className="text-center mt-4">
                                <FontAwesomeIcon icon={faCalendar} size="2x" style={styles.textSecondary} />
                            </div>
                            <h5 className="text-2xl text-center font-bold mt-2" style={styles.textSecondary}>Events</h5>
                        </div>
                    </Link>

                    <Link href="/admin/tasks">
                        <div className="col-span-3 row-span-4 bg-white rounded-xl py-4">
                            <h1 className="text-7xl text-center font-extrabold" style={styles.textPrimary}>15</h1>
                            <div className="text-center mt-4">
                                <FontAwesomeIcon icon={faListCheck} size="2x" style={styles.textSecondary} />
                            </div>
                            <h5 className="text-2xl text-center font-bold mt-2" style={styles.textSecondary}>Tasks</h5>
                        </div>
                    </Link>

                    <div className="col-span-4 row-span-2 bg-white rounded-xl py-2">
                        <div className="text-center mt-2">
                            <FontAwesomeIcon icon={faVolumeOff} size="2x" style={styles.textSecondary} />
                        </div>
                        <h5 className="text-2xl text-center font-bold mt-2" style={styles.textSecondary}>Announcements</h5>
                    </div>

                    <div className="col-span-2 row-span-2 bg-white rounded-xl py-2">
                        <div className="text-center mt-2">
                            <FontAwesomeIcon icon={faMessage} size="2x" style={styles.textSecondary} />
                        </div>
                        <h5 className="text-2xl text-center font-bold mt-2" style={styles.textSecondary}>Chats</h5>
                    </div>
                </div>
            </div>

            <SideNav />
        </div>
      )
}

export default Dashboard;