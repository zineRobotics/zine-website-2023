import React, { useEffect, useState } from "react";
import SideNav from "../sidenav";
import styles from "../../../constants/styles";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../../../context/authContext";
import Checkpoints from "../checkpoints";
import { IFormRetrievedData, IPollResponse, ITextResponse, getAllRegistrationForms, getRegistrationForm, getUnfilledIds, addResponse } from "../../../apis/forms";
import { set } from "react-hook-form";

const Forms = () => {
  const { authUser } = useAuth();
//   const [state, setState] = useState("");
  const [selectedForm, setSelectedForm] = useState<IFormRetrievedData|null>(null)
//   const [confirmTask, setConfirmTask] = useState<ITaskData>();
  const [forms, setForms] = useState<IFormRetrievedData[]>([]);
  const [unfilledForms, setUnfilledForms] = useState<IFormRetrievedData[]>([]);
  const [filledForms, setFilledForms] = useState<IFormRetrievedData[]>([]);

  const [response, setResponse] = useState<(ITextResponse|IPollResponse)[]>([]);

//   const [instances, setInstances] = useState<ITaskInstanceData[]>([])

  useEffect(() => {
    if (!authUser) return;
    getAllRegistrationForms().then((res) => {
      if (res) {
        res = res.filter(form => form.active==true)
        setForms(res)
        console.log(res)
      };
    });   
  }, []);

  useEffect(() => {
    getUnfilledIds().then((res) => {
        if (res){
          let unfilledforms: IFormRetrievedData[] = []
          let filledforms: IFormRetrievedData[] = []
          forms.forEach((form) => {
              if(res.includes(form.id)){
                  unfilledforms.push(form)
              }
              else filledforms.push(form)
          })
          // console.log(unfilledforms)
          // console.log(filledforms)
          setUnfilledForms(unfilledforms);
          setFilledForms(filledforms);
        }
      })
  }, [forms])

  useEffect(() => {
    let tempResponse: (ITextResponse|IPollResponse)[] = []
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
    })
    setResponse(tempResponse);
  }, [selectedForm]);

  const onChoose = (index: number) => {
    setSelectedForm(forms[index]);
  };

//   const closeConfirmation = () => {
//     setState("selection");
//     setConfirmTask(undefined);
//   };

  

  return (
    <ProtectedRoute>
      <div className="flex flex-col md:grid grid-cols-12 h-screen" style={{ background: "#EFEFEF" }}>
        <SideNav />

        <div className="px-4 relative overflow-y-scroll md:px-12 md:col-span-9">
          {/* <h1 className="text-4xl font-bold mt-14 md:mt-8" style={{ color: "#AAAAAA" }}>
            {(state === "selection" || state === "confirmation") && "Choose your major project"}
            {state === "inprogress" && "Project Progress"}
          </h1> */}
          {forms.length===0 && (
            <div className="flex justify-center text-2xl mt-16 font-bold" style={{ color: "#AAAAAA" }}>
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
                <h3 className="md:text-3xl font-extrabold text-2xl" style={styles.textPrimary}>
                    {form.name}
                  </h3>
                  {form.description && (
                    <p className="mt-4 text-gray-600">
                      {form.description}
                    </p>
                  )}
                </div>
                
                <button
                  onClick={() => onChoose(index)}
                  style={{ backgroundColor: '#0C72B0' }}
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
                <h3 className="md:text-3xl font-extrabold text-2xl" style={styles.textPrimary}>
                    {form.name}
                  </h3>
                  {form.description && (
                    <p className="mt-4 text-gray-600">
                      {form.description}
                    </p>
                  )}
                </div>
                <div
                    style={{ backgroundColor: '#CCCCCC', color: '#666666' }}
                    className="w-full h-full md:col-span-1 p-4 font-bold text-lg flex items-center justify-center rounded-b-2xl md:rounded-none md:rounded-r-2xl"
                    >
                    Already filled
                </div>
              </div>
                // <div key={form.id} className="row-span-5 bg-white rounded-xl mb-8 w-full grid grid-cols-7 md:grid-cols-8">
                //   <div className="col-span-7 p-4 md:p-8">
                //     <h3 className="md:text-3xl font-extrabold text-2xl" style={styles.textPrimary}>
                //       {form.name}
                //     </h3>
                //     {/* <div className="flex gap-2 mt-2 flex-col text-center md:flex-row text-sm md:text-normal">
                //       {form.description &&
                //         <div className="py-1 px-4 rounded-xl" style={{ background: "#C2FFF4" }}>
                //           <p>{form.description}</p>
                //         </div>
                //       }
                //     </div> */}
                //     <p className="mt-4">{form.description}</p>
                //   </div>
                //   <div className="flex md:flex-col text-white font-bold text-lg col-span-7 md:col-span-1">
                //     <div className="text-center flex-1 md:flex-none py-4 px-2 rounded-br-xl" style={{ background: "#CCCCCC", color: "#666666" }}>
                //       Already filled
                //     </div>
                //   </div>
                // </div>

              ))}
            </div>
          )}
          {
            selectedForm!=null && (
              <div className="my-8">
                <h2 className="text-2xl font-bold mb-4">{selectedForm.name}</h2>
                <button
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded mb-4"
                    onClick={() => setSelectedForm(null)}
                >
                    Back
                </button>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle form submission
                  }}
                >
                  {selectedForm.questions.map((field, index) => (
                    <div key={index} className="mb-4">
                      {/* <label className="block text-lg font-medium mb-2">{field.id}</label> */}
                      {field.type === "text" && (
                        <>
                            <label className="block text-lg font-medium mb-2">{(index+1)+'. '+field.text.content}</label>
                            <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={(e) => {
                                // Handle text input change
                                for (let res of response) {
                                    if (res.questionId === field.id && 'textResponse' in res) {
                                        res.textResponse.content = e.target.value;
                                    }
                                }
                                //&& 'textResponse' in res
                            }}
                            />
                        </>
                      )}
                      {field.type === "poll" && (
                        <>
                            <label className="block text-lg font-medium mb-2">{(index+1)+'. '+field.poll.title}</label>
                            <select
                            className="w-full p-2 border border-gray-300 rounded"
                            onChange={(e) => {
                                // Handle poll selection change
                                for (let res of response) {
                                    if (res.questionId === field.id && 'pollResponse' in res) {
                                        res.pollResponse.optionId = Number(e.target.value);
                                    }
                                }
                            }}
                            >
                            {field.poll.pollOptions.map((option, idx) => (
                                <option key={option.id} value={option.id}>
                                {option.value}
                                </option>
                            ))}
                            </select>
                        </>
                      )}
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        if (response.some(res => 'textResponse' in res && res.textResponse.content === "")) {
                            alert("Please fill all the text fields before submitting.");
                            return;
                        }
                      // Handle form submission
                    //   console.log(response);
                      addResponse(selectedForm.id, response).then((res) => {
                        if(res){
                            alert("Form submitted successfully");
                            unfilledForms.splice(unfilledForms.indexOf(selectedForm), 1);
                            filledForms.push(selectedForm);
                            setSelectedForm(null);
                        }
                      })
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            )
          }
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Forms;