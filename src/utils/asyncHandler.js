//method 1

const asyncHandler=(requestHandler)=>{
   (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).
    catch((err)=>next(err))
   }
}



//Method 2

// export {asyncHandler}

// const asyncHandler=(fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code ||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }