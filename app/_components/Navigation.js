import { auth } from "../_lib/auth";
import NavBar from "./NavBar";

export default async function Navigation() {
  const session = await auth();

  return <NavBar session={session} />;
}
