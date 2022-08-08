import app from "./firebase";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  update,
  remove,
} from "firebase/database";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const AddUser = (info, currentUser) => {
  const db = getDatabase(app);
  const userRef = ref(db, "users/");
  const newUserRef = push(userRef);
  set(newUserRef, {
    title: info.title,
    img: info.img,
    content: info.content,
    email: currentUser,
  });
};

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [contentList, setContentList] = useState();

  useEffect(() => {
    const db = getDatabase(app);
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContentList(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contentList };
};

export const DeleteCard = (id) => {
  const db = getDatabase(app);
  remove(ref(db, "users/" + id));
};

export const UpdateCard = (img, title, content, id, navigate) => {
  const db = getDatabase(app);
  const updates = {};
  updates["users/" + id] = { img: img, title: title, content: content };
  navigate("/");

  return update(ref(db), updates);
};
