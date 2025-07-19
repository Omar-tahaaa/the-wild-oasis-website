import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

async function page() {

  const session = await auth()
  const firstname = session.user.name.split(" ").at(0)

  return <div>hello, {firstname}</div>;
}

export default page;
