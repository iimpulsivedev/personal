import Button from "./button";

type Props = {
  title: string;
  desc?: string;
  link?: {
    project?: string;
    source?: string;
  };
};

export default function Card(props: Props) {
  return (
    <div className="m-4 h-fit w-80 rounded-xl bg-white text-center shadow-md shadow-blue-500 md:w-3/12">
      <div className="m-6">
        <p className="text-2xl font-bold md:text-4xl">{props.title}</p>
        <p className="text-md mt-3 md:text-xl">{props.desc}</p>

        <div className="my-5 max-w-xl border-t-4 border-t-blue-500"></div>

        {props?.link && (
          <div className="w-full">
            <a
              href={props?.link?.project}
              target="_blank"
            >
              <Button text="View" />
            </a>
            <a
              href={props?.link?.source}
              target="_blank"
            >
              <Button text="Source Code" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
