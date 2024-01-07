import React from "react";
import uploadImg from "../assets/Images/uploading.gif"
const Dashboard = () => {
    return (
        <div className=" bg-gray-950 w-screen h-[calc(100vh-3.5rem)] flex justify-center items-center text-white ">
            <div className="w-[40%] flex flex-col">
                <form className="flex gap-4 flex-col">
                    <div >
                        <div className="flex flex-col items-center">
                            <label htmlFor="file">Upload File</label>
                            <input className="text-black w-[40%]" type="file" name="file" id="file" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Name">
                                Name<sup>*</sup>
                            </label>
                            <input className="text-black w-[40%]" type="text" name="Name" id="Name"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Email">
                                Email<sup>*</sup>
                            </label>
                            <input className="text-black w-[40%]" type="email" name="Email" id="Email"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Desc">
                                Description<sup>*</sup>
                            </label>
                            <input className="text-black w-[40%]" type="text" name="Desc" id="Desc" />
                        </div>
                    </div>
                        <button type="submit" className=" border border-yellow-400 bg-yellow-400 rounded-sm w-[40%] py-1 px-3">Upload</button>
                </form>
            </div>
            <div className="w-[40%]">
                
            </div>
        </div>
    );
};

export default Dashboard;
