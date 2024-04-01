import { useEffect } from "react";
import { TypesSeo } from "../hooks/TypesSeo";

export const useSEO = ({ title, description, author }: TypesSeo) => {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) metaDescription.setAttribute("content", description);

    const metaAuthor = document.querySelector("meta[name='author']");
    if (metaDescription) metaDescription.setAttribute("author", author);
  }, [title, description, author]);
  return {
    title,
    description,
    author,
  };
};
