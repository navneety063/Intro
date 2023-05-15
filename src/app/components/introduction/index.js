import {HiMail} from "react-icons/hi"
import {VscFilePdf} from "react-icons/vsc"

const Info =  {
    name: "Navneet kumar yadav",
    address: "Delhi",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    company: "Delhi Technological University",
    designation: "3red year student",
    socials: [
        {
            icon: "/facebook.png",
            link: "https://www.facebook.com/",
        },
        {
            icon: "/instagram.png",
            link: "https://www.instagram.com/",
        },
        {
            icon: "/youtube.png",
            link: "https://www.youtube.com/",
        },
        {
            icon: "/tiktok.png",
            link: "https://www.tiktok.com/en/",
        }
    ],
}

export default function Introduction({downloadInPdf}) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-row justify-between bg-zinc-200 items-center py-4 px-20">
                <span>
                    <a className="text-2xl font-medium text-slate-700 hover:text-slate-900" href="mailto:navneety063@gmail.com">
                        navneety063@gmail.com
                        <HiMail className="inline ml-2" />
                    </a>
                </span>
                <span>
                    <button onClick={downloadInPdf}><VscFilePdf className="text-3xl" /></button>
                </span>
            </div>
            <div className="flex flex-row grow">
                <div className="flex flex-col justify-center bg-zinc-200">
                    {
                        Info.socials.map(social => {
                            return (
                                <a className="p-2" target="_blank" key={social.icon} href={social.link}>
                                    <img className="w-40 lg:w-28" src={social.icon} />
                                </a>
                            )
                        })
                    }
                </div>
                <div className="pb-11">
                    <h1 className="text-5xl text-center my-8 underline underline-offset-8 mb-20">About Me</h1>
                    <div className="flex lg:flex-row flex-col border-solid border-2 border-slate-300 mx-auto w-4/5 sm:w-3/5 lg:w-3/5 p-3 rounded">
                        <div className="flex flex-col p-3 basis-3/5">
                            <h2 className="text-3xl text-center">{Info.name}</h2>
                            <p className="mt-3"><b>Location:</b> {Info.address}</p>
                            <p className="mt-1"><b>Company:</b> {Info.company}</p>
                            <p className="mt-1"><b>Designation:</b> {Info.designation}</p>
                            <p className="mt-1"><b>Description:</b> &quot Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat &quot</p>
                        </div>
                        <div className="basis-2/5 -order-1">
                            <img className="max-h-96 md:max-h-100 mx-auto" src={Info.image} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}