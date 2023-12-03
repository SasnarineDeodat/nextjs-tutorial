"use client";

export default function error(error) {
  console.log(error);
  //   return <div>there was an error...</div>;
  return <div>{error.error.message}</div>;
}
