import { auth } from "@clerk/nextjs/server";

// Make the function async since auth() returns a Promise
export async function role() {
  const session = await auth();
  return (session?.sessionClaims?.metadata as { role?: string })?.role;
}

export async function CurrentUserId() {
    const session = await auth();
    return session?.userId;
  }

// If you need to use this in a component or API route:
export async function roles<T>(callback: (role: string | undefined) => T) {
  const session = await auth();
  const role = (session?.sessionClaims?.metadata as { role?: string })?.role;
  return callback(role);
}