import React from "react";

export const TodoCard: React.FC<{ title: string }> = (props) => {
  return (
    <div className="px-4 py-4 mb-4 text-base font-light text-left text-gray-900 bg-white rounded-md">
      <span className="ml-4 text-lg font-medium">{props.title}</span>
    </div>
  );
};
