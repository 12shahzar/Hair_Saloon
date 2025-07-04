import React from "react";
import { MembershipCard } from "..";

const MembershipSection = ({ title, data, selectedCard, setSelectedCard, setIsCardSelected,className }) => {
  return (
    <div className="flex flex-col gap-5 mx-auto mt-2">
      
      <div className={`mx-auto justify-evenly  xl:grid-cols-3 gap-3 md:gap-8 ${className}`}>
        {data.map((data, index) => (
          <MembershipCard
            key={index}
            data={data}
            isSelected={selectedCard?.id === data.id}
            onSelect={() => {
              setSelectedCard(data);
              setIsCardSelected(true); // ✅ this is important
            }}
          />
        ))}
      </div>
    </div>
  );
};


export default MembershipSection;
