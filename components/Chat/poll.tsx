import React, { useEffect, useState } from 'react';
import { IPollBody, IPollOptionBody } from "../../apis/interfaces/message"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export function Poll({ pollBody, voteFunc, chatId, isUser, space }: { pollBody: IPollBody, voteFunc: (chatId: number, optionId: number) => void, chatId: number, isUser: boolean, space: boolean }) {
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    if (pollBody.lastVoted) {
      setHasVoted(true)
    }
  }, [])

  const totalVotes = pollBody.options.reduce((sum, option) => sum + option.numVotes, 0);

  const handleVote = (optionId: number) => {
    if (hasVoted) return;
    // setOptions(options.map(option =>
    //   option.id === optionId
    //     ? { ...option, votes: option.numVotes + 1 }
    //     : option
    // ));
    voteFunc(chatId, optionId)
    setHasVoted(true);
    pollBody.lastVoted = optionId;
  };

  const getPercentage = (votes: number) => {
    if (totalVotes === 0) return 0;
    return Math.round((votes / totalVotes) * 100);
  };

  return (
    <div className="rounded-2xl shadow p-6 w-64" style={{ backgroundColor:  `${isUser ? "#95C5E2" : "#0C72B0"}`, marginLeft: `${isUser ? "auto" : space ? "2rem" : "0rem"}` }}>
      <h2 className="text-xl font-bold text-white mb-2">{pollBody.title}</h2>
      <p className="text-white mb-6">{pollBody.description}</p>

      <div className="space-y-3">
        {pollBody.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleVote(option.id)}
            disabled={hasVoted}
            className="w-full text-left p-3 rounded-lg hover:bg-gray-50 relative"
            style={{ backgroundColor: "#4b9cce" }}
          >
            <div className="flex justify-between relative z-10 text-white">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-white mr-3">
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    pollBody.lastVoted === option.id ? 'bg-white scale-100' : 'bg-transparent scale-0'
                  }`}
                />
              </div>
              <span>{option.value}</span>
              {hasVoted && (
                <>
                  {/* {pollBody.lastVoted==option.id && <FontAwesomeIcon icon={faCheck} />} */}
                  <span className="text-white">{getPercentage(option.numVotes)}%</span>
                </>
              )}
            </div>
            {hasVoted && (
              <div
                className="absolute inset-0 rounded-lg"
                style={{ backgroundColor: "#26668c", 
                  width: `${getPercentage(option.numVotes)}%` ,
                  border: `${pollBody.lastVoted === option.id ? "1px solid #ffffff" : "none"}`
                }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="mt-4 text-sm text-white text-center">
        {totalVotes} votes
      </div>
    </div>
  );
}