import React, { useEffect, useState } from 'react';
import { IPollBody, IPollOptionBody } from "../../apis/interfaces/message"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export function Poll({ pollBody, voteFunc, chatId }: { pollBody: IPollBody, voteFunc: (chatId: number, optionId: number) => void, chatId: number }) {
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
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{pollBody.title}</h2>
      <p className="text-gray-600 mb-6">{pollBody.description}</p>

      <div className="space-y-3">
        {pollBody.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleVote(option.id)}
            disabled={hasVoted}
            className="w-full text-left p-3 border rounded hover:bg-gray-50 relative"
          >
            <div className="flex justify-between relative z-10">
              <span>{option.value}</span>
              {hasVoted && (
                <>
                  {pollBody.lastVoted==option.id && <FontAwesomeIcon icon={faCheck} />}
                  <span className="text-blue-600">{getPercentage(option.numVotes)}%</span>
                </>
              )}
            </div>
            {hasVoted && (
              <div
                className="absolute inset-0 bg-blue-50 rounded"
                style={{ width: `${getPercentage(option.numVotes)}%` }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-500 text-center">
        {totalVotes} votes
      </div>
    </div>
  );
}