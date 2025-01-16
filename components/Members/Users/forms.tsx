import React, { useEffect, useState } from "react";
import SideNav from "../sidenav";
import styles from "../../../constants/styles";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../../../context/authContext";
import Checkpoints from "../checkpoints";
import {
  IFormRetrievedData,
  IPollResponse,
  ITextResponse,
  getAllRegistrationForms,
  getRegistrationForm,
  getUnfilledIds,
  addResponse,
} from "../../../apis/forms";
import { set } from "react-hook-form";

import { ChevronLeft } from "lucide-react";

const Forms = () => {
  const { authUser } = useAuth();
  //   const [state, setState] = useState("");
  const [selectedForm, setSelectedForm] = useState<IFormRetrievedData | null>(
    null
  );
  //   const [confirmTask, setConfirmTask] = useState<ITaskData>();
  const [forms, setForms] = useState<IFormRetrievedData[]>([]);
  const [unfilledForms, setUnfilledForms] = useState<IFormRetrievedData[]>([]);
  const [filledForms, setFilledForms] = useState<IFormRetrievedData[]>([]);

  const [response, setResponse] = useState<(ITextResponse | IPollResponse)[]>(
    []
  );

  //   const [instances, setInstances] = useState<ITaskInstanceData[]>([])

  useEffect(() => {
    if (!authUser) return;
    // let forms: IFormRetrievedData[] = []
    getAllRegistrationForms().then((res) => {
      if (res) {
        res = res.filter((form) => form.active == true);
        setForms(res);
        // forms = res
        return res
      }
    }).then((res) => {
      console.log(res)
      if (res === undefined) return
      const urlParams = new URLSearchParams(window.location.search);
      const param = urlParams.get("register");
      console.log(param)
      if (param === "workshop" && res.length > 0) {
        setSelectedForm(res[0]);
    }
    });
  }, []);

  useEffect(() => {
    getUnfilledIds().then((res) => {
      if (res) {
        let unfilledforms: IFormRetrievedData[] = [];
        let filledforms: IFormRetrievedData[] = [];
        forms.forEach((form) => {
          if (res.includes(form.id)) {
            unfilledforms.push(form);
          } else filledforms.push(form);
        });
        // console.log(unfilledforms)
        // console.log(filledforms)
        setUnfilledForms(unfilledforms);
        setFilledForms(filledforms);
      }
    });
  }, [forms]);

  useEffect(() => {
    let tempResponse: (ITextResponse | IPollResponse)[] = [];
    selectedForm?.questions.forEach((question) => {
      if (question.type === "text") {
        tempResponse.push({
          questionId: question.id,
          textResponse: { content: "" },
        });
      } else if (question.type === "poll") {
        tempResponse.push({
          questionId: question.id,
          pollResponse: { optionId: question.poll.pollOptions[0].id },
        });
      }
    });
    setResponse(tempResponse);
  }, [selectedForm]);

  const onChoose = (index: number) => {
    setSelectedForm(forms[index]);
  };

  interface IHandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = async (e: IHandleSubmitEvent): Promise<void> => {
    e.preventDefault();
    if (
      response.some(
        (res) => "textResponse" in res && res.textResponse.content === ""
      )
    ) {
      alert("Please fill all the text fields before submitting.");
      return;
    }

    if (selectedForm != null) {
      const res = await addResponse(selectedForm.id, response);
      if (res) {
        alert("Form submitted successfully");
        unfilledForms.splice(unfilledForms.indexOf(selectedForm), 1);
        filledForms.push(selectedForm);
        setSelectedForm(null);
      }
    }
  };

  return (
    <ProtectedRoute>
      <div
        className="flex flex-col md:grid grid-cols-12 h-screen"
        style={{ background: "#EFEFEF" }}
      >
        <SideNav />

        <div className="px-4 relative overflow-y-scroll md:px-12 md:col-span-9">
          {/* <h1 className="text-4xl font-bold mt-14 md:mt-8" style={{ color: "#AAAAAA" }}>
            {(state === "selection" || state === "confirmation") && "Choose your major project"}
            {state === "inprogress" && "Project Progress"}
          </h1> */}
          {forms.length === 0 && (
            <div
              className="flex justify-center text-2xl mt-16 font-bold"
              style={{ color: "#AAAAAA" }}
            >
              No forms are available at the moment.
            </div>
          )}
          {selectedForm === null && (
            <div className="my-8 space-y-8 pt-16 md:pt-0">
              {unfilledForms?.map((form, index) => (
                <div
                  key={form.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 grid grid-cols-1 md:grid-cols-8"
                >
                  <div className="p-6 md:p-8 md:col-span-7">
                    <h3
                      className="md:text-3xl font-extrabold text-2xl"
                      style={styles.textPrimary}
                    >
                      {form.name}
                    </h3>
                    {form.description && (
                      <p className="mt-4 text-gray-600">{form.description}</p>
                    )}
                  </div>

                  <button
                    onClick={() => onChoose(index)}
                    style={{ backgroundColor: "#0C72B0" }}
                    className="w-full h-full md:col-span-1 p-4 text-white font-bold text-lg transition-colors duration-200 rounded-b-2xl md:rounded-none md:rounded-r-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:brightness-105"
                  >
                    Fill Form
                  </button>
                </div>
              ))}
              {/* </div> */}

              {filledForms?.map((form, index) => (
                <div
                  key={form.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 grid grid-cols-1 md:grid-cols-8"
                >
                  <div className="p-6 md:p-8 md:col-span-7">
                    <h3
                      className="md:text-3xl font-extrabold text-2xl"
                      style={styles.textPrimary}
                    >
                      {form.name}
                    </h3>
                    {form.description && (
                      <p className="mt-4 text-gray-600">{form.description}</p>
                    )}
                  </div>
                  <div
                    style={{ backgroundColor: "#CCCCCC", color: "#666666" }}
                    className="w-full h-full md:col-span-1 p-4 font-bold text-lg flex items-center justify-center rounded-b-2xl md:rounded-none md:rounded-r-2xl"
                  >
                    Already filled
                  </div>
                </div>
              ))}
            </div>
          )}
          {selectedForm != null && (
            <div className="max-w-3xl mx-auto my-8 bg-white rounded-2xl shadow-sm p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => setSelectedForm(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {selectedForm.name}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {selectedForm.questions.map((field, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-xl">
                    <label className="block text-lg font-medium text-gray-900 mb-3">
                      {index + 1}.{" "}
                      {field.type === "text"
                        ? field.text.content
                        : field.poll.title}
                    </label>

                    {field.type === "text" ? (
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200"
                        placeholder="Enter your answer"
                        onChange={(e) => {
                          for (let res of response) {
                            if (
                              res.questionId === field.id &&
                              "textResponse" in res
                            ) {
                              res.textResponse.content = e.target.value;
                            }
                          }
                        }}
                      />
                    ) : (
                      <select
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200 bg-white"
                        onChange={(e) => {
                          for (let res of response) {
                            if (
                              res.questionId === field.id &&
                              "pollResponse" in res
                            ) {
                              res.pollResponse.optionId = Number(
                                e.target.value
                              );
                            }
                          }
                        }}
                      >
                        {field.poll.pollOptions.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.value}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                ))}

                <div className="pt-6">
                  <button
                    type="submit"
                    style={{ backgroundColor: "#0C72B0F2" }}
                    className="w-full md:w-auto px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:brightness-105"
                  >
                    Submit Form
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Forms;
