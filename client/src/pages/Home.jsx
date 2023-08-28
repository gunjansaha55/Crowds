import React, { useState, useEffect } from "react";
import DisplayCampaigns from "../components/DisplayCampaigns";
import { useStateContext } from "../context";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();

    // Modify campaigns to replace negative days with a random number
    const modifiedCampaigns = data.map(campaign => {
      if (campaign.deadline < 0) {
        return {
          ...campaign,
          daysLeft: Math.floor(Math.random() * 30) + 1,
        };
      }
      return campaign;
    });

    setCampaigns(modifiedCampaigns);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
};

export default Home;
