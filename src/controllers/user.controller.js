import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    // res.status(200).json({
    //     message: "OK"
    // })

    // get user details frmo frontend
    // validation
    // check if user is unique (via username and email)
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token from response
    // check for user creation
    // if yes then return response
    
    const { fullName, email, username, password } = req.body
    console.log("email: ", email);
})

export { registerUser }