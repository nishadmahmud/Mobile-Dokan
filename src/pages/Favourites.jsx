import React, { useEffect, useState } from "react";
import { getFavourites, removeFavpurite } from "../utils";
import PhoneCrad from "../components/PhoneCrad";
import EmptyState from "../components/EmptyState";

const Favourites = () => {
  const [displayPhone, setDisplayPhone] = useState([]);
  useEffect(() => {
    const savedPhones = getFavourites();
    setDisplayPhone(savedPhones);
  }, []);

  const handleDelete = (id) =>{
    removeFavpurite(id);
    setDisplayPhone(getFavourites());
  }

  if(displayPhone.length==0){
    return <EmptyState></EmptyState>
  }

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {displayPhone.map((phone) => (
          <PhoneCrad key={phone.id} phone={phone} deletable={true} handleDelete={handleDelete}></PhoneCrad>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
