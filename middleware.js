export { default } from "next-auth/middleware";

export const config = { matcher: ["/categories/:id*", "/add"] };
