import React from "react";
import { MainLayout } from "@/layouts";
import { useParams } from "react-router-dom";

export const TagsPage: React.FC = () => {
  const { tagId } = useParams<"tagId">();
  return <MainLayout>{tagId}</MainLayout>;
};
