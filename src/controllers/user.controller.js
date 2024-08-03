import { asyncHandler } from "../utils/asyncHandler.js";
const registerUser = asyncHandler (async (req, res) => {
    // Step to register user
    // 1 : get user details from frontend
    // 2 : validation  i.e username, email, password
    // 3 : user already exists?
    // 4 : check for images, avatar 
    // 5 : upload them to cloudinary ( extract url from cloudinary response) , check again
    // 6 : create user object - create entry in db
    // 7 : remove password & refresh token field from response
    // 8 : check for user creation
    // 9 : return response

    // 1 : 
    const { fullName, email, userName, password } = req.body
    console.log("user data :-",fullName, email, userName, password);
    
})



export { registerUser }