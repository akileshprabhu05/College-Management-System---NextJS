import { SignUp } from "@clerk/nextjs";

export default function signUp() {
    return(
        <div className="flex h-screen justify-center items-center">
            <SignUp/>
        </div>
    )
}