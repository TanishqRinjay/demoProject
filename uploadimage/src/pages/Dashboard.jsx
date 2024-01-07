import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import uploadImg from "../assets/Images/uploading.gif";
import { uploadImage } from "../services/operations/imageDetails";
const Dashboard = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { token } = useSelector((state) => state.auth);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("Imagefile", data.courseTitle);
        formData.append("name", data.courseShortDesc);
        formData.append("description", data.coursePrice);
        formData.append("email", data.courseBenefits);
        setLoading(true);
        const result = await uploadImage(formData, token);
        setLoading(false);
    };

    return (
        <div className=" bg-gray-950 w-screen min-h-[calc(100vh-3.5rem)] flex justify-center items-center text-white ">
            <div>
                <div className="w-[40%] flex flex-col">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex gap-4 flex-col"
                    >
                        <div>
                            <div className="flex flex-col">
                                <label htmlFor="file">Upload File</label>
                                <input
                                    className="text-black w-[40%]"
                                    type="file"
                                    name="file"
                                    id="file"
                                    placeholder="Upload File"
                                    {...register("file", { required: true })}
                                />
                                {errors.file && <span>File is required.</span>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="Name">
                                    Name<sup>*</sup>
                                </label>
                                <input
                                    className="text-black w-[40%]"
                                    type="text"
                                    name="Name"
                                    id="Name"
                                    placeholder="Enter name"
                                    {...register("Name", { required: true })}
                                />
                                {errors.Name && <span>Name is required.</span>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="Email">
                                    Email<sup>*</sup>
                                </label>
                                <input
                                    className="text-black w-[40%]"
                                    type="email"
                                    name="Email"
                                    id="Email"
                                    placeholder="Enter email"
                                    {...register("Email", { required: true })}
                                />
                                {errors.Email && (
                                    <span>Email is required.</span>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="Desc">
                                    Description<sup>*</sup>
                                </label>
                                <textarea
                                    className="text-black w-[40%]"
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Enter description"
                                    {...register("description", {
                                        required: true,
                                    })}
                                />
                                {errors.description && (
                                    <span>Image Description is required.</span>
                                )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className=" border border-yellow-400 bg-yellow-400 rounded-sm w-[40%] py-1 px-3"
                            disabled={loading}
                        >
                            Upload
                        </button>
                    </form>
                </div>
                <div className="w-[40%]"></div>
            </div>
        </div>
    );
};

export default Dashboard;
