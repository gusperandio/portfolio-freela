"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { IFeedbackRequest } from "@/types/feedback";

 

export function InfiniteMovingCardsDemo() {

  const [feedbacks, setFeedbacks] = useState<IFeedbackRequest[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reqs = await fetch(`/api/v1/feedback`);
        const reqResult = (await reqs.json()) as IFeedbackRequest[];
        setFeedbacks(reqResult);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); 
  }, []);

  return (
    <div className="mt-24">
      <h3 className="ml-24 text-2xl font-bold tracking-tight text-gray-900">
        Feedbacks
      </h3>
      <div className="h-[20rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={feedbacks} direction="right" speed="fast" />
      </div>
    </div>
  );
}
