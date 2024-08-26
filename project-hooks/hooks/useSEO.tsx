/* import { useEffect } from "react";
import { TypesSeo } from "./TypesSeo";

export const useSEO = ({ title, description, author }: TypesSeo) => {
  useEffect(() => {
    document.title = title;
    let metaDescription = document.querySelector("meta[name='description']");
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
 */
import { useEffect } from "react";
import { TypesSeo } from "./TypesSeo";

export const useSEO = ({ title, description, author }: TypesSeo) => {
  useEffect(() => {
    document.title = title;

    // Set the meta description
    let metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", description);
      document.head.appendChild(metaDescription);
    }

    // Set the meta author
    let metaAuthor = document.querySelector("meta[name='author']");
    if (metaAuthor) {
      metaAuthor.setAttribute("content", author);
    } else {
      metaAuthor = document.createElement("meta");
      metaAuthor.setAttribute("name", "author");
      metaAuthor.setAttribute("content", author);
      document.head.appendChild(metaAuthor);
    }
  }, [title, description, author]);

  return {
    title,
    description,
    author,
  };
};
