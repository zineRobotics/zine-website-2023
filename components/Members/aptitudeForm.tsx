import React, { useState } from "react";
import Image from "next/image";
import ZineLogo from "../../images/zinelogo.png";
import {
  ToastContainer,
  toast,
} from "react-toastify";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "../../firebase";
interface IAptRegisterData {
  name: string;
  email: string;
  phoneno: string;
  branch: string;
}

const AptitudeForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneno, setPhoneno] =
    useState<string>("");
  const [branch, setBranch] =
    useState<string>("");
  const handleSubmit = async () => {
    console.log({
      name: name,
      email: email,
      phoneNumber: phoneno,
      branch: branch,
    });
    const userRef = collection(db, "users");
    const isRegistered = query(
      userRef,
      where("email", "==", email.trim())
    );
    let querySnapshot = await getCountFromServer(
      isRegistered
    );
    if (querySnapshot.data().count >= 1) {
      const regRef = collection(
        db,
        "aptitudeRegs"
      );
      const isAptReg = query(
        regRef,
        where("email", "==", email.trim())
      );
      const snapshot = await getCountFromServer(
        isAptReg
      );
      if (snapshot.data().count > 0) {
        toast.error(
          "Already registered for the Aptitude Test"
        );
      } else {
        addRegistration();
      }
    } else {
      toast.error(
        "Email address is not registered with Zine"
      );
    }
  };
  const addRegistration = async () => {
    let add = addDoc(
      collection(db, "aptitudeRegs"),
      {
        name: name,
        email: email,
        phoneNumber: phoneno,
        branch: branch,
      }
    );
    toast.promise(add, {
      pending: "Registering user",
      success:
        "Successfully registered for the Aptitude Test",
      error: "Registration unsuccessfull",
    });
  };
  return (
    <div
      className="flex flex-col w-full h-full items-center"
      style={{
        background:
          "linear-gradient(to right, #003D63, #0C72B0)",
      }}
    >
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div
        className="bg-white shadow-md rounded-xl px-8 pb-8 md:px-16 my-16 w-11/12 md:w-1/2"
        style={{ maxWidth: 651 }}
      >
        <div className="flex justify-center">
          <Image
            src={ZineLogo}
            width={150}
            height={150}
          />
        </div>
        <p
          className="text-center -mt-8 font-semibold"
          style={{ color: "#0C72B0" }}
        >
          Robotics and Research Group
        </p>
        <div
          className="font-poppins text-2xl font-bold text-center"
          style={{ color: "#0C72B0" }}
        >
          Aptitude Test Registration 2024
        </div>
        <div className="mt-8">
          <label className="block text-gray-600">
            Name
            <span className="text-red-500">
              *
            </span>
          </label>
          <input
            type="text"
            id="name"
            className="block w-full focus:outline-none bottom-border pt-2"
            placeholder=""
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />
        </div>
        <div className="mt-8">
          <label className="block text-gray-600">
            Email
            <span className="text-red-500">
              *
            </span>
          </label>
          <input
            type="email"
            id="email"
            className="block w-full focus:outline-none bottom-border pt-2"
            placeholder="xyz@abc.com"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className="mt-8">
          <label className="block text-gray-600">
            Phone number
            <span className="text-red-500">
              *
            </span>
          </label>
          <input
            type="text"
            id="phoneno"
            className="block w-full focus:outline-none bottom-border pt-2"
            value={phoneno}
            onChange={(e) =>
              setPhoneno(e.target.value)
            }
          />
        </div>
        <div className="mt-8">
          <label className="block text-gray-600">
            Branch
            <span className="text-red-500">
              *
            </span>
          </label>
          <input
            type="text"
            id="branch"
            className="block w-full focus:outline-none bottom-border pt-2"
            value={branch}
            onChange={(e) =>
              setBranch(e.target.value)
            }
          />
        </div>

        <button
          className="mt-8 p-4 block w-full rounded-3xl text-white opacity-90 hover:opacity-100"
          style={{ background: "#0C72B0" }}
          onClick={() => handleSubmit()}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default AptitudeForm;
