import { useEffect } from "react";
import { TypesSeo } from "./TypesSeo";

export const useSEO = ({ title, description, author }: TypesSeo) => {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) metaDescription.setAttribute("content", description);

    const metaAuthor = document.querySelector("meta[name='author']");
    if (metaAuthor) metaAuthor.setAttribute("author", author);
  }, [title, description, author]);
  return {
    title,
    description,
    author,
  };
};
