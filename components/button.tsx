import React from "react";

type Props = {
  text: string;
};

export default function Button(props: Props) {
  return (
    <button
      type="button"
      className="m-3 rounded-xl bg-blue-500 px-6 py-3 text-2xl text-white transition duration-300 hover:bg-blue-700"
    >
      {props.text}
    </button>
  );
}
