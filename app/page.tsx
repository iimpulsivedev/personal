import Image from "next/image";
import Button from "@/components/button";
import Card from "@/components/card";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-slate-800">
            <div className="flex-grow py-5">
                <div className="flex flex-col items-center">
                    <p className="mb-8 text-center text-6xl font-bold text-white">Noah Pickle</p>
                    <Image
                        src="/noah-pickle.JPEG"
                        alt="picture of noah pickle"
                        width={350}
                        height={350}
                    />
                </div>
                <div>
                    <p className="my-8 text-center text-5xl font-bold text-white">Resume</p>
                    <div className="flex justify-center py-5">
                        <a
                            href="./Noah_Pickle_Resume.pdf"
                            target="_blank"
                        >
                            <Button text="View" />
                        </a>
                        <a
                            href="./Noah_Pickle_Resume.pdf"
                            download
                        >
                            <Button text="Download" />
                        </a>
                    </div>
                </div>
                <div>
                    <p className="my-8 text-center text-5xl font-bold text-white">Projects</p>
                    <div className="flex flex-col items-center justify-center py-5 md:flex-row md:flex-wrap">
                        <Card
                            title="Yoorblog"
                            desc="Yoorblog is an open source alternative to wordpress CMS built from Next.js, Typescript,
              React and Prisma."
                            link={{
                                project: "https://yoorblog.com",
                                source: "https://github.com/noahpickle/yoorblog",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <p className="my-8 text-center text-5xl font-bold text-white">Skills</p>
                    <div className="flex flex-col items-center justify-center py-5 md:flex-row md:flex-wrap">
                        <Card title="Project Management" />
                        <Card title="Typescript" />
                        <Card title="React" />
                        <Card title="SCSS" />
                        <Card title="PHP" />
                        <Card title="MySQL" />
                        <Card title="Database Design" />
                        <Card title="Database Administration" />
                    </div>
                </div>
                <div>
                    <p className="my-8 text-center text-5xl font-bold text-white">Tools</p>
                    <div className="flex flex-col items-center justify-center py-5 md:flex-row md:flex-wrap">
                        <Card title="VSCode" />
                        <Card title="WSL2" />
                        <Card title="Docker" />
                        <Card title="Git" />
                        <Card title="Github" />
                        <Card title="DBeaver" />
                    </div>
                </div>
            </div>
        </main>
    );
}
