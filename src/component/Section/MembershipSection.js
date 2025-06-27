import React from "react";
import { MembershipCard } from "..";

const MembershipSection = ({ title, data, selectedCard, setSelectedCard, setIsCardSelected,className }) => {
  return (
    <div className="flex flex-col gap-5 mx-auto">
      <p className="text-[8px] sm:text-sm font-medium font-futura text-black text-center">
        {title}
      </p>
      <div className={`grid grid-cols-4 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-8 mx-auto justify-evenly ${className}`}>
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
