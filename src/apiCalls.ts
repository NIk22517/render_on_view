import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type PostType = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export const GetPosts = () => {
  return useQuery<PostType[]>({
    queryKey: ["get_posts"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      if (res.status === 200) {
        return res.data;
      } else {
        throw new Error(res.statusText ?? "Something went wrong");
      }
    },
  });
};

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const GetUsers = () => {
  return useQuery<UserType[]>({
    queryKey: ["get_users"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      if (res.status === 200) {
        return res.data;
      } else {
        throw new Error(res.statusText ?? "Something went wrong");
      }
    },
  });
};

type PhotoType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const GetPhotos = () => {
  return useQuery<PhotoType[]>({
    queryKey: ["get_photos"],
    queryFn: async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      if (res.status === 200) {
        return res.data?.slice(0, 100);
      } else {
        throw new Error(res.statusText ?? "Something went wrong");
      }
    },
  });
};
