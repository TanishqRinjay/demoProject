import React, { useEffect, useState } from "react";
import { Link, useLocation, matchPath } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="h-14 w-full border-b border-richblack-700 bg-richblack-900 flex justify-around items-center">
                {/* Login/SignUp/Dashboard */}
                    {(
                        <div className="flex flex-row gap-4">
                            <Link
                                to={"/login"}
                                className="px-3 py-2 rounded-lg text-richblack-100 border border-richblack-700 bg-richblack-800"
                            >
                                Log in
                            </Link>
                            <Link
                                to={"/signup"}
                                className="px-3 py-2 rounded-lg text-richblack-100 border border-richblack-700 bg-richblack-800"
                            >
                                Sign up
                            </Link>
                        </div>
                    )}
        </div>
    );
};

export default Navbar;
